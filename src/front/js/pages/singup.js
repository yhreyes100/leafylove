import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/singup.css";
import loginpicImageUrl1 from "../../img/pl1.jpg";
import { useNavigate,Link } from "react-router-dom";
export const Singup = () => {
	const { store, actions } = useContext(Context);
	const [passw, setPassw] = useState("")
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	return (
		<section className="myform-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className="form-area login-form">
							<div className="form-content">
								<img src={loginpicImageUrl1} />
							</div>
							<div className="form-input">
								<h2>LeafyLove</h2>
								<div className="col form">
									<div className="form-floating ">
										<input type="text" className="form-control border-0 border-bottom border-success shadow-none text-success fw-bold ginput" id="floatingName" placeholder="name@example.com" required />
										<label className="glabel" htmlFor="floatingName">Nickname</label>
									</div>
									<div className="form-floating">
										<input type="email" className="form-control border-0 border-bottom border-success shadow-none text-success fw-bold ginput" id="floatingInput" placeholder="name@example.com" required />
										<label className="glabel" htmlFor="floatingInput">Email</label>
									</div>
									<div className="form-floating form-group">
										<input type="password" className="form-control border-0 border-bottom border-success shadow-none text-success fw-bold ginput" id="floatingPassword" placeholder="Password" required />
										<label className="glabel" htmlFor="floatingPassword">Password</label>
									</div>
									<button className="btn btn-success rbuttom">Singup</button>
									<div className="text-center pb-4 mt-4">
										You have an account? <Link to="/login">Login</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
