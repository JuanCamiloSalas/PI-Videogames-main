const { Genres } = require('../db.js');

const getGenres = async () => {
    const genres = await Genres.findAll();
    //let values = genres.map( genre => genre.dataValues.name );
    console.log(genres);
    //return values;
}

module.exports = {
    getGenres
}