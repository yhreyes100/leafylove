import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import loginpicImageUrl1 from "../../img/pl1.jpg";
import loginpicImageUrl from "../../img/pl6.jpg";
export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<section class="myform-area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8">
					<div class="form-area login-form">
						<div class="form-content">
							<img src={loginpicImageUrl1}/>
						</div>
						<div class="form-input">
							<h2>LeafyLove</h2>
							<form>
								<div class="form-group">
									<input type="text"  id="" name="name" required/>
									<label>User Name</label>
								</div>
								<div class="form-group">
									<input type="password" id="" name="password" required/>
									<label>password</label>
								</div>
								<div class="myform-button">
									<button class="myform-btn">Login</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	);
};
