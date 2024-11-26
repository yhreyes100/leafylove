import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../img/plantapp.png";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	useEffect(()=>{
	async ()=>{
		await fetch(getStore().urlFetchApi + "/user/" + localStorage.getItem('id'), {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": 'Bearer ' + localStorage.getItem('jwt-token')
			}
		})
			.then(res => res.json())
			.then(data => {
				actions.setUser(data["user"])
			})
			.catch(err => console.error(err));
	 }
	},[])
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={logoImg} className="rounded-circle img-fluid" style={{ width: '100px' }} /></span>
				</Link>
				<div className="ml-auto">

					<Link to="/dashboard">
						<button className="btn btn-success me-2">Dashboard </button>
					</Link>
					{
						store.user==""?
						<Link to="/signup">
						<button className="btn btn-success">Sign Up/Register <i class="fa-solid fa-user"></i></button>
						</Link>
						:
						<Link to="/logoff">
						<button className="btn btn-success">{store.user["username"]} <i class="fa-solid fa-user"></i></button>
						</Link>		
					}
					
				</div>
			</div>
		</nav>
	);
};

