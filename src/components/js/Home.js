import "./../css/Home.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getCollections, getPlaylists } from "./services/api.js"

function Home() {
	const [collections, setCollections] = useState();
	const [playlists, setPlaylists] = useState();

	useEffect(() => {getCollections.then(response => setCollections(response.data.results))}, []);
	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, []);

	let user;
	if(localStorage.length > 0) user = JSON.parse(localStorage.getItem("userLogged"))[0]

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
					<p><Link to={"/listUsers"}>User Settings</Link></p>
					<p><Link to={"/listPlaylists"}>New Playlist</Link></p>
				</div>
				<div className="body">
					<section className="content">
						{dataUserHTML}
						{dataHTML}
					</section>
				</div>
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