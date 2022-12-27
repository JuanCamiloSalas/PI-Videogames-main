
const axios = require ('axios');
const { API_KEY } = process.env;
const { Genres } = require('../src/db.js');
const controller = require('../src/controllers/index.js');

// SETEAR LOS GÉNEROS A LA DB
const createGenres = async () => {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });

    const genres = response.data.results.map(el => {
        return {
            name: el.name
        }
    });

    genres.forEach(el => {
        Genres.findOrCreate({
            where: {
                name: el.name
            }   
        });
    });
}

// OBTENER LA DESCRIPCION
const getVideogameDescription = async (id) => {

    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });

    const description = response.data.description;
 
    return description;
}

// SETEAR LOS VIDEOJUEGOS A LA DB
const getVideogamesAPI = async (pages) => {
    
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${pages}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });
    
    const videogames = await response.data.results.map( async (el) => {
        
        let description = await getVideogameDescription(el.id);     

        return {
            //id: el.id,
            name: el.name,
            released: el.released,
            rating: el.rating,
            genres: el.genres.map(el => el.name),
            platforms: el.parent_platforms.map(el => el.platform.name),
            img: el.background_image,
            description
        }
    });
    
    return videogames; 
}

const createAllVideogames = async (pages) => {
    
    let videogamesAPI = [];

    for (let i = 1; i <= pages + 1; i++) {
        let videogames = await getVideogamesAPI(i);
        if (i !== pages + 1) videogamesAPI.push(videogames); 
    }
   
    videogamesAPI = videogamesAPI.flat();

    Promise.allSettled(videogamesAPI)
    .then(response => response.map(el => el.value))
    .then(results => results.map( el => controller.createVideogame(el)))
}

const projectDidMount = async (pages) => {
    await createGenres();
    createAllVideogames(pages);
}

module.exports = {
    projectDidMount
}