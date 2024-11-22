import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddPlant = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    var navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    const addPlantToGrid = (plant) => {
        console.log(plant)
        let localGrid = [...store.grid];
        localGrid[params.ind].plant = plant;
        actions.setGrid(localGrid);
        navigate("/my-garden");
    }

    return (
        <div className="container">
            <h1 className="display-4">Adding plant to garden slot: {params.ind}</h1>

            <hr className="my-4" />
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul className="search-results">
                {searchTerm && store.plantLibrary.filter(
                    (plant) => plant.commonName.toLowerCase().startsWith(searchTerm))
                    .map((plantResult) => <li onClick={() => addPlantToGrid(plantResult)}>{plantResult.commonName}</li>)
                }
            </ul>

            <Link to="/my-garden">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back to Grid
                </span>
            </Link>
        </div>
    );
};