'use strict'
/* CONSIGNA
[ ] GET /videogame/{idVideogame}:
Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados
*/

const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame, Genres } = require('../db.js');

const getVideogameDetailsAPI = async (id) => {

    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });

    const videogame = {
        id: response.data.id,
        name: response.data.name,
        img: response.data.background_image,
        genres: response.data.genres,
        description: response.data.description,
        released: response.data.released,
        rating: response.data.rating,
        platforms: response.data.platforms   
    }

    return videogame;
}

const getVideogameDetailsDB = async (id) => {
    const videogame = await Videogame.findByPk(id, {
        attributes: [
            'id', 
            'name', 
            //'img',
            'description', 
            'released', 
            'rating', 
            'platforms'
        ],
        include: {
            model: Genres
        }
    })
    return videogame;
}

const getVideogameDetails = async (id, createdInDb) => {

    if(createdInDb === "true") {
        const videogameDetailsDB = await getVideogameDetailsDB(id);
        return videogameDetailsDB;
    } else {
        const videogameDetailsAPI = await getVideogameDetailsAPI(id);
        return videogameDetailsAPI;
    }

}

module.exports = {
    getVideogameDetails
}