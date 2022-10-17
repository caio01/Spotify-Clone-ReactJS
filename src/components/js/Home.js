import "./../css/Home.css"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { getCollections, getPlaylists, getUser, updateUser, postPlaylist } from "./services/api"
import { encrypt, decrypt } from "./services/crypt"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Home() {
	const [collections, setCollections] = useState();
	const [playlists, setPlaylists] = useState();

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

	const [namePlaylist, setNamePlaylist] = useState('');
	const [descPlaylist, setDescPlaylist] = useState('');
	const [coverPlaylist, setCoverPlaylist] = useState('');
	const [musicsPlaylist, setMusicsPlaylist] = useState('');
	const [showPlaylist, setShowPlaylist] = useState(false);
	const handleClosePlaylist = () => setShowPlaylist(false);
	const handleShowPlaylist = () => setShowPlaylist(true);

	useEffect(() => {getUser.then(response => setUsers(response.data.results))}, [])
	useEffect(() => {getCollections.then(response => setCollections(response.data.results))}, [])
	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, [])

	let user;
	if(localStorage.length > 0) user = JSON.parse(localStorage.getItem("userLogged"))[0]

	function handleSubmit(e) {
		e.preventDefault()
		
		const data = {
			"name": name,
			"email": email,
			"password": encrypt(password),
			"dateBirth": dateBirth,
			"gender": gender
		}
		updateUser(id, data)
	}

	function handleSubmitPlaylist(e) {
		e.preventDefault()

		var aux = (musicsPlaylist.split(',')).map(x=>(parseInt(x)))
		
		const data = {
			"name": namePlaylist,
			"desc": descPlaylist,
			"cover": coverPlaylist,
			"musics": aux,
			"users": [user.id]
		}
		postPlaylist(data)
	}

	const dataHTML = collections?.map((collection) => (
		<div>
			<div className="section-content-title">
				<h1>
					{collection.name}
				</h1>
				<h3>
					<Link to="#">VER TUDO</Link>
				</h3>
			</div>
			<div className="section-content-albuns">
				{playlists?.filter(w=>w.collections.filter(x=>x.id === collection.id).length > 0)
				.sort(
					function(x,y){
						let a = x.name.toUpperCase(),
							b = y.name.toUpperCase()
						return a === b ? 0 : a > b ? 1 : -1
					})
				.map(playlist=>
					<div className="section-content-albuns-album">
						<Link to={`/singleplaylist/${(playlist.id)}`} className="navbar-brand">
							<img className="section-content-albuns-album-img" src={playlist.cover} alt="capa-album" />
							<h3>
								{playlist.name}
							</h3>
							<h4>
								{playlist.desc}
							</h4>
						</Link>
					</div>
				)}
			</div>
		</div>
	))

	const dataUserHTML = (
		<div>
			<div className="section-content-title">
				<h1>
					Playlists do {user.name}
				</h1>
				<h3>
					<Link to="#">VER TUDO</Link>
				</h3>
			</div>
			<div className="section-content-albuns">
				{playlists?.filter(w=>w.users.filter(x=>x.id === user.id).length > 0)
				.sort(
					function(x,y){
						let a = x.name.toUpperCase(),
							b = y.name.toUpperCase()
						return a === b ? 0 : a > b ? 1 : -1
					})
				.map(playlist=>
					<div className="section-content-albuns-album">
						<Link to={`/singleplaylist/${(playlist.id)}`} className="navbar-brand">
							<img className="section-content-albuns-album-img" src={playlist.cover} alt="capa-album" />
							<h3>
								{playlist.name}
							</h3>
							<h4>
								{playlist.desc}
							</h4>
						</Link>
					</div>
				)}
			</div>
		</div>
	)

	if(localStorage.length > 0) {
		return (
			<div>
				<div className="menu-user">
					<h3 onClick={()=>setModalTitle('Update User')&setId(user.id)&setName(user.name)&setEmail(user.email)
									&setPassword(decrypt(user.password))&setDateBirth(user.dateBirth)&setGender(user.gender)}
									onMouseUp={handleShow}>
					User Settings</h3>
					<h3 onClick={handleShowPlaylist}>New Playlist</h3>
				</div>
				<div className="body">
					<section className="content">
						{dataUserHTML}
						{dataHTML}
					</section>
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
				

				<Modal show={showPlaylist} onHide={handleClosePlaylist} >
				<form onSubmit={e => handleSubmitPlaylist(e)}>
					<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
							<h5>Playlist is private to {user.name}</h5>
							<p>{"Id: "}</p>
							<p>Name: <input type="text" value={namePlaylist} onChange={(e)=>setNamePlaylist(e.target.value)}></input></p>
							<p>Desc: <input type="text" value={descPlaylist} onChange={(e)=>setDescPlaylist(e.target.value)}></input></p>
							<p>Cover: <input type="text" value={coverPlaylist} onChange={(e)=>setCoverPlaylist(e.target.value)}></input></p>
							<p>Id Musics: <input type="text" value={musicsPlaylist} onChange={(e)=>setMusicsPlaylist(e.target.value)}></input></p>
					</Modal.Body>
					<Modal.Footer>
					<Button variant="secondary" onClick={handleClosePlaylist}>
						Cancel
					</Button>
					<Button variant="primary" type="submit" onClick={handleClosePlaylist}>
						Save Changes
					</Button>
					</Modal.Footer>
				</form>
			</Modal>

			</div>
		)
	}

	return (
		<div className="body">
			<section className="content">
				{dataHTML}
			</section>
		</div>
	)
}

export default Home;