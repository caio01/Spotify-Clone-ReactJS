import "./../css/SinglePlaylist.css"
import ReactAudioPlayer from 'react-audio-player'
import { useParams, useNavigate, Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import { deletePlaylist, updatePlaylist, config } from "./services/api.js"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from "axios"

export default function SinglePlaylist() {

	var {idPlaylist} = useParams()
	const navigate = useNavigate()
	const [playlists, setPlaylists] = useState()
	const [musics, setMusics] = useState()

	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [cover, setCover] = useState('')
	const [modalTitle, setModalTitle] = useState('')
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const [searchMusic, setSearchMusic] = useState('')
	const [musicsArray, setMusicsArray] = useState([])
	const [show2, setShow2] = useState(false)
	const handleClose2 = () => setShow2(false)
	const handleShow2 = () => setShow2(true)

	useEffect(() => {
		axios.get("https://api.baserow.io/api/database/rows/table/103741/?user_field_names=true", config)
		.then(response => setPlaylists(response.data.results))
	}, [handleClose])
	useEffect(() => {
		axios.get("https://api.baserow.io/api/database/rows/table/103742/?user_field_names=true&size=200", config)
		.then(response => setMusics(response.data.results))
	}, [handleClose])

	function handleSubmit(e) {
		e.preventDefault()

		const data = {
			"name": name,
			"desc": desc,
			"cover": cover,
			"musics": musicsArray
		}
		updatePlaylist(idPlaylist, data)
	}

	const musicsHTML = musics?.filter(w=>w.playlists.filter(x=>x.id == idPlaylist).length > 0).map(music=>
		<div className="music-audio">
			<div className="music">
				<h3>{music.musicname}</h3>
				<h7>{music.author} {music.album}</h7>
			</div>
			<div className="audio-play">
				<ReactAudioPlayer src={music.src} controls/>
			</div>
		</div>
	)

	return (
		<>
			<main>
				<div className="singlePlaylist">
					<div className="playlist">
						<div className="desc-playlist">
							<h3>
								{playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.name)}
							</h3>
							<img className="album-img" src={playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.cover)} alt="capa-album"/>
							<h4>
								{playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.desc)}
							</h4>
							{playlists?.filter(x=>x.id == idPlaylist)[0].users.length > 0 ? 
							<Link to={'#'} className='edit-play'><p onMouseUp={()=>setModalTitle('Update Playlist')
											 &setName(playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.name)[0])
											 &setDesc(playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.desc)[0])
							   				 &setCover(playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.cover)[0])
											 &setMusicsArray(playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.musics.map(x=> x.id))[0])
										}
							   onClick={handleShow}>Edit Playlist</p></Link> : <p></p>}
							{playlists?.filter(x=>x.id == idPlaylist)[0].users.length > 0 ? 
							<Link to={'/'}><p onClick={()=>deletePlaylist(idPlaylist)}>Delete Playlist</p></Link> : <p></p>}
						</div>
						<div className="div-musics">
							{musicsHTML}
						</div>
					</div>
				</div>
			</main>

			<Modal show={show} onHide={handleClose} >
				<form onSubmit={e => handleSubmit(e)}>
					<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							<p>{"Id: " + idPlaylist}</p>
							<p>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></p>
							<p>Desc: <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}></input></p>
							<p>Cover: <input type="text" value={cover} onChange={(e)=>setCover(e.target.value)}></input></p>
							<p>Musics: <button className="add-musics" onClick={handleShow2}>Add or remove musics</button></p>
					</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="primary" type="submit" onClick={handleClose}>
						Save Changes
					</Button>
					</Modal.Footer>
				</form>
			</Modal>

			<Modal show={show2} onHide={handleClose2} size='xl'>
				<form>
					<Modal.Header closeButton>
					<Modal.Title className="modal-title">
						<h2>Add Musics in Playlist</h2>
						<input type="text" className="input-search"
							placeholder="Search music" value={searchMusic} onChange={(e)=>setSearchMusic(e.target.value)}/>
					</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div class="table-wrapper-scroll-y my-custom-scrollbar">
							<div className="div-table">
								<table className="table">
									<thead>
										<tr>
										<th scope="col">Id</th>
										<th scope="col">Name</th>
										<th scope="col">Author</th>
										<th scope="col">Album</th>
										<th scope="col">Actions</th>
										</tr>
									</thead>
									<tbody>
										{musics?.filter(m => 
											m.musicname.toLowerCase().includes(searchMusic.toLowerCase())||
											m.author.toLowerCase().includes(searchMusic.toLowerCase())||
											m.album.toLowerCase().includes(searchMusic.toLowerCase())
											)	
											.map(music => (
											<tr className="line">
											<th scope="row">{music.id}</th>
											<td>{music.musicname}</td>
											<td>{music.author}</td>
											<td>{music.album}</td>
											<td className="actions">
												<Button id={music.id}
														className={musicsArray.includes(music.id) ? 'btn btn-danger' : 'btn btn-primary'}
														variant="primary"
														onClick={()=>{
															const index = musicsArray.indexOf(music.id)
															if (index > -1) {
																musicsArray.splice(index, 1)
																document.getElementById(music.id).className = 'btn-upd'
																document.getElementById(music.id).textContent = 'Add'
															} else {
																musicsArray.push(music.id)
																document.getElementById(music.id).className = 'btn-del'
																document.getElementById(music.id).textContent = 'Del'
															}
														}}>
													{musicsArray.includes(music.id) ? 'Del' : 'Add'}
												</Button>
											</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
					</Modal.Footer>
				</form>
			</Modal>
		</>
	)
}