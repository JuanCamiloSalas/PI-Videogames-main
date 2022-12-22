import { 
    GET_VIDEOGAMES,
    GET_GENRES,
    FILTER_BY_GENRE
    //GET_VIDEOGAMES_NAME
} from '../actions/actionTypes.js';

const initialState = {
    videogames: [],
    genres: [{id: 1, name:"Action"}, {id: 2, name:"Indie"}, {id: 3, name:"Adventure"}]
}



function rootReducer( state = initialState, action ) {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case FILTER_BY_GENRE:
            //const allVideogames = state.videogames;
            //const genres = action.payload;
            return {
                ...state
            }     
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;