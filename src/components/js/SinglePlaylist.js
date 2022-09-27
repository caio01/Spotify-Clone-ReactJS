import "./../css/SinglePlaylist.css";
import ReactAudioPlayer from 'react-audio-player';
import { Link } from "react-router-dom";

export default function SinglePlaylist() {
	return (
		<>
			<main>
				<div className="singlePlaylist">
					<div className="playlist">
						<div className="desc-playlist">
							<img className="album-img" src="./assets/img/capa-album.png" alt="capa-album"/>
							<h3>
								Playlist 1
							</h3>
							<h4>
								Playlist Description
							</h4>
						</div>
						<div className="div-musics">
							<div className="music-audio">
								<div className="music">
									<h3>1. Music 1</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div>
							<div className="music-audio">
								<div className="music">
									<h3>2. Music 2</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div>
							<div className="music-audio">
								<div className="music">
									<h3>3. Music 3</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div>
							<div className="music-audio">
								<div className="music">
									<h3>4. Music 4</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div><div className="music-audio">
								<div className="music">
									<h3>5. Music 5</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div><div className="music-audio">
								<div className="music">
									<h3>6. Music 6</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div><div className="music-audio">
								<div className="music">
									<h3>7. Music 7</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div><div className="music-audio">
								<div className="music">
									<h3>8. Music 8</h3>
									<h7>Author - Album</h7>
								</div>
								<div className="audio-play">
									<ReactAudioPlayer src="./assets/audio/music.mp3" controls/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
