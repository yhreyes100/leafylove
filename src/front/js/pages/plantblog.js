import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"


const PlantBlog = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetchingData();
    }, []);

    const fetchingData = async () => {
        try {
            const res = await fetch("https://perenual.com/api/species-list?key=sk-1vy2672bc94d102fe7548");
            console.log("response", res)
            const data = await res.json();
            console.log("data", data)
        }

        catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <h2>Plant Blog TBC</h2>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>

    )
}

export default PlantBlog;