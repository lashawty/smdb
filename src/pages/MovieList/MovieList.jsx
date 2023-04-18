import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MarkFavButton from '../../components/MarkFavButton';
import { useSelector } from 'react-redux'
import 'swiper/css';
import './MovieList.sass'

function MovieList() {

  
  const [movies, setMovies] = useState([]);
  const getMovieList = useSelector(state => state.movieList.value);

  useEffect(() => {
    setMovies(getMovieList)
  }, [getMovieList]);

  return (
    <div className='now-playing'>
      <h2>Upcoming Movies</h2>
      <Swiper
      slidesPerView={1}
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

