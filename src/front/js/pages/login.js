import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import loginpicImageUrl1 from "../../img/pl1.jpg";
import { useNavigate, Link } from "react-router-dom";
export const Login = () => {
	const { store, actions } = useContext(Context);
	const [passw, setPassw] = useState("")
	const [userName, setUserName] = useState("")
	return (
		<section className="myform-area">
			<div className="container justify-content-center">
				<div className="row">
					<div className="col-lg-2"></div>
					<div className="col-lg-8 col-sm-12 row justify-content-center content">
						<div className="col-lg-6 col-sm-6 content">
							<img className="logimg" src={loginpicImageUrl1} />
						</div>
						<div className="col-lg-6 col-sm-6 content">
							<h2 className="sitename">LeafyLove</h2>
							<div className="form-floating form-group">
								<input type="email" className="form-control border-0 border-bottom border-success shadow-none text-success fw-bold ginput" id="floatingInput" placeholder="name@example.com" required />
								<label className="glabel" htmlFor="floatingInput">Email or Nickname</label>
							</div>
							<div className="form-floating form-group">
								<input type="password" className="form-control border-0 border-bottom border-success shadow-none text-success fw-bold ginput" id="floatingPassword" placeholder="Password" required />
								<label className="glabel" htmlFor="floatingPassword">Password</label>
							</div>
							<button className="btn btn-success rbuttom">Login</button>
							<div className="text-center pb-4 mt-4">
								You have an account? <Link to="/singup">Singup</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-2"></div>
				</div>
			</div>
		</section>
	);
};
