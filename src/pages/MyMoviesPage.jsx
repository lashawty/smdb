import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './page.sass'
import { Image, Descriptions, Card, Space } from 'antd';

export default function MyMoviesPage(props) {

  //redux
  const [myMovies, setMyMovies] = useState([])

  const sessionId = useSelector(state => state.session.value);
  const isLogin = useSelector(state => state.login.value);

  if(sessionId && isLogin) {
    useEffect(()=>{
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=06b5ea731fca9e39d8b51074aaad5aac&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(response => {
          setMyMovies(response.data.results)
          console.log(myMovies);
        })
        .catch(error => {
          console.log(error);
        });
    },[isLogin])
  }
  

  return (
    <div className='my-movies'>
      <h2>My Movies</h2>
      <div className='cards'>
        {myMovies.map(movie=>(
          <Card key={movie.id} style={{width: "40%"}}>
            <Space direction="vertical">
              <Image
                width={'100%'}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <Descriptions title={movie.title}>
                <Descriptions.Item label="Release Date" style={{width: "100%"}}>{movie.release_date}</Descriptions.Item>
                <Descriptions.Item label="Rate" style={{width: "100%"}}>{`${movie.vote_average} / 10`}</Descriptions.Item>
              </Descriptions>
            </Space>
          </Card>
        ))}
      </div>
    </div>
  );
}

  