import "./../css/SinglePlaylist.css";
import { Link } from "react-router-dom";

export default function SinglePlaylist() {
	return (
		<>
			<main>
				<div class="content">
					<h1 class="title">
						<Link to="/">
							<img src="./assets/img/spotify.svg" alt="Spotify" /> Spotify
						</Link>
					</h1>
					<div class="playlist">
						<div class="desc-playlist">
							<img class="album-img" src="./assets/img/capa-album.png" alt="capa-album"/>
							<h3>
								Playlist 1
							</h3>
							<h4>
								Playlist Description
							</h4>
						</div>
						<div class="div-musics">
							<div class="music">
								<h3>1. Music 1</h3>
								<h7>Author - Album</h7>
							</div>
							<div class="music">
								<h3>2. Music 2</h3>
								<h7>Author - Album</h7>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
