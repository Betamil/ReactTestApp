import React from "react";

const Movies = (props) => {

    return (
        <div>
            <ul>
                <li><h3>Titre du films</h3></li>
                <li>{props.movie.title}</li>
            </ul>
            <ul>
                <li><h3>Producteur(s)</h3></li>
                <li>{props.movie.producer}</li>
            </ul>
            <ul>
                <li><h3>Directeur(s)</h3></li>
                <li>{props.movie.director}</li>
            </ul>
        </div>
    )
}

export default Movies;