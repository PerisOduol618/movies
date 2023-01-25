import React from "react";


const MovieCard = ({movies1}) =>{
    return(
        <div className="movie">
          <div>
            <p>{movies1.Year} </p>
          </div>
          <div>
            <img src={movies1.Poster !== 'N/A' ? movies1.Poster : 'https://via.placeholder.com/400'} alt={movies1.Title} />
          </div>
          <div>
          <span>{movies1.Type}</span>
          <h3>{movies1.Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard