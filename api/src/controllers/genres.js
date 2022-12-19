'use strict'
/* [ ] GET /genres:
Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/

//require('dotenv').config();
const { API_KEY } = process.env;
const axios = require ('axios');
const { Genres } = require('../db.js');

const getGenres = async () => {

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

//ACÁ FALTARÍA VER CÓMO OBTENER ESTO AL FRONT

module.exports = {
    getGenres
}