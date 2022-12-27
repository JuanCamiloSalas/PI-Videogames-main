const { getVideogames, createVideogame } = require('./videogames.js');
const { getVideogameDetails } = require('./videogame.js');
const { getGenres } = require('./genres.js');

module.exports = {
    getVideogames,
    createVideogame,
    getVideogameDetails,
    getGenres
} 