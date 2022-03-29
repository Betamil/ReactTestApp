import React from "react";
import MoviesCss from "./Movies.module.css"

const Movies = (props) => {
    return (
        <div className={MoviesCss.listMovies}>
            <table className={MoviesCss.movies}>
                <tbody>
                <tr>
                    <td>
                        {props.movie.title}
                    </td>
                    <td>
                        {props.movie.producer}
                    </td>
                    <td>
                        {props.movie.director}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Movies;