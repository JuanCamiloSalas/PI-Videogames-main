const { Videogame, Genres } = require('../db.js');
const { Op } = require('sequelize');

//GET VIDEOGAMES
const getVideogames = async (info) => {
    
    const { name, createdByUser, alphabetically, rating } = info;
    const where = {};
    const order = [];

    if(name) where.name = { [Op.iLike]: `%${name}%`};
    if(createdByUser) where.createdByUser = createdByUser; //OJO: Debe llegar un BOOLEAN createdByUser === "true" ? createdByUser = true : createdByUser = false
    if(alphabetically) order.push(['name', `${alphabetically}`]); //Sería un STRING 'ASC' o 'DESC'
    if(rating) order.push(['rating', `${rating}`]);

    const videogames = await Videogame.findAll({

        where,
        order,
        attributes: [
            'id', 
            'name', 
            'img',
            'rating',
            'platforms', 
            'createdByUser'
        ],
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }

    })

    return videogames;
}

//CREATE VIDEOGAME
const createVideogame = async (info) => {
    const { 
        name,
        description,
        released,
        rating,
        platforms,
        img,
        createdByUser,
        genres
    } = info;

    let newVideogame = await Videogame./* findOr */create({
        name,
        description,
        released,
        rating,
        platforms,
        img,
        createdByUser
    });

    let genresDB = await Genres.findAll({
        where: {
            name: genres || null
        }
    });
    
    newVideogame.addGenres(genresDB);

    return({
        message: `The videogame ${name} was created successfully`,
        Videogame: newVideogame
    });
}

module.exports = {
    getVideogames,
    createVideogame
} 

//GET VIDEOGAMES BY NAME
/* const getVideogamesByNameAPI = async (name) => {

    const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });
    
    if (!response.data.results.length) {
        return response.data.results;
    } else {
        const videogames = await response.data.results.map( el => {
            return {
                id: el.id,
                name: el.name,
                img: el.background_image,
                genres: el.genres
            }
        });
        return videogames;
    }
} */
/* const getVideogamesByNameDB = async (name) => {
    const videogames = await Videogame.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        attributes: [ 'id', 'name', 'img', 'createdInDb'],
        include: {
            model: Genres
        }
    })
    return videogames;
} */
/* const getVideogamesByName = async (name) => {
    const videogamesAPI = await getVideogamesByNameAPI(name);
    const videogamesDB = await getVideogamesByNameDB(name);
    const result = videogamesDB.concat(videogamesAPI);
    if(!result.length) throw new Error(`There are not results for ${name}.`)
    return result;
} */
