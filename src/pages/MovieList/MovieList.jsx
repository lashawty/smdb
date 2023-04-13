import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MarkFavButton from '../../components/antd/MarkFavButton';
import axios from 'axios';
import 'swiper/css';
import './MovieList.sass'

function MovieList() {

  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/upcoming?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&page=1')
      .then(response => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='now-playing'>
      <h2>Upcoming Movies</h2>
      <Swiper
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      lazyPreloadPrevNext
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <div className='text-box'>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <MarkFavButton movieId={movie.id}></MarkFavButton>
            </div>
            <div className='img-box'>
              <picture>
                <source srcSet={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} media="(min-width: 769px)" />
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
              </picture>
              
            </div>
            
                      
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieList;

