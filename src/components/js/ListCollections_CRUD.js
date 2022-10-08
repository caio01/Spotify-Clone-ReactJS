import "./../css/List_CRUD.css";
import React, { useEffect, useState } from "react";
import { postCollection, getCollections, deleteCollection, updateCollection } from "./services/api.js"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ListCollections_CRUD() {
	const [collections, setCollections] = useState();
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [playlists, setPlaylists] = useState('1,2,3');
	const [modalTitle, setModalTitle] = useState('');
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {getCollections.then(response => setCollections(response.data.results))}, []);

	function handleSubmit(e) {
		e.preventDefault()
		var aux = (playlists.split(',')).map(x=>(parseInt(x)))
		
		const data = {
			"name": name,
			"playlists": aux
		}
		if(modalTitle == 'Update Collection') updateCollection(id, data)
		else if(modalTitle == 'New Collection') postCollection(data)
	}

	return (
		<div class="card text-center">

			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<Link to={'#'} className="nav-link active">Collections</Link>
					</li>
					<li class="nav-item">
						<Link to={'/listPlaylists'} class="nav-link link">Playlists</Link>
					</li>
					<li class="nav-item">
						<Link to={'/listMusics'} class="nav-link link">Musics</Link>
					</li>
				</ul>

				<img src="./assets/img/plus-circle.svg" class="plus-circle" 
					onMouseUp={()=>setModalTitle('New Collection')&setId('')
							      &setName('')&setPlaylists('')}
					onClick={handleShow}/>

			</div>

			<div class="card-body">
					<div class="table-wrapper-scroll-y my-custom-scrollbar">
						<div className="div-table">
							<table className="table">
								<thead>
									<tr>
									<th scope="col">Id</th>
									<th scope="col">Name</th>
									<th scope="col">Playlists</th>
									<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{
										collections?.map(collection => (
											<tr className="line">
											<th scope="row">{collection.id}</th>
											<td>{collection.name}</td>
											<td>{collection.playlists.map(x=>x.value) + " "}</td>
											<td className="actions"><Button className="btn-upd" variant="primary" 
												onMouseUp={()=>setModalTitle('Update Collection')&setId(collection.id)&setName(collection.name)
															  &setPlaylists(String(collection.playlists.map(x=> x.id)))} 
												onClick={handleShow}>Update</Button> | <button className="btn-del"
												onClick={()=>deleteCollection(collection.id)}>Delete</button></td>
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
					<Modal.Title>{modalTitle}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							<p>{"Id: " + id}</p>
							<p>Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input></p>
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

export default ListCollections_CRUD;