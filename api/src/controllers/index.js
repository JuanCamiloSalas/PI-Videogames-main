const { getVideogames, getVideogamesByName, createVideogame } = require('./videogames.js');
const { getVideogameDetails } = require('./videogame.js');
const { getGenres } = require('./genres.js');

module.exports = {
    getVideogames,
    getVideogamesByName,
    createVideogame,
    getVideogameDetails,
    getGenres
} 