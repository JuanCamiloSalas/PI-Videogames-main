import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres } from '../actions/index.js'; 
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import Paginado from './Paginado.jsx';

export default function Home() {

    const dispatch = useDispatch();
    const allVideogames = useSelector(state => state.videogames);
    const allGenres = useSelector(state => state.genres);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ videogamesPerPage, setVideogamesPerPage ] = useState(15);

    const indexLastVideogame = currentPage * videogamesPerPage; //15
    const indexFirstVideogame = indexLastVideogame - videogamesPerPage; //0
    const currentVideogames = allVideogames.slice(indexFirstVideogame, indexLastVideogame); //.slice(0,15)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getVideogames());
    }

    return (
        <div>
            <Link to='/videogame'>Create Videogame</Link>
            <h2>Results</h2>
            <button onClick={ e => handleClick(e) }>
                Reload videogames
            </button>
            <div>
                <select>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select>
                    <option>Acá irían los genres</option>
                    {
                        allGenres && allGenres.map( genre => {
                            return(<option value={genre.id}>{genre.name}</option>)
                        })
                    }
                </select>
                <select>
                    <option value='all'>All</option>
                    <option value='createdInDb'>Created</option>
                    <option value='api'>Existing</option>
                </select>
                <Paginado
                    videogamesPerPage = { videogamesPerPage }
                    allVideogames = { allVideogames }
                    paginado = { paginado }
                />
                {
                    currentVideogames?.map( el => {
                        return(
                        <div>
                            <Link to={`/home/${el.id}`}>
                                <Card key={el.id} name={el.name} img={el.img} genres={el.genres}/>
                            </Link>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    );
}