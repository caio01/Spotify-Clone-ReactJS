import "./../css/Home.css";
import { Link } from "react-router-dom";
import collections from "./services/json.js";

function Home() {

	const data = collections.map((c) => (
		<div>
			<div className="section-content-title">
				<h1>
					{c.name}
				</h1>
				<h3>
					<Link to="/">VER TUDO</Link>
				</h3>
			</div>
			<div className="section-content-albuns">
				{(c.playlistsList).map((p) => (
					<div className="section-content-albuns-album">
						<Link to={`/singleplaylist/${c.id}/${(p.id)-1}`} className="navbar-brand">
							<img className="section-content-albuns-album-img" src={"./assets/img/" + p.cover} alt="capa-album" />
							<h3>
								{p.name}
							</h3>
							<h4>
								{p.desc}
							</h4>
						</Link>
					</div>
				))}
			</div>
		</div>
	));

	return (
		<div className="body">
			<section className="content">
				{data}
			</section>
		</div>
	);
}

export default Home;