import "./../css/List_CRUD.css";
import React, { useEffect, useState } from "react";
import { getPlaylists, deletePlaylist, updatePlaylist } from "./services/api.js"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListPlaylists_CRUD() {
	const [playlists, setPlaylists] = useState();
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [cover, setCover] = useState('');
	const [musics, setMusics] = useState('');
	const [collections, setCollections] = useState('');
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, []);
	console.log(playlists)

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
		console.log(data)
		updatePlaylist(id, data);
	}

	return (
		<div class="card text-center">

			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<Link to={'/listCollections'} className="nav-link link">Collections</Link>
					</li>
					<li class="nav-item">
						<Link to={'#'} class="nav-link active">Playlists</Link>
					</li>
					<li class="nav-item">
						<Link to={'/listMusics'} class="nav-link link">Musics</Link>
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
									<th scope="col">Desc</th>
									<th scope="col">Musics</th>
									<th scope="col">Collections</th>
									<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{
										playlists?.map(playlist => (
											<tr className="line">
											<th scope="row">{playlist.id}</th>
											<td>{playlist.name}</td>
											<td>{playlist.desc}</td>
											<td>{playlist.musics.map(x=>x.value) + " "}</td>
											<td>{playlist.collections.map(x=>x.value) + " "}</td>
											<td className="actions"><Button className="btn-upd" variant="primary" 
											onMouseUp={()=>setId(playlist.id)&setName(playlist.name)&setDesc(playlist.desc)
												          &setCover(playlist.cover)&setMusics(String(playlist.musics.map(x=> x.id)))
													      &setCollections(String(playlist.collections.map(x=> x.id)))} 
											onClick={handleShow}>Update</Button> | <button className="btn-del" 
											onClick={()=>deletePlaylist(playlist.id)}>Delete</button></td>
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


		</div>
	);
}

export default ListPlaylists_CRUD;