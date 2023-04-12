import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
    <>
      <h2>My Movies</h2>
      {myMovies.map(movie=>(
        <p key={movie.id}>{movie.title}</p>
      ))}
    </>
  );
}

  