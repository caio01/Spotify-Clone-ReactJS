import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/js/Header.js";
import Sidebar from "./components/js/Sidebar.js";
import Home from "./components/js/Home.js";
import Support from "./components/js/Support.js";
import SignUp from "./components/js/SignUp.js";
import Login from "./components/js/Login.js";
import Footer from "./components/js/Footer.js";
import SinglePlaylist from "./components/js/SinglePlaylist.js";
import ListCollections_CRUD from "./components/js/ListCollections_CRUD.js";
import ListPlaylists_CRUD from "./components/js/ListPlaylists_CRUD.js";
import ListMusics_CRUD from "./components/js/ListMusics_CRUD.js";
import ListUsers_CRUD from "./components/js/ListUsers_CRUD.js";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="div">
				<Sidebar className="sidebar"/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="support" element={<Support />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="login" element={<Login />} />
					<Route path="singleplaylist/:idPlaylist" element={<SinglePlaylist />} />
					<Route path="listCollections" element={<ListCollections_CRUD />} />
					<Route path="listPlaylists" element={<ListPlaylists_CRUD />} />
					<Route path="listMusics" element={<ListMusics_CRUD />} />
					<Route path="listUsers" element={<ListUsers_CRUD />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
