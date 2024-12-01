import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css";
import { useNavigate, Link } from "react-router-dom";
export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [passw, setPassw] = useState("")
    const [rpassw, setRPassw] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [userId, setUserId] = useState("")
    useEffect(()=>{
        actions.setUser(localStorage.getItem('id'))
    },[])
    return (
        <div className="container dashboardcontainer">
            <div className="row">
                <div className="col-lg-2 col-sm-12">
                    <Link to="/profile">
                        <div className="card carddashboard">
                            <img className="card-img-top" src="https://thumbs.dreamstime.com/b/icono-de-perfil-usuario-bot%C3%B3n-verde-elegante-ilustraci%C3%B3n-vectorial-aislado-en-167325528.jpg" alt="Card image cap" />
                            <div className="card-body cbdashboard">
                                <h5 className="card-title">My Profile</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <Link to="/favorites">
                        <div className="card carddashboard">
                            <img className="card-img-top" src="https://thumbs.dreamstime.com/b/3d-green-checkmark-chrome-checkbox-23476468.jpg" alt="Card image cap" />
                            <div className="card-body cbdashboard">
                                <h5 className="card-title">My Favorites</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <Link to="">
                        <div className="card carddashboard">
                            <img className="card-img-top" src="https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-blog-icon-network-png-image_10540682.png" alt="Card image cap" />
                            <div className="card-body cbdashboard">
                                <h5 className="card-title">My Blog</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <Link to="/searchplant">
                        <div className="card carddashboard">
                            <img className="card-img-top" src="https://t4.ftcdn.net/jpg/00/32/60/43/240_F_32604304_CSYfu3eLnfb9HpPe9fV8Jktx2UFhWtwY.jpg" alt="Card image cap" />
                            <div className="card-body carddashboard">
                                <h5 className="card-title cbdashboard">My Search</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <Link to="/library">
                        <div className="card carddashboard">
                            <img className="card-img-top imglibrary" src="https://png.pngtree.com/png-clipart/20231209/original/pngtree-book-icon-glossy-green-round-button-e-learning-photo-png-image_13805270.png" alt="Card image cap" />
                            <div className="card-body cbdashboard">
                                <h5 className="card-title cardlibrary">My Library</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-2 col-sm-12">
                    <Link to="/my-garden">
                        <div className="card carddashboard">
                            <img className="card-img-top" src="https://img.freepik.com/premium-photo/picture-plant-with-green-leaves-white-background_605423-27920.jpg" alt="Card image cap" />
                            <div className="card-body cbdashboard">
                                <h5 className="card-title">My Garden</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
