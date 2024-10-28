import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Library = () => {
	const { store, actions } = useContext(Context);
    useEffect(() =>{
        actions.getPlantList()
    }, [])
	return (
		<div className="container d-flex gap-5">
            
			{
                store.plantList.slice(0, 10).map((plant) =>{
                    return <div key={plant.id}>
                        <h1>{plant.common_name}</h1>
                        <h2>id: {plant.id}</h2>
                    </div>
                })
            }
		</div>
	);
};
