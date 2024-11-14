const getState = ({ getStore, getActions, setStore }) => {
    let speciesapiUrl = `https://perenual.com/api/species-list?key=sk-wHFC671c438acf92c7433&page=1`;
    
    return {
        store: {
            plantList: [],
            favoritePlantList: []
            user: {
                id
            }
        },
        actions: {
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
			
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
	