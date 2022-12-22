import React from "react";  

export default function Card({ name, img, genres }) { 
    return(
        <div>
            <h3>{name}</h3>
            <ul>
                {
                    genres && genres.map( genre => {
                        <li key={genre}>{genre}</li>
                    })
                }
            </ul>
            <img src={img} alt={`image of ${name}`} width="200px" height="250px"/>
        </div>
    )
}