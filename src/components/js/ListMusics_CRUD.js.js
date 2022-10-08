import "./../css/List_CRUD.css";
import React, { useEffect, useState } from "react";
import { getMusics, deleteMusic, updateMusic } from "./services/api.js"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListMusics_CRUD() {
	const [musics, setMusics] = useState();
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [author, setAuthor] = useState('');
	const [album, setAlbum] = useState('');
	const [src, setSrc] = useState('');
	const [playlists, setPlaylists] = useState('');
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {getMusics.then(response => setMusics(response.data.results))}, []);

	function handleSubmit(e) {
		e.preventDefault()
		var aux = (playlists.split(',')).map(x=>(parseInt(x)))
		
		const data = {
			"musicname": name,
			"author": author,
			"album": album,
			"src": src,
			"playlists": aux
		}
		updateMusic(id, data);
	}

	return (
		<div class="card text-center">

			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<Link to={'/listCollections'} className="nav-link link">Collections</Link>
					</li>
					<li class="nav-item">
						<Link to={'/listPlaylists'} class="nav-link link">Playlists</Link>
					</li>
					<li class="nav-item">
						<Link to={'#'} class="nav-link active">Musics</Link>
					</li>
				</ul>
			</div>

			<div class="card-body">
					<div class="table-wrapper-scroll-y my-custom-scrollbar">
						<div className="div-table">
							<table className="table">
								<thead>
									<tr>
									<th scope="col">Id</th>
									<th scope="col">Name</th>
									<th scope="col">Author</th>
									<th scope="col">Album</th>
									<th scope="col">Playlists</th>
									<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{
										musics?.map(music => (
											<tr className="line">
											<th scope="row">{music.id}</th>
											<td>{music.musicname}</td>
											<td>{music.author}</td>
											<td>{music.album}</td>
											<td>{music.playlists.map(x=>x.value) + " "}</td>
											<td className="actions"><Button className="btn-upd" variant="primary" 
											onMouseUp={()=>setId(music.id)&setName(music.musicname)&setAuthor(music.author)&setAlbum(music.album)
														  &setSrc(music.src)&setPlaylists(String(music.playlists.map(x=> x.id)))}
											onClick={handleShow}>Update</Button> | <button className="btn-del" 
											onClick={()=>deleteMusic(music.id)}>Delete</button></td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>

			<Modal show={show} onHide={handleClose} >
				<form onSubmit={e => handleSubmit(e)}>
					<Modal.Header closeButton>
					<Modal.Title>Update Collection</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							<p>{"Id: " + id}</p>
							<p>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></p>
							<p>Author: <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}></input></p>
							<p>Album: <input type="text" value={album} onChange={(e)=>setAlbum(e.target.value)}></input></p>
							<p>Source: <input type="text" value={src} onChange={(e)=>setSrc(e.target.value)}></input></p>
							<p>Id Playlists: <input type="text" value={playlists} onChange={(e)=>setPlaylists(e.target.value)}></input></p>
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


		</div>
	);
}

export default ListMusics_CRUD;