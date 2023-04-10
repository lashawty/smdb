import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Space, Rate  } from 'antd';
import './page.sass'
const { Meta } = Card;

export default function MostPopularPage (props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?api_key=06b5ea731fca9e39d8b51074aaad5aac&language=en-US&page=1')
      .then(response => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return(
    <div className='top-rated'>
        <h2>Most Popular Movies</h2>
        <Space size="large" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', margin: '50px auto 0 auto' }}>
          {movies.map(movie => (
            <Card
            hoverable
            key={movie.id}
            style={{ width: '350px' }}
            cover={<img alt="" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />}
          >
            <Meta title={movie.title} description={movie.vote_average} />
            <Rate allowHalf disabled defaultValue={`${movie.vote_average / 2}`} />
          </Card>
        ))}
        </Space>
      </div>
  )
}