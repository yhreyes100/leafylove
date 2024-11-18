import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const GardenGrid = props => {
    const { store, actions } = useContext(Context);
    const { grid } = store;

    const params = useParams();

    const [gardenShape, setGardenShape] = useState("rectangle");
    const [showPreview, setShowPreview] = useState(false);
    var navigate = useNavigate();

    useEffect(
        () => {
            if (localStorage.getItem("grid")) {
                const storedGrid = JSON.parse(localStorage.getItem("grid"));
                actions.setGrid(storedGrid);
            }
        }, []
    );


    const createGrid = () => {
        var localGrid = [];
        var emptySlots = [20, 21, 22, 23, 24, 29, 30, 31, 32, 33, 38, 39, 40, 41, 42];
        if (gardenShape == "rectangle") {
            for (let i = 0; i < 45; i++) {
                localGrid.push({
                    id: i + 1,
                    plant: { name: "" },
                    isEmpty: true,
                    isSlot: true
                })
            }
        } else if (gardenShape == "inverse-u") {
            for (let i = 0; i < 45; i++) {
                if (emptySlots.includes(i)) {
                    localGrid.push({
                        id: i + 1,
                        plant: { name: "" },
                        isEmpty: false,
                        isSlot: false
                    })
                } else {
                    localGrid.push({
                        id: i + 1,
                        plant: { name: "" },
                        isEmpty: true,
                        isSlot: true
                    })
                }
            }
        }
        actions.setGrid(localGrid);
    }



    return (
        <div>
            <button className={gardenShape == "inverse-u" ? "btn btn-warning" : "btn btn-outline-warning"} onClick={() => setGardenShape("inverse-u")}>Inverse U</button>
            <button className="btn btn-success" onClick={() => createGrid()}>New Grid</button>
            <button className={gardenShape == "rectangle" ? "btn btn-warning" : "btn btn-outline-warning"} onClick={() => setGardenShape("rectangle")}>Rectangle</button>
            <div className="container gardenGrid" >
                {grid.length ? (
                    <>
                        <div className="row">
                            <div
                                className={grid[0].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[0].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[0].isEmpty && setShowPreview(false);
                                }}
                                onClick={() => grid[0].isEmpty && navigate("/addplant/" + 0)}
                            >{grid[0].plant.name}
                                {showPreview && (
                                    <div className="preview">{grid[0].plant.name}</div>
                                )}
                            </div>
                            <div
                                className={grid[1].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[1].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[1].isEmpty && setShowPreview(false);
                                }}
                                onClick={() => grid[1].isEmpty && navigate("/addplant/" + 1)}
                            >{grid[1].plant.name}</div>
                            <div
                                className={grid[2].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[2].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[2].isEmpty && setShowPreview(false);
                                }}
                            >{grid[2].plant.name}</div>
                            <div
                                className={grid[3].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[3].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[3].isEmpty && setShowPreview(false);
                                }}
                            >{grid[3].plant.name}</div>
                            <div
                                className={grid[4].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[4].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[4].isEmpty && setShowPreview(false);
                                }}
                            >{grid[4].plant.name}</div>
                            <div
                                className={grid[5].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[5].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[5].isEmpty && setShowPreview(false);
                                }}
                            >{grid[5].plant.name}</div>
                            <div
                                className={grid[6].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[6].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[6].isEmpty && setShowPreview(false);
                                }}
                            >{grid[6].plant.name}</div>
                            <div
                                className={grid[7].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[7].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[7].isEmpty && setShowPreview(false);
                                }}
                            >{grid[7].plant.name}</div>
                            <div
                                className={grid[8].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[8].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[8].isEmpty && setShowPreview(false);
                                }}
                            >{grid[8].plant.name}</div>
                        </div>
                        <div className="row">
                            <div
                                className={grid[9].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[9].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[9].isEmpty && setShowPreview(false);
                                }}
                            >{grid[9].plant.name}</div>
                            <div
                                className={grid[10].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[10].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[10].isEmpty && setShowPreview(false);
                                }}
                            >{grid[10].plant.name}</div>
                            <div
                                className={grid[11].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[11].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[11].isEmpty && setShowPreview(false);
                                }}
                            >{grid[11].plant.name}</div>
                            <div
                                className={grid[12].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[12].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[12].isEmpty && setShowPreview(false);
                                }}
                            >{grid[12].plant.name}</div>
                            <div
                                className={grid[13].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[13].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[13].isEmpty && setShowPreview(false);
                                }}
                            >{grid[13].plant.name}</div>
                            <div
                                className={grid[14].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[14].plant.name}</div>
                            <div
                                className={grid[15].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[15].plant.name}</div>
                            <div
                                className={grid[16].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[16].plant.name}</div>
                            <div
                                className={grid[17].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[17].plant.name}</div>
                        </div>
                        <div className="row">
                            <div
                                className={grid[18].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[18].plant.name}</div>
                            <div
                                className={grid[19].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[19].plant.name}</div>
                            <div
                                className={grid[20].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[20].plant.name}</div>
                            <div
                                className={grid[21].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[21].plant.name}</div>
                            <div
                                className={grid[22].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[22].plant.name}</div>
                            <div
                                className={grid[23].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[23].plant.name}</div>
                            <div
                                className={grid[24].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[24].plant.name}</div>
                            <div
                                className={grid[25].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[25].plant.name}</div>
                            <div
                                className={grid[26].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[26].plant.name}</div>
                        </div>
                        <div className="row">
                            <div
                                className={grid[27].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[27].plant.name}</div>
                            <div
                                className={grid[28].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[28].plant.name}</div>
                            <div
                                className={grid[29].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[29].plant.name}</div>
                            <div
                                className={grid[30].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[30].plant.name}</div>
                            <div
                                className={grid[31].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[31].plant.name}</div>
                            <div
                                className={grid[32].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[32].plant.name}</div>
                            <div
                                className={grid[33].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[33].plant.name}</div>
                            <div
                                className={grid[34].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[34].plant.name}</div>
                            <div
                                className={grid[35].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[35].plant.name}</div>
                        </div>
                        <div className="row">
                            <div
                                className={grid[36].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[36].plant.name}</div>
                            <div
                                className={grid[37].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[37].plant.name}</div>
                            <div
                                className={grid[38].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[38].plant.name}</div>
                            <div
                                className={grid[39].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[39].plant.name}</div>
                            <div
                                className={grid[40].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[40].plant.name}</div>
                            <div
                                className={grid[41].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[41].plant.name}</div>
                            <div
                                className={grid[42].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[42].plant.name}</div>
                            <div
                                className={grid[43].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[43].plant.name}</div>
                            <div
                                className={grid[44].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[44].plant.name}</div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};