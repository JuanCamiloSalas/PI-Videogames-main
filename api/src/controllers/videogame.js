const { Videogame, Genres } = require('../db.js');

const getVideogameDetails = async (id) => {
    const videogame = await Videogame.findByPk(id, {
        attributes: [
            'id', 
            'name', 
            'img',
            'description', 
            'released', 
            'rating', 
            'platforms'
        ],
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
    return videogame;
}

module.exports = {
    getVideogameDetails
}


/* const getVideogameDetailsDB = async (id) => {
    const videogame = await Videogame.findByPk(id, {
        attributes: [
            'id', 
            'name', 
            'img',
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
} */
/* const getVideogameDetails = async (id, createdInDb) => {

    if(createdInDb === "true") {
        const videogameDetailsDB = await getVideogameDetailsDB(id);
        return videogameDetailsDB;
    } else {
        //const videogameDetailsAPI = await getVideogameDetailsAPI(id);
        //return videogameDetailsAPI;
    }
} */
