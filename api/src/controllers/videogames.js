'use strict'
/* CONSIGNA
[ ] GET /videogames:
Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal
[ ] GET /videogames?name="...":
Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado
[ ] POST /videogames:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos, relacionado a sus géneros.
*/

const { API_KEY } = process.env;
const axios = require ('axios');
const { Videogame, Genres } = require('../db.js');
const { Op } = require('sequelize');

//GET VIDEOGAMES
const getVideogamesAPI = async () => {
    
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`, { 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    });

    //acá podría hacer un get all ? []
    const videogames = await response.data.results.map( el => {
        return {
            id: el.id,
            name: el.name,
            img: el.background_image,
            // genres: el.genres.map(el => el.name)
            genres: el.genres.map(el => {
                return{
                    name: el.name
                }
            })
        }
    });

    return videogames;
}

const getVideogamesDB = async () => {
    const videogames = await Videogame.findAll({

        attributes: [
            'id', 
            'name', 
            'img', 
            'createdInDb'
        ],
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }

    })

    // const result = await videogames.map(el => {
    //     let names = el.genres.map( genre => genre.name );
    //     return {
    //         ...el,
    //         genres: names
    //     }
    // })
    // console.log(result[0].dataValues.genres.map(el => el.dataValues.name));

    return videogames;
}

const getVideogames = async () => {
    const videogamesAPI = await getVideogamesAPI();
    const videogamesDB = await getVideogamesDB();
    return videogamesDB.concat(videogamesAPI);
}

//GET VIDEOGAMES BY NAME
const getVideogamesByNameAPI = async (name) => {

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
}

const getVideogamesByNameDB = async (name) => {
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
}

const getVideogamesByName = async (name) => {
    const videogamesAPI = await getVideogamesByNameAPI(name);
    const videogamesDB = await getVideogamesByNameDB(name);
    const result = videogamesDB.concat(videogamesAPI);
    if(!result.length) throw new Error(`There are not results for ${name}.`)
    return result;
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
        createdInDb,
        genres
    } = info;

    let newVideogame = await Videogame.create({
        name,
        description,
        released,
        rating,
        platforms,
        img,
        createdInDb
    });

    let genresDB = await Genres.findAll({
        where: {
            name: genres
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
    getVideogamesByName,
    createVideogame
} 