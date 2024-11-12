import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/plantapp.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={logoImg} className="rounded-circle img-fluid" style={{ width: '100px' }} /></span>
				</Link>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
				<div className="ml-auto">

					<Link to="/library">
						<button className="btn btn-success me-2">Plant Blog </button>
					</Link>
					<Link to="/demo">
						<button className="btn btn-success">Sign Up/Register <i class="fa-solid fa-user"></i></button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

