import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./assets/search.svg";

const API_URL = "https://www.omdbapi.com?apikey=b53e79ff";

const movies1 = 
{
  "Title": "The Blacklist: Redemption",
  "Year": "2017",
  "imdbID": "tt5592230",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODI2MjI4MzQ1OV5BMl5BanBnXkFtZTgwOTk2MDAyMTI@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("blacklist");
  }, []);

  return (
    <div className="app">
      <h1>Movies Island</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="alt" onClick={() => {}} />
      </div>
      <div className="container">
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
      </div>
    </div>
  );
};

export default App;
