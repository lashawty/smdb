import { useState, useEffect } from 'react';
import { Card, Space, Rate, Image  } from 'antd';
import { useSelector } from 'react-redux'
import MarkFavButton from '../components/MarkFavButton';
import './page.sass'
const { Meta } = Card;

export default function TopRatedPage (props) {
  const [movies, setMovies] = useState([]);
  const getTopRated = useSelector(state => state.topRated.value);
  
  useEffect(() => {
    setMovies(getTopRated)
  }, [getTopRated]);

  return(
      <div className='top-rated'>
        <h2>Top Rated Movies</h2>
        <Space size="large" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', margin: '50px auto 0 auto', justifyContent: 'center' }}>
          {movies.map(movie => (
            <Card
            hoverable
            key={movie.id}
            style={{maxWidth: '280px', border:'none', width: '100%' }}
            cover={
              <Image
              width={'100%'}
              preview={false}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />}
          >
            <Meta title={movie.title} description={movie.vote_average} />
            <Rate allowHalf disabled defaultValue={`${Math.floor(movie.vote_average / 2)}`} />
            <MarkFavButton movieId={movie.id}></MarkFavButton>
          </Card>
        ))}
        </Space>
      </div>
  )
}