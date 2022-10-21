import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import 'react-dropdown/style.css'
import "./../css/Header.css"

export default function Header() {

	const[ userLogged, setUserLogged ] = useState()
	const[ iconUser, setIconUser ] = useState(false)

	useEffect(()=>{
		if(localStorage.length > 0) {
			setUserLogged(JSON.parse(localStorage.getItem("userLogged"))[0].name)
			setIconUser(true)
		}
	}, [userLogged])

	function logout() {
		localStorage.removeItem("userLogged")
		setUserLogged()
		setIconUser(false)
	}

	return (
		<>
			<header>
				<nav className="navbar navbar-expand-lg">
					<div className="container-fluid">
						<Link to="/" className="navbar-brand">
							<img className="navbar-logo" src="./assets/img/logo-spotify.png" alt="logo-spotify"/>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link link-support" to="#">
										Premium
									</Link>
								</li>
								<li className="nav-item ">
									<Link className="nav-link link-support" to="/support">
										Support
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-support" to="#">
										|
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-support" to="/signup">
										Sing-up
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-support" to="/login">
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link link-support" to="/listCollections">
										Admin
									</Link>
								</li>
							</ul>
						</div>
						<Link to="#" className="logout" hidden={!iconUser} onClick={logout}>Logout</Link>	
					</div>
				</nav>
			</header>
		</>
	)
}
