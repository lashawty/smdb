import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Space, Rate, Image  } from 'antd';
import MarkFavButton from '../components/antd/MarkFavButton';
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
        <Space size="large" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', margin: '50px auto 0 auto', justifyContent: 'center' }}>
          {movies.map(movie => (
            <Card
              hoverable
              key={movie.id}
              style={{maxWidth: '384px', border:'none', width: '100%' }}
              cover={
                <Image
                width={'100%'}
                preview={false}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />}
            >
            <Meta title={movie.title} description={movie.vote_average} />
            <Rate allowHalf disabled defaultValue={`${movie.vote_average / 2}`} />
            <MarkFavButton movieId={movie.id}></MarkFavButton>
          </Card>
        ))}
        </Space>
      </div>
  )
}