import "./../css/CRUDAdmin.css";
import React, { useEffect, useState } from "react";
import { getCollections, getPlaylists, getMusics } from "./services/api.js"

function CRUDAdmin() {
	const [collections, setCollections] = useState();
	const [playlists, setPlaylists] = useState();
	const [musics, setMusics] = useState();

	useEffect(() => {
		getCollections
		.then((response) => (
			setCollections(response.data.results)
		))
	}, []);

	useEffect(() => {
		getPlaylists
		.then((response) => (
			setPlaylists(response.data.results)
		))
	}, []);

	useEffect(() => {
		getMusics
		.then((response) => (
			setMusics(response.data.results)
		))
	}, []);

	return (
		<div className="tables">
			<h3 className="title">Collections</h3>
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
								<td className="actions"><button>Update</button> | <button>Delete</button></td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>

			<h3 className="title">Playlists</h3>
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
							<td className="actions"><button>Update</button> | <button>Delete</button></td>
							</tr>
						))
					}
				</tbody>
			</table>
			</div>


			<h3 className="title">Musics</h3>
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
							<td className="actions"><button>Update</button> | <button>Delete</button></td>
							</tr>
						))
					}
				</tbody>
			</table>
			</div>
		</div>	
	);
}

export default CRUDAdmin;