const getState = ({ getStore, getActions, setStore }) => {
	let speciesapiUrl = "https://perenual.com/api/species-list?key=sk-wHFC671c438acf92c7433&page=1";
	let detailsapiUrl = "https://perenual.com/api/species/details/{PLANT_ID}?key=sk-wHFC671c438acf92c7433&page=1"
	let guideapiUrl = "https://perenual.com/api/species-care-guide-list?key=sk-wHFC671c438acf92c7433&page=1&species_id=1&page=1"
	return {
		store: {
			urlFetchApi: process.env.BACKEND_URL,
			user: {},
			plantList: [],
			favoritePlantList: [],
			grid: [],
			plantLibrary: [
				// {
				// 	commonName: "Snake Plant",
				// 	type: "Perennial",
				// 	lighting: "Partial sun",
				// 	soilType: "Sandy, well-drained",
				// 	plantImage: "",
				// 	scientificName: "Magnolia x soulangiana",
				// 	commonName: "Snake Plant",
				// 	growthCycle: "perennial",
				// 	plantType: "tree",
				// 	leafType: "broadleaf",
				// 	hardinessZone: ["7", "8", "9"],
				// 	height: 30,
				// 	plantIs: "blooming",
				// 	bloomTime: ["spring"],
				// 	flowerColor: ["pink", "purple"],
				// 	fruitPresent: "summer",
				// 	fruitColor: "Red",
				// 	lightExposure: ["sun", "part sun"],
				// 	plantImage: "https://cdn.mos.cms.futurecdn.net/AFNptCuKbYAKEx4mnna2T9.jpg",
				// 	drainage: ["well drained", "sandy"],
				// 	growthRate: "fast",
				// 	waterReq: "medium",
				// 	isSusceptible: "Yes",
				// 	comments:
				// 		"Magnolias are simply m
				// },
				// {
				// 	commonName: "Aloe Vera",
				// 	growthCycle: "Perennial",
				// 	lightExposure: ["sun", "part sun"],
				// 	soilType: "Dry, well-drained",
				// 	plantImage: "https://www.giardinibalduzzi.com/wp-content/uploads/2022/08/1343670-aloe-vera-in-giardino-gratuito-foto-scaled.jpeg"
				// },
				// {
				// 	commonName: "Spinach",
				// 	plantType: "Vegetable",
				// 	lighting: "Full, Partial sun",
				// 	soilType: "Loamy, moist, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/vB1pR_nYXPT5BJzFF0h9crD-wNw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-spinach-1403448-13-8e9751e8c47043529effcb4d0786e4b1.jpg"
				// },
				// {
				// 	commonName: "Basil",
				// 	plantType: "Vegetable",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, moist, well-drained",
				// 	plantImage: "https://lawn.com.au/wp-content/uploads/2022/08/how-to-grow-basil-1.jpg"
				// },
				// {
				// 	commonName: "Bell Pepper",
				// 	plantType: "Fruit",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, well-drained",
				// 	plantImage: "https://www.gardentech.com/-/media/project/oneweb/gardentech/plantImages/blog/growing-your-own-bell-peppers/growing_peppers-pepper_garden.jpg"
				// },
				// {
				// 	commonName: "Lady Fern",
				// 	growthCycle: "Perennial",
				// 	lighting: "Shade, partial sun",
				// 	soilType: "Moist, sandy, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/Fc5fBYqJfwoNNlxGRaNS8OFWYPM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lady-ferns-plant-profile-5120209-hero-3c985b21a2354012a14b29c94626de45.jpg"
				// },
				// {
				// 	commonName: "Carrot",
				// 	plantType: "Vegetable",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Loose, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/O9KDM5Uir7Uaiz1lZ1nl0pLSriU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-carrots-in-the-vegetable-garden-1403472-07-de29d2582e34413a8d085f9b05f509ca.jpg"
				// },
				// {
				// 	commonName: "Rose",
				// 	plantType: "Shrub",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, well-drained",
				// 	plantImage: "https://images.squarespace-cdn.com/content/v1/631943b5aaa6db42756b140e/d59bb6a8-c7ec-4dce-bef3-d879f15f42dd/DSCF6492.JPG"
				// },
				// {
				// 	commonName: "Mint",
				// 	plantType: "Herb",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Loamy, moist, well-drained",
				// 	plantImage: "https://gardenerspath.com/wp-content/uploads/2020/04/Mint-Growing-in-the-Garden.jpg"
				// },
				// {
				// 	commonName: "Cactus",
				// 	type: "Succulent, Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Sandy, Well-drained",
				// 	plantImage: "https://media.istockphoto.com/id/912142406/photo/cactus-small-plants.jpg?s=612x612&w=0&k=20&c=zknWl6MWmyP61I8gzlvasTuKxsMnU2Jb-uQCz6b1pt4="
				// },
				// {
				// 	commonName: "African Daisy",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full sun",
				// 	soilType: "Sandy, well-drained",
				// 	plantImage: "https://justinseed.com/wp-content/uploads/2023/07/African-Daisy.jpg"
				// },
				// {
				// 	commonName: "Agapanthus",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Sandy, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/udoeXTDH8XSz-ff6y3yrt130h-A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/agapanthus-growing-guide-7368912_04-66a3f4cf245b4332b28954dd37c784f5.jpg"
				// },
				// {
				// 	commonName: "Cabbage",
				// 	plantType: "Vegetable",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/1WxLtYy1wNhoAVGFKeESb4DAM4g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thespruce.com-growing-and-caring-for-cabbage-plants-1402815-1-4fef655d4e8a46819667ae848009362e.jpg"
				// },
				// {
				// 	commonName: "Marigold",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/Ybj8BQX0mWGJyIcUGQs_VcmyhFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-and-using-calendula-1402626-26-f3f6f07fcc594a79b1a792f863a4a8e6.jpg"
				// },
				// {
				// 	commonName: "Daffodils",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Moist, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/aCZv-7XK5yNgQKcbJX1qvP2nEXg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/planting-and-growing-daffodils-1402136_01-bb8eada2ffb4443dbb20a7b1f0f3dfce.jpg"
				// },
				// {
				// 	commonName: "Daylily",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Loamy",
				// 	plantImage: "https://www.thespruce.com/thmb/FpBXAS3tkz3fY9Te20BmTeWLBGc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-and-care-for-daylilies-5075400-hero-dc8f260afc6844dcb9067abebeb883ae.jpg"
				// },
				// {
				// 	commonName: "Delphinium",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Moist, loamy, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/u5fQa4QZQyZ6Xezehg5yt-ai2z4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/delphinium-care-guide-7105084_10-12092ab0177a49c18d3c156f53bd1ee9.jpg"
				// },
				// {
				// 	commonName: "Garlic",
				// 	plantType: "Vegetable",
				// 	lighting: "Full sun",
				// 	soilType: "Moist, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/9ZfZ_2BUSaX84fOQzkaUAWEgpR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hardneck-and-softneck-garlic-2540056-02-187d9130324346319f9d2df16a7124c5.jpg"
				// },
				// {
				// 	commonName: "Chamomile",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full sun",
				// 	soilType: "Well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/jy6mUAdNJo1aHVs99v74IFjpPY0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-chamomile-1402627-02-8567d20717ce40679aab37d06686a806.jpg"
				// },
				// {
				// 	commonName: "Jalapeño Pepper",
				// 	plantType: "Fruit",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, moist, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/loGMkuLL7mL7CNkVlfbnZzQkCUM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-jalapeno-peppers-inside-1902569-7-e261f3dbeb114161b0d9e4f6e6f89fac.jpg"
				// },
				// {
				// 	commonName: "Radish",
				// 	plantType: "Vegetable",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, sandy, moist, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/4jE9V2xk7AgcuGhkO5rphduGs3Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-radishes-in-the-home-vegetable-garden-1403477-02-c295e04667df4c8fac380a5543b663e1.jpg"
				// },
				// {
				// 	commonName: "Turmeric",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Moist, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/wcrhAfRateEx54H23w3O71L2vCw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/turmeric-plant-477981208-b626ae8455c9480c9e76ec81b2ac720e.jpg"
				// },
				// {
				// 	commonName: "Tulip",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full sun",
				// 	soilType: "Rich, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/8b-jbjbwgUz28mzGYP9sv0okk7U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tulips-planting-and-growing-tulips-1402137-08-aee8737736d848ef95f0a340705d9bf9.jpg"
				// },
				// {
				// 	commonName: "Chamomile",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full",
				// 	soilType: "Well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/jy6mUAdNJo1aHVs99v74IFjpPY0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-chamomile-1402627-02-8567d20717ce40679aab37d06686a806.jpg"
				// },
				// {
				// 	commonName: "Tomato",
				// 	plantType: "Fruit",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/zARHUKvx8nouC2J7z3-az_UHwPY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tomato-plant-7488122_Hero1A-0a34969ad372497ea344d0cbfa026484.jpg"
				// },
				// {
				// 	commonName: "Thyme",
				// 	plantType: "Herb",
				// 	lighting: "Full sun",
				// 	soilType: "Loamy, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/HjedhyaOVoUM93c1asOVA09qUlI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-thyme-indoors-1902495-05-8eeb0bffe5e2421cacca15e200b1382c.jpg"
				// },
				// {
				// 	commonName: "Sunflower",
				// 	growthCycle: "Annual",
				// 	lighting: "Full sun",
				// 	soilType: "Well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/V-Lhd8LLdBaHnA9OXcxDbSA8U1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-sunflowers-1402916-02-5c7133a770c8407887fa6b23e6e68f17.jpg"
				// },
				// {
				// 	commonName: "Spider Lily",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full, partial sun",
				// 	soilType: "Well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/V-Lhd8LLdBaHnA9OXcxDbSA8U1s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-sunflowers-1402916-02-5c7133a770c8407887fa6b23e6e68f17.jpg"
				// },
				// {
				// 	commonName: "Lavender",
				// 	growthCycle: "Perennial",
				// 	lighting: "Full sun",
				// 	soilType: "Dry, well-drained",
				// 	plantImage: "https://www.thespruce.com/thmb/AcExNXC2oPyfysYMhZWGMIpivf8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-lavender-1402779-hero-d308fde4141e431eabe5ef2e5bf3ba11_1-ba6ca30e02f546779cf0839a00aee493.jpg"
				// },
				{
					scientificName: "Dracaena trifasciata",
					commonName: "Snake Plant",
					growthCycle: "perennial",
					plantType: "houseplant",
					leafType: "broadleaf",
					hardinessZone: ["9", "10", "11"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["white"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.almanac.com/sites/default/files/users/The%20Editors/snake_plant_sansevieria_trifasciata_laurentii_mokkie-wc_full_width.jpg",
					drainage: ["well drained", "sandy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Snake plant is a good choice for beginners because it tolerates a range of growing conditions."
				},
				{
					scientificName: "Aloe barbadensis miller",
					commonName: "Aloe Vera",
					growthCycle: "perennial",
					plantType: "succulent",
					leafType: "broadleaf",
					hardinessZone: ["10", "11", "12"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.giardinibalduzzi.com/wp-content/uploads/2022/08/1343670-aloe-vera-in-giardino-gratuito-foto-scaled.jpeg",
					drainage: ["well drained", "sandy", "dry"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Aloe requires little watering and virtually no fertilizing, making it an easy-care houseplant for beginner gardeners."
				},
				{
					scientificName: "Spinacia oleracea",
					commonName: "Spinach",
					growthCycle: "annual",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/vB1pR_nYXPT5BJzFF0h9crD-wNw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-spinach-1403448-13-8e9751e8c47043529effcb4d0786e4b1.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Spinach needs around six weeks of cool temperatures to grow from seed to maturity."
				},
				{
					scientificName: "",
					commonName: "Basil",
					growthCycle: "perrenial",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://lawn.com.au/wp-content/uploads/2022/08/how-to-grow-basil-1.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Bell Pepper",
					growthCycle: "perrenial",
					plantType: "fruit",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "full sun"],
					plantImage: "https://cdn.mos.cms.futurecdn.net/NRxrnUVoj8hj9auMXctNui-1200-80.jpg",
					drainage: ["well drained", "loamy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Lady Fern",
					growthCycle: "perrenial",
					plantType: "garden plant",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun", "shade"],
					plantImage: "https://www.thespruce.com/thmb/Fc5fBYqJfwoNNlxGRaNS8OFWYPM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lady-ferns-plant-profile-5120209-hero-3c985b21a2354012a14b29c94626de45.jpg",
					drainage: ["well drained", "sandy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Carrot",
					growthCycle: "perrenial",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/O9KDM5Uir7Uaiz1lZ1nl0pLSriU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-carrots-in-the-vegetable-garden-1403472-07-de29d2582e34413a8d085f9b05f509ca.jpg",
					drainage: ["well drained", "loose"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Rose",
					growthCycle: "perrenial",
					plantType: "shrub",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://images.squarespace-cdn.com/content/v1/631943b5aaa6db42756b140e/d59bb6a8-c7ec-4dce-bef3-d879f15f42dd/DSCF6492.JPG",
					drainage: ["well drained", "loamy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Mint",
					growthCycle: "perrenial",
					plantType: "herb",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://gardenerspath.com/wp-content/uploads/2020/04/Mint-Growing-in-the-Garden.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Cactus",
					growthCycle: "perrenial",
					plantType: "succulent",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://media.istockphoto.com/id/912142406/photo/cactus-small-plants.jpg?s=612x612&w=0&k=20&c=zknWl6MWmyP61I8gzlvasTuKxsMnU2Jb-uQCz6b1pt4=",
					drainage: ["well drained", "sandy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "Osteospermum hybrids",
					commonName: "African Daisy",
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["9", "10", "11"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["various"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://silverfallsseed.com/wp-content/uploads/2015/12/IMG_5175.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "Moderate",
					waterReq: "low",
					isSusceptible: "Yes",
					comments:
						"A flowering annual except in zones 9-11 where it is a perennial. Flowers from time of planting until frost. After plants are established, they will need little suppemental water. Use in rock gardens, containers, in ground beds and as a cut flower. Attracts hummingbirds and butterflies. It is drought tolerant and deer resistant."
				},
				{
					scientificName: "",
					commonName: "Agapanthus",
					growthCycle: "perrenial",
					plantType: "shrub",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/udoeXTDH8XSz-ff6y3yrt130h-A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/agapanthus-growing-guide-7368912_04-66a3f4cf245b4332b28954dd37c784f5.jpg",
					drainage: ["well drained", "sandy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Cabbage",
					growthCycle: "perrenial",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/1WxLtYy1wNhoAVGFKeESb4DAM4g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/thespruce.com-growing-and-caring-for-cabbage-plants-1402815-1-4fef655d4e8a46819667ae848009362e.jpg",
					drainage: ["well drained", "loamy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "Tagetes erecta",
					commonName: "Marigold",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["10", "11"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["summer", "fall"],
					flowerColor: ["yellow", "orange"],
					lightExposure: ["sun"],
					plantImage: "https://www.thespruce.com/thmb/Ybj8BQX0mWGJyIcUGQs_VcmyhFA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-and-using-calendula-1402626-26-f3f6f07fcc594a79b1a792f863a4a8e6.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Marigolds have been around since pre-historic times. They grow best in full sunlight and in well drained soils. Marigolds cannot tolerate wet, humid conditions. They love drier climates where soils stay only moderately moist. Marigolds bloom from early summer through the fall if conditions are favorable. There can be a period during the hottest part of the summer when mar igolds may cease to bloom until the temperatures fall below 90 F"
				},
				{
					scientificName: "",
					commonName: "Daffodil",
					growthCycle: "perrenial",
					plantType: "shrub",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/aCZv-7XK5yNgQKcbJX1qvP2nEXg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/planting-and-growing-daffodils-1402136_01-bb8eada2ffb4443dbb20a7b1f0f3dfce.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Daylily",
					growthCycle: "perrenial",
					plantType: "shrub",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://cdn.mos.cms.futurecdn.net/rY7TpgQVvrZimjjg8bPyiJ.jpg",
					drainage: ["well drained", "loamy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Delphinium",
					growthCycle: "perrenial",
					plantType: "shrub",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.gardendesign.com/pictures/images/900x705Max/dream-team-s-portland-garden_6/delphiniums-staked-blue-flowers-alamy-stock-photo_12752.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Garlic",
					growthCycle: "perrenial",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/9ZfZ_2BUSaX84fOQzkaUAWEgpR0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/hardneck-and-softneck-garlic-2540056-02-187d9130324346319f9d2df16a7124c5.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Chamomile",
					growthCycle: "perrenial",
					plantType: "shrub",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/jy6mUAdNJo1aHVs99v74IFjpPY0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/how-to-grow-chamomile-1402627-02-8567d20717ce40679aab37d06686a806.jpg",
					drainage: ["well drained"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Jalapeño",
					growthCycle: "perrenial",
					plantType: "fruit",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/loGMkuLL7mL7CNkVlfbnZzQkCUM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-jalapeno-peppers-inside-1902569-7-e261f3dbeb114161b0d9e4f6e6f89fac.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Radish",
					growthCycle: "perrenial",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/4jE9V2xk7AgcuGhkO5rphduGs3Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-radishes-in-the-home-vegetable-garden-1403477-02-c295e04667df4c8fac380a5543b663e1.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Tumeric",
					growthCycle: "perrenial",
					plantType: "vegetable",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/wcrhAfRateEx54H23w3O71L2vCw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/turmeric-plant-477981208-b626ae8455c9480c9e76ec81b2ac720e.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Tulip",
					growthCycle: "perrenial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/8b-jbjbwgUz28mzGYP9sv0okk7U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tulips-planting-and-growing-tulips-1402137-08-aee8737736d848ef95f0a340705d9bf9.jpg",
					drainage: ["well drained", "rich"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Tomato",
					growthCycle: "perrenial",
					plantType: "fruit",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/zARHUKvx8nouC2J7z3-az_UHwPY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tomato-plant-7488122_Hero1A-0a34969ad372497ea344d0cbfa026484.jpg",
					drainage: ["well drained", "loamy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Thyme",
					growthCycle: "perrenial",
					plantType: "herb",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/HjedhyaOVoUM93c1asOVA09qUlI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-thyme-indoors-1902495-05-8eeb0bffe5e2421cacca15e200b1382c.jpg",
					drainage: ["well drained", "loamy"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Sunflower",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.gardenia.net/wp-content/uploads/2024/01/shutterstock_2084235901-800x533.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Spider Lily",
					growthCycle: "perrenial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://www.thespruce.com/thmb/h5nfqX-OFte0d9BdqlN9gfYrYBY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-red-spider-lily-5093664-hero-6e311153f91e4f32b043c76b4f510469.jpg",
					drainage: ["well drained", "loamy", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "",
					commonName: "Lavender",
					growthCycle: "perrenial",
					plantType: "herb",
					leafType: "broadleaf",
					hardinessZone: ["2", "3", "4"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow", "red"],
					lightExposure: ["full sun"],
					plantImage: "https://www.thespruce.com/thmb/AcExNXC2oPyfysYMhZWGMIpivf8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/growing-lavender-1402779-hero-d308fde4141e431eabe5ef2e5bf3ba11_1-ba6ca30e02f546779cf0839a00aee493.jpg",
					drainage: ["well drained", "dry"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						""
				},
				{
					scientificName: "Papaver somniferum",
					commonName: "Atlas Poppy",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["6", "7"],
					height: 4,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: "various",
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/oJsAEL5.jpg?1",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Seed sewn from September to April. Planted in the deep south at the earlier date and in the north in spring. Red or pink are the colors most commonly planted. This is the plant from which opium is eventually made. Opium is used in the manufacture of morphine, which is a widely used pain killer in medical practices."
				},
				{
					scientificName: "Begonia semperflorens",
					commonName: "Begonia",
					growthCycle: "annual",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["10"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["various"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://cdn.britannica.com/42/198142-050-48DAB6F3/Wax-Begonia-cucullata-flower.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Grown as annual bedding plant. Grows in full sun, but can't stand drought. Various colored foliage and flowers offer contrast in the annual garden. A popular choice for mass plantings in public places. Cannot tolerate wet soils, consequently best performance is in elevated beds to insure adequate drainage."
				},
				{
					scientificName: "Platycodon grandiflorus",
					commonName: "Balloon Flower",
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["3", "4", "5", "6", "7"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["summer"],
					flowerColor: ["blue"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/cJ5CyNT.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"This clump forming perennial dies down in winter and returns in spring. Leave some of the previous years stems so they can be located and not damaged when spring gardening activity begins. Upward facing flower buds expand like a hot air balloon prior to opening and thus its name 'Balloon Flower'."
				},
				{
					scientificName: "Pelargonium x hortorum",
					commonName: "Geranium",
					growthCycle: "perennial",
					plantType: "flower",
					leafType: "broadleaf",
					hardinessZone: ["8", "9", "10"],
					height: 2,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["various"],
					lightExposure: ["part sun"],
					plantImage: "https://i.imgur.com/y1ShyWr.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Geraniums are popular for their wide range of brilliant flower colors and attractive leaves. They flower during the warm months. However, when daily temperature exceeds 85 degrees F. for many days, flowering will not occur. This happens in the deep south, but flowering will return as temperatures moderate in the fall. Geraniums like sunlight for a minimum of four hours per day, a well drained, moist, and fertile soil."
				},
				{
					scientificName: "Magnolia x soulangiana",
					commonName: "Alexandrina Saucer Magnolia",
					growthCycle: "perennial",
					plantType: "tree",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9"],
					height: 30,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["pink", "purple"],
					fruitPresent: "summer",
					fruitColor: "Red",
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/YQYn9w3.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Magnolias are simply magnificent. The Alexandrina Saucer Magnolia is a beautiful ornamental shrub that can become a lovely specimen plant in your landscape. Saucer Magnolia is chosen specifically for its wonderful, dark-purple flower buds, and huge cup-shaped flowers with light pink and white interiors. The massive flower display is phenomenal."
				},
				{
					scientificName: "Pimenta dioica",
					commonName: "Allspice",
					plantType: "tree",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["9", "10", "11"],
					height: 30,
					plantIs: "edible",
					bloomTime: ["spring"],
					flowerColor: ["white"],
					fruitPresent: ["summer", "fall"],
					fruitColor: "Brown",
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/vZ6fDEq.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "low",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Allspice is a relatively small evergreen tree that grows in the warm climates of the world. In some parts where conditions are favorable it has escaped cultivarion. The plant produces thick, leathery, aromatic foliage. The condiment, allspice, is produced from the unripened berry-like fruit of this tree."
				},
				{
					scientificName: "Rosa 'Affirm'",
					commonName: "Affirm Rose",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["8", "9", "10"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["spring", "summer", "fall"],
					flowerColor: ["pink"],
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/EexQQje.jpg",
					drainage: ["well drained"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"This is a hybrid tea rose that produces a classic pink rose bud. As with all roses, good drainage is imperative. Roses do best on raised beds that contain fertile soil with fast drainage. Most hybrid tea roses have several pests that must be controlled during the year."
				},
				{
					scientificName: "Synadenium grantii",
					commonName: "African Milk Bush",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["10", "11"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["summer", "fall"],
					flowerColor: ["red"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://i.imgur.com/156RH4K.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "slow",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"This is a plant that produces fleshy stems and large chartreuse colored leaves with tiny specks of red in the foliage. When broken plant exudes a milky sap. The sap can be toxic or cause a rash. This is an excellent plant to feature in containers. Plant in a well drained soil mix that contains a generous amount of sand and keep the soil moderately dry, otherwise rot will occur."
				},
				{
					scientificName: "Rhododendron 'Admiral Semmes'",
					commonName: "Admiral Semmes Azalea",
					plantType: "shrub",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["spring"],
					flowerColor: ["yellow"],
					lightExposure: ["part sun", "filtered shade", "shade"],
					plantImage: "https://i.imgur.com/nlCyoNh.jpg",
					drainage: ["well drained"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"A very heat tolerant azalea that produces clusters of rich yellow fragrant flowers of outstanding substance. Deciduous azaleas bloom best if they receive several hours of morning sunlight and are planted in fertile, well drained, slightly acid soils. Remove old heavy canes to help invigorate old plants."
				},
				{
					scientificName: "Petunia 'Tidal Wave Cherry'",
					commonName: "Cherry Wave Petunia",
					plantType: "flower",
					growthCycle: "annual",
					leafType: "broadleaf",
					hardinessZone: ["6", "7", "8"],
					height: 1,
					plantIs: "blooming",
					bloomTime: ["spring", "summer"],
					flowerColor: "Red",
					lightExposure: ["sun", "morning sun"],
					plantImage: "https://i.imgur.com/dVC8Jt1.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"The cherry wave petunia is an excellent selection of this series. It blooms over a long period from late fall through early summer. The spread of this petunia can be over six feet during this period. Provide full sunlight and a well drained soil, preferably a raised bed. It makes a superb container plant because shoots drape over the edge of the container."
				},
				{
					scientificName: "Cosmos bipinnatus",
					commonName: "Cosmos",
					plantType: "flower",
					growthCycle: "annual",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9", "10"],
					height: 5,
					plantIs: "blooming",
					bloomTime: ["spring", "summer"],
					flowerColor: ["various"],
					lightExposure: ["sun", "part sun"],
					plantImage: "https://images.squarespace-cdn.com/content/v1/5d00610d3115730001df62ab/1593567194933-RS2HJLMRQE15XAG3MBGC/colorful-cosmos.jpg",
					drainage: ["well drained", "moist", "dry"],
					growthRate: "fast",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"Cosmos have large, up to four inches across, daisy-like flowers. They make wonderful cut flowers. The colors may be white, pink or red. Bloom over a rather extended period in the spring into summer. Select a sunny, well drained site for this annual. Excellent spring flowering bedding plant."
				},
				{
					scientificName: "Thymus praecox arcticus",
					commonName: "Creeping Pink Thyme",
					plantType: "ground cover",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["7", "8", "9"],
					height: 2,
					plantIs: "insignificant",
					bloomTime: ["spring"],
					lightExposure: ["sun", "part sun", "morning sun"],
					plantImage: "https://i.imgur.com/c9eRVGA.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "Yes",
					comments:
						"This perennial produces strong aromatic foliage with a pungent aroma that is used for flavoring foods. It makes a tight carpetlike mat in full sunlight and well drained soil. It grows fairly well in dry soils and is especially effective in herb gardens and growing among stones, pavers and other garden elements. Plant in full sunlight and a well drained soils."
				},
				{
					scientificName: "Ajuga reptans 'Dixie Chip'",
					commonName: "Dixie Chip Ajuga",
					plantType: "ground cover",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["4", "5", "6", "7"],
					height: 1,
					plantIs: "insignificant",
					bloomTime: ["spring"],
					lightExposure: ["sun", "shade"],
					plantImage: "https://i.imgur.com/4oMmdmC.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"Unique, tri-colored foliage in shades of burgundy, green and cream. It hha bluish flowers in spring on a plant that is usually ab out 3 inches tall. Makes a good, low growing ground cover. This selection has has green, cream, and rose-purple variegated foliage that create a spectacular display in the landscape."
				},
				{
					scientificName: "Sasa veitchii",
					commonName: "Kuma Bamboo Grass",
					plantType: "ground cover",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["6", "7", "8", "9"],
					height: 2,
					plantIs: "insignificant",
					lightExposure: ["sun", "part sun", "filtered shade", "shade", "morning sun"],
					plantImage: "https://i.imgur.com/SsGEtFC.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"This ground cover is used as a ground cover although plants will grow quite tall if left alone. To keep plants low, clip back growth in late winter every year and the new foliage will be green and fresh looking during the following year. Plants become untidy if not clipped periodically."
				},
				{
					scientificName: "Persea americana",
					commonName: "Avocado",
					plantType: "tree",
					growthCycle: "perennial",
					leafType: "broadleaf",
					hardinessZone: ["10", "11"],
					height: 50,
					plantIs: "edible",
					bloomTime: ["spring"],
					flowerColor: ["white"],
					fruitPresent: "fall",
					lightExposure: ["sun"],
					plantImage: "https://i.imgur.com/oljBvdp.jpg",
					drainage: ["well drained", "moist"],
					growthRate: "moderate",
					waterReq: "medium",
					isSusceptible: "No",
					comments:
						"The avocado is a tropical tree that will grow and even produce fruit in zone 9, but needs protection from freezes. Edible fruit are produced on trees in warm climates in a fertile, well drained soil. In cold climates people will often plant the single seed that comes from the fruit and grow from the seed a tender tropical on the patio during the summer months."
				}
			],
		},
		actions: {
			setGrid: (newGrid) => {
				setStore({ grid: newGrid });
				const newGridJSON = JSON.stringify(newGrid);
				localStorage.setItem("grid", newGridJSON);
			},
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

			addFavorite: (plant, userId) => {
				const store = getStore();
				const isAlreadyFavorite = store.favoritePlantList.some((elem) => elem.commonName === plant.commonName);
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