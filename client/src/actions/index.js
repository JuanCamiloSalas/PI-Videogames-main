import { 
    GET_VIDEOGAMES,
    GET_GENRES,
    FILTER_BY_GENRE
    //GET_VIDEOGAMES_NAME
} from './actionTypes.js';

import axios from 'axios';

export function getVideogames() {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: json.data
        })
    }
}

export function getGenres() {
    return async function (dispatch) {
        let json = await axios.get("http://localhost:3001/genres");
        return dispatch({
            type: GET_GENRES,
            payload: json.data
        })
    }
}

export function filterVideogamesByGenre(payload) {
    return{
        type: FILTER_BY_GENRE,
        payload
    }
}