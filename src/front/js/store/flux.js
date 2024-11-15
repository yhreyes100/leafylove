const getState = ({ getStore, getActions, setStore }) => {
    let speciesapiUrl = "https://perenual.com/api/species-list?key=sk-wHFC671c438acf92c7433&page=1";
    let detailsapiUrl = "https://perenual.com/api/species/details/{PLANT_ID}?key=sk-wHFC671c438acf92c7433&page=1"
    let guideapiUrl = "https://perenual.com/api/species-care-guide-list?key=sk-wHFC671c438acf92c7433&page=1&species_id=1&page=1"
    return {
        store: {
            urlFetchApi: "https://expert-space-carnival-pg94q459jr5cggr-3001.app.github.dev",
            user: {},
            plantList: [],
            favoritePlantList: []
        },
        actions: {
            setUser(value) {
                setStore({ user: value });
            },
            getPlantList: () => {
                fetch(speciesapiUrl)
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error();
                        }
                        return res.json();
                    })
                    .then((data) => {
                        setStore({ plantList: data.data });
                    })
                    .catch(error => console.error("Error fetching plant list:", error));
            },

            addFavorite: (plant, Userid) => {
                const store = getStore();
                const isAlreadyFavorite = store.favoritePlantList.some((elem) => elem.id === plant.id);
                console.log(isAlreadyFavorite)
                if (!isAlreadyFavorite) {
                    setStore({ favoritePlantList: [...store.favoritePlantList, plant] });
                }
            },

            removeFavorite: (id) => {
                const store = getStore();
                const updatedFavorites = store.favoritePlantList.filter((elem) => elem.id !== id);
                setStore({ favoritePlantList: updatedFavorites });
            }
        }
    };
};

export default getState;