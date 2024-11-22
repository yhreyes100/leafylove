import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { AddPlant } from "../component/addPlant";

export const MyGarden = props => {
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
            <div className="text-center">
            <button className={gardenShape == "inverse-u" ? "btn btn-warning" : "btn btn-outline-warning"} onClick={() => setGardenShape("inverse-u")}>Inverse U</button>
            <button className="btn btn-success" onClick={() => createGrid()}>New Grid</button>
            <button className={gardenShape == "rectangle" ? "btn btn-warning" : "btn btn-outline-warning"} onClick={() => setGardenShape("rectangle")}>Rectangle</button>
            </div>
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
                            <img src= {grid[0].plant.plantImage}/>
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
                            >{grid[1].plant.commonName}
                            <img src= {grid[1].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[2].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[2].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[2].isEmpty && setShowPreview(false);
                                }}
                            >{grid[2].plant.commonName}
                            <img src= {grid[2].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[3].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[3].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[3].isEmpty && setShowPreview(false);
                                }}
                            >{grid[3].plant.commonName}
                            <img src= {grid[3].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[4].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[4].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[4].isEmpty && setShowPreview(false);
                                }}
                            >{grid[4].plant.commonName}
                            <img src= {grid[4].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[5].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[5].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[5].isEmpty && setShowPreview(false);
                                }}
                            >{grid[5].plant.commonName}
                            <img src= {grid[5].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[6].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[6].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[6].isEmpty && setShowPreview(false);
                                }}
                            >{grid[6].plant.commonName}
                            <img src= {grid[6].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[7].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[7].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[7].isEmpty && setShowPreview(false);
                                }}
                            >{grid[7].plant.commonName}
                            <img src= {grid[7].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[8].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[8].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[8].isEmpty && setShowPreview(false);
                                }}
                            >{grid[8].plant.commonName}
                            <img src= {grid[8].plant.plantImage}/>
                            </div>
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
                            >{grid[9].plant.commonName}
                            <img src= {grid[9].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[10].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[10].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[10].isEmpty && setShowPreview(false);
                                }}
                            >{grid[10].plant.commonName}
                            <img src= {grid[10].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[11].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[11].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[11].isEmpty && setShowPreview(false);
                                }}
                            >{grid[11].plant.commonName}
                            <img src= {grid[11].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[12].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[12].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[12].isEmpty && setShowPreview(false);
                                }}
                            >{grid[12].plant.commonName}
                            <img src= {grid[12].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[13].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[13].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[13].isEmpty && setShowPreview(false);
                                }}
                            >{grid[13].plant.commonName}
                            <img src= {grid[13].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[14].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[14].plant.commonName}
                            <img src= {grid[14].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[15].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[15].plant.commonName}
                            <img src= {grid[15].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[16].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[16].plant.commonName}
                            <img src= {grid[16].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[17].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[17].plant.commonName}
                            <img src= {grid[17].plant.plantImage}/>
                            </div>
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
                            >{grid[18].plant.commonName}
                            <img src= {grid[18].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[19].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[19].plant.commonName}
                            <img src= {grid[19].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[20].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[20].plant.commonName}
                            <img src= {grid[20].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[21].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[21].plant.commonName}
                            <img src= {grid[21].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[22].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[22].plant.commonName}
                            <img src= {grid[22].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[23].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[23].plant.commonName}
                            <img src= {grid[23].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[24].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[24].plant.commonName}
                            <img src= {grid[24].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[25].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[25].plant.commonName}
                            <img src= {grid[25].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[26].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[26].plant.commonName}
                            <img src= {grid[26].plant.plantImage}/>
                            </div>
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
                            >{grid[27].plant.commonName}
                            <img src= {grid[27].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[28].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[28].plant.commonName}
                            <img src= {grid[28].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[29].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[29].plant.commonName}
                            <img src= {grid[29].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[30].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[30].plant.commonName}
                            <img src= {grid[30].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[31].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[31].plant.commonName}
                            <img src= {grid[31].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[32].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[32].plant.commonName}
                            <img src= {grid[32].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[33].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[33].plant.commonName}
                            <img src= {grid[33].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[34].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[34].plant.commonName}
                            <img src= {grid[34].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[35].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[35].plant.commonName}
                            <img src= {grid[35].plant.plantImage}/>
                            </div>
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
                            >{grid[36].plant.commonName}
                            <img src= {grid[36].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[37].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[37].plant.commonName}
                            <img src= {grid[37].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[38].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[38].plant.commonName}
                            <img src= {grid[38].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[39].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[39].plant.commonName}
                            <img src= {grid[39].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[40].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[40].plant.commonName}
                            <img src= {grid[40].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[41].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[41].plant.commonName}
                            <img src= {grid[41].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[42].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[42].plant.commonName}
                            <img src= {grid[42].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[43].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[43].plant.commonName}
                            <img src= {grid[43].plant.plantImage}/>
                            </div>
                            <div
                                className={grid[44].isSlot ? "col" : "col shade"}
                                onMouseEnter={() => {
                                    !grid[27].isEmpty && setShowPreview(true);
                                }}
                                onMouseLeave={() => {
                                    !grid[27].isEmpty && setShowPreview(false);
                                }}
                            >{grid[44].plant.commonName}
                            <img src= {grid[44].plant.plantImage}/>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    );
};