import "./../css/SinglePlaylist.css";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import collections from "./services/json.js";

export default function SinglePlaylist() {

	var { idCollection, idPlaylist } = useParams();
	idCollection -= 1;
	idPlaylist = idPlaylist % 5;
	
	const prefixImg = "./../../assets/img/";
	const prefixMsc = "./../../assets/audio/";

	const musics = collections[idCollection].playlistsList[idPlaylist].musics.map((m) => (
			<div className="music-audio">
				<div className="music">
					<h3>{m.id}. {m.musicname}</h3>
					<h7>{m.author} {m.album}</h7>
				</div>
				<div className="audio-play">
					<ReactAudioPlayer src={prefixMsc + m.src} controls/>
				</div>
			</div>
	));

	const data = (
			<div className="playlist">
				<div className="desc-playlist">
					<img className="album-img" src={prefixImg + collections[idCollection].playlistsList[idPlaylist].cover} alt="capa-album"/>
					<h3>
						{collections[idCollection].playlistsList[idPlaylist].name}
					</h3>
					<h4>
						{collections[idCollection].playlistsList[idPlaylist].desc}
					</h4>
				</div>
				<div className="div-musics">
					{musics}
				</div>
			</div>
	);

	return (
		<>
			<main>
				<div className="singlePlaylist">
					{data}
				</div>
			</main>
		</>
	);
}
