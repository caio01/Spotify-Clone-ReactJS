import "./../css/List_CRUD.css";
import React, { useEffect, useState } from "react";
import { postUser, getUser, deleteUser, updateUser } from "./services/api.js"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { encrypt, decrypt } from './services/crypt.js';

function ListUsers_CRUD() {
	const [users, setUsers] = useState();
	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [dateBirth, setDateBirth] = useState('');
	const [gender, setGender] = useState('');
	const [modalTitle, setModalTitle] = useState('');
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {getUser.then(response => setUsers(response.data.results))}, []);

	function handleSubmit(e) {
		e.preventDefault()
		
		const data = {
			"name": name,
			"email": email,
			"password": encrypt(password),
			"dateBirth": dateBirth,
			"gender": gender
		}
		if(modalTitle == 'Update User') updateUser(id, data)
		else if(modalTitle == 'New User') postUser(data)
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
						<Link to={'/listMusics'} class="nav-link link">Musics</Link>
					</li>
					<li class="nav-item">
						<Link to={'#'} class="nav-link active">Users</Link>
					</li>
				</ul>

				<img src="./assets/img/plus-circle.svg" class="plus-circle" 
					onMouseUp={()=>setModalTitle('New User')&setId('')&setName('')&setEmail('')
							      &setPassword('')&setDateBirth('')&setGender('')}
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
									<th scope="col">Email</th>
									<th scope="col">DateBirth</th>
									<th scope="col">Gender</th>
									<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{
										users?.map(user => (
											<tr className="line">
											<th scope="row">{user.id}</th>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>{user.dateBirth}</td>
											<td>{user.gender}</td>
											<td className="actions"><Button className="btn-upd" variant="primary" 
												onMouseUp={()=>setModalTitle('Update User')&setId(user.id)&setName(user.name)&setEmail(user.email)
															  &setPassword(decrypt(user.password))&setDateBirth(user.dateBirth)&setGender(user.gender)} 
												onClick={handleShow}>Update</Button> | <button className="btn-del"
												onClick={()=>deleteUser(user.id)}>Delete</button></td>
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
							<p>Email: <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input></p>
							<p>Password: <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input></p>
							<p>DateBirth: <input type="text" value={dateBirth} onChange={(e)=>setDateBirth(e.target.value)}></input></p>
							<p>Gender: <input type="text" value={gender} onChange={(e)=>setGender(e.target.value)}></input></p>
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

export default ListUsers_CRUD;