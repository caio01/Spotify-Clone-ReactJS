import "./../css/SinglePlaylist.css"
import ReactAudioPlayer from 'react-audio-player'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import { updatePlaylist, getPlaylists, getMusics } from "./services/api.js"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function SinglePlaylist() {

	var {idPlaylist} = useParams()
	const [playlists, setPlaylists] = useState()
	const [musics, setMusics] = useState()

	const [id, setId] = useState('')
	const [name, setName] = useState('')
	const [desc, setDesc] = useState('')
	const [cover, setCover] = useState('')
	const [collections, setCollections] = useState('')
	const [modalTitle, setModalTitle] = useState('')
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, [playlists])
	useEffect(() => {getMusics.then(response => setMusics(response.data.results))}, [musics])

	function handleSubmit(e) {
		e.preventDefault()
		var aux = (musics.split(',')).map(x=>(parseInt(x)))
		var aux2 = (collections.split(',')).map(x=>(parseInt(x)))
		
		const data = {
			"name": name,
			"desc": desc,
			"cover": cover,
			"musics": aux,
			"collections": aux2
		}
		updatePlaylist(id, data)		
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
							{playlists?.filter(x=>x.id == idPlaylist)[0].users.length > 0 ? <p>Edit Playlist</p> : <p></p>}
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
							<p>{"Id: " + id}</p>
							<p>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></p>
							<p>Desc: <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}></input></p>
							<p>Cover: <input type="text" value={cover} onChange={(e)=>setCover(e.target.value)}></input></p>
							<p>Id Musics: <input type="text" value={musics} onChange={(e)=>setMusics(e.target.value)}></input></p>
							<p>Id Collections: <input type="text" value={collections} onChange={(e)=>setCollections(e.target.value)}></input></p>
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
		</>
	)
}
