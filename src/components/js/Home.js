import "./../css/Home.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getCollections, getPlaylists } from "./services/api.js"

function Home() {
	const [collections, setCollections] = useState();
	const [playlists, setPlaylists] = useState();

	useEffect(() => {getCollections.then(response => setCollections(response.data.results))}, []);
	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, []);

	console.log(playlists?.filter(w=>w.collections.filter(x=>x.id == 11).length > 0))

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
				{playlists?.filter(w=>w.collections.filter(x=>x.id == collection.id).length > 0).map(playlist=>
					<div className="section-content-albuns-album">
						<Link to={`/singleplaylist/${collection.id}/${(playlist.id)}`} className="navbar-brand">
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
	));

	return (
		<div className="body">
			<section className="content">
				{dataHTML}
			</section>
		</div>
	);
}

export default Home;