import "./../css/SinglePlaylist.css";
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { getPlaylists, getMusics } from "./services/api.js"

export default function SinglePlaylist() {

	var {idPlaylist} = useParams();
	const [playlists, setPlaylists] = useState();
	const [musics, setMusics] = useState();

	useEffect(() => {getPlaylists.then(response => setPlaylists(response.data.results))}, []);
	useEffect(() => {getMusics.then(response => setMusics(response.data.results))}, []);

	const musicsHTML = musics?.filter(w=>w.playlists.filter(x=>x.id == idPlaylist).length > 0).map(music=>
			<div className="music-audio">
				<div className="music">
					<h3>{music.id}. {music.musicname}</h3>
					<h7>{music.author} {music.album}</h7>
				</div>
				<div className="audio-play">
					<ReactAudioPlayer src={music.src} controls/>
				</div>
			</div>
	);

	const dataHTML = (
			<div className="playlist">
				<div className="desc-playlist">
					<h3>
						{playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.name)}
					</h3>
					<img className="album-img" src={playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.cover)} alt="capa-album"/>
					<h4>
						{playlists?.filter(x=>x.id == idPlaylist).map(playlist=>playlist.desc)}
					</h4>
				</div>
				<div className="div-musics">
					{musicsHTML}
				</div>
			</div>
	);

	return (
		<>
			<main>
				<div className="singlePlaylist">
					{dataHTML}
				</div>
			</main>
		</>
	);
}
