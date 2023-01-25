import { useState,useEffect } from "react";

import MovieCard from "./MoviesCard";

import "./App.css";
import SearchIcon from "./assets/search.svg";

const API_URL = "https://www.omdbapi.com?apikey=b53e79ff";

// const movies1 = 
// {
//   "Title": "The Blacklist: Redemption",
//   "Year": "2017",
//   "imdbID": "tt5592230",
//   "Type": "series",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BODI2MjI4MzQ1OV5BMl5BanBnXkFtZTgwOTk2MDAyMTI@._V1_SX300.jpg"
// }

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>Movies Island</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon} alt="alt" onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0
        ?(
          <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
        ):
        (
          <div className="empty">
            <h2>Upss!!! No movies found</h2>
          </div>
        )
      }
      
    </div>
  );
};

export default App;
