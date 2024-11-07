import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const PlantLibrary = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1>Favorite Plants</h1>
            {store.favoritePlantList.length === 0 ? (
                <p>No favorite plants added yet.</p>
            ) : (
                store.favoritePlantList.map((plant) => (
                    <div key={plant.id}>
                        <h2>{plant.common_name}</h2>
                        <button onClick={() => actions.removeFavorite(plant.id)}>Remove from Favorites</button>
                    </div>
                ))
            )}
        </div>
    );
};