import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/js/Header.js";
import Sidebar from "./components/js/Sidebar.js";
import Home from "./components/js/Home.js";
import Support from "./components/js/Support.js";
import SignUp from "./components/js/SignUp.js";
import Footer from "./components/js/Footer.js";
import SinglePlaylist from "./components/js/SinglePlaylist.js";

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
					<Route path="singleplaylist" element={<SinglePlaylist />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
