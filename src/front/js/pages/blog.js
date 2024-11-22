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

        catch (error){
            console.error(error)
        }
    }

    return (
        <div>
            <h2>Plant Blog TBC</h2>
        </div>
    )
}

export default PlantBlog;