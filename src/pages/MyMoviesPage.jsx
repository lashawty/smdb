import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './page.sass'
import { Image, Descriptions, Card, Space, Empty } from 'antd';
import RemoveFavButton from '../components/antd/RemoveFavButton';
import useWindowSize from '../hook/useWindowSize';
export default function MyMoviesPage(props) {
  //resize
  const windowWidth = useWindowSize().width

  //redux
  const [myMovies, setMyMovies] = useState([])

  const sessionId = useSelector(state => state.session.value);
  const isLogin = useSelector(state => state.login.value);

  const getMyMovies = () => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/account/%7Baccount_id%7D/favorite/movies?api_key=06b5ea731fca9e39d8b51074aaad5aac&session_id=${sessionId}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(response => {
          setMyMovies(response.data.results)
          // console.log(myMovies);
        })
        .catch(error => {
          // console.log(error);
        });
  }

  if(sessionId && isLogin) {
    useEffect(()=>{
      getMyMovies()
    },[isLogin, myMovies])
  }
  

  return (
    <div className='my-movies'>
      <h2>My Movies</h2>
      <div className='cards'>
        {myMovies.length > 0 ? 
          myMovies.map(movie=>(
            <Card key={movie.id} style={windowWidth >= 767 ? {width: "360px"} : {width: '100%'}}>
              <Space direction="vertical">
                <Image
                  style={{width
                  : '100%', maxWidth: '100%'}}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  preview={false}
                />
                <Descriptions title={movie.title} >
                  <Descriptions.Item
                    label="Release Date"
                    style={{
                      display: 'block',
                      width:'100%'
                      }}>
                      {movie.release_date}
                  </Descriptions.Item>
                  <Descriptions.Item
                    label="Rate"
                    style={{
                      display: 'block',
                      width:'100%'
                      }}>
                      {`${movie.vote_average} / 10`}
                  </Descriptions.Item>
                </Descriptions>
                <RemoveFavButton
                  movieId={movie.id}
                  onClick={getMyMovies}>
                </RemoveFavButton>
              </Space>
            </Card>
        ))
          : <Empty style={{width: '100%'}}/>}
      </div>
    </div>
  );
}

  