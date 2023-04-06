import React, { useState, useEffect } from 'react';
import axios from 'axios';
function MovieList() {

  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/now_playing?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&page=1')
      .then(response => {
        console.log(response);
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>          
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;

