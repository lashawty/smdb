import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function MyMoviesPage(props) {
  //redux
  const isLogin = useSelector(state => state.login.value);
  const [id, setID] = useState(null)
  let sessionId

  useEffect(()=>{
    // axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/authentication/token/new?api_key=06b5ea731fca9e39d8b51074aaad5aac')
    //   .then(response => {
    //     sessionId = response.data.request_token
    //     console.log(sessionId);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },[id])

  return (
    <>
      <h2>My Movies</h2>
    </>
  );
}

  