import "./../css/CRUDAdmin.css";
import React, { useEffect, useState } from "react";
import { getCollections, getPlaylists, getMusics, deleteMusic, deleteCollection, deletePlaylist } from "./services/api.js"
import { Link } from "react-router-dom";

function CRUDAdmin() {
	const [collections, setCollections] = useState();
	const [playlists, setPlaylists] = useState();
	const [musics, setMusics] = useState();
	const [modalCollections, setModalCollections] = useState(false);
	const [modalPlaylists, setModalPlaylists] = useState(true);
	const [modalMusics, setModalMusics] = useState(true);

	useEffect(() => {getCollections.then(response => setCollections(response.data.results))}, []);
	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, []);
	useEffect(() => {getMusics.then(response => setMusics(response.data.results))}, []);

	function modalSelected(select) {
		if(select == 'c') {
			setModalCollections(false);
			setModalPlaylists(true);
			setModalMusics(true);
		} else if(select == 'p') {
			setModalCollections(true);
			setModalPlaylists(false);
			setModalMusics(true);
		} else if(select == 'm') {
			setModalCollections(true);
			setModalPlaylists(true);
			setModalMusics(false);
		}
	}

	return (
		<div class="card text-center">
			<div class="card-header">
				<ul class="nav nav-tabs card-header-tabs">
					<li class="nav-item">
						<Link to={'#'} className="nav-link link" onClick={()=>modalSelected('c')}>Collections</Link>
					</li>
					<li class="nav-item">
						<Link to={'#'} class="nav-link link" onClick={()=>modalSelected('p')}>Playlists</Link>
					</li>
					<li class="nav-item">
						<Link to={'#'} class="nav-link link" onClick={()=>modalSelected('m')}>Musics</Link>
					</li>
				</ul>
			</div>

			<div class="card-body">
				<div hidden={modalCollections}>
					<h3 className="title">Collections</h3>
					<div class="table-wrapper-scroll-y my-custom-scrollbar">
						<div className="div-table">
							<table className="table table-striped">
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
											<tr>
											<th scope="row">{collection.id}</th>
											<td>{collection.name}</td>
											<td>{collection.playlists.map(x=>x.value) + " "}</td>
											<td className="actions"><button className="btn-upd">Update</button> | <button className="btn-del" onClick={()=>deleteCollection(collection.id)}>Delete</button></td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div hidden={modalPlaylists}>
					<h3 className="title">Playlists </h3>
					<div class="table-wrapper-scroll-y my-custom-scrollbar">
						<div className="div-table">
						<table className="table table-striped">
							<thead>
								<tr>
								<th scope="col">Id</th>
								<th scope="col">Name</th>
								<th scope="col">Desc</th>
								<th scope="col">Collection</th>
								<th scope="col">Musics</th>
								<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{
									playlists?.map(playlist => (
										<tr>
										<th scope="row">{playlist.id}</th>
										<td>{playlist.name}</td>
										<td>{playlist.desc}</td>
										<td>{playlist.name}</td>
										<td>{playlist.musics.map(x=>x.value) + " "}</td>
										<td className="actions"><button className="btn-upd">Update</button> | <button className="btn-del" onClick={()=>deletePlaylist(playlist.id)}>Delete</button></td>
										</tr>
									))
								}
							</tbody>
						</table>
						</div>
					</div>
				</div>

				<div hidden={modalMusics}>
					<h3 className="title">Musics</h3>
					<div class="table-wrapper-scroll-y my-custom-scrollbar">
						<div className="div-table">
							<table className="table table-striped">
								<thead>
									<tr>
									<th scope="col">Id</th>
									<th scope="col">Name</th>
									<th scope="col">Album</th>
									<th scope="col">Author</th>
									<th scope="col">Playlist</th>
									<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									{
										musics?.map(music => (
											<tr>
											<th scope="row">{music.id}</th>
											<td>{music.musicname}</td>
											<td>{music.album}</td>
											<td>{music.author}</td>
											<td>{music.playlists.map(x=>x.value) + " "}</td>
											<td className="actions"><button className="btn-upd">Update</button> | <button className="btn-del" onClick={()=>deleteMusic(music.id)}>Delete</button></td>
											</tr>
										))
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CRUDAdmin;