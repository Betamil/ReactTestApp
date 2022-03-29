import React from "react";
import MoviesCss from "../movies/Movies.module.css"

const MoviesHeader = () => {
    return (
        <div className={MoviesCss.containerMovies}>
            <table className={MoviesCss.movies}>
                <thead>
                <tr className={MoviesCss.listMovies}>
                    <th>Titre du films</th>
                    <th>Producteur(s)</th>
                    <th>Directeur(s)</th>
                </tr>
                </thead>
            </table>
        </div>

    )
}

export default MoviesHeader;