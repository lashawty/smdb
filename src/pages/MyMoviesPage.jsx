import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function MyMoviesPage(props) {
  //redux
  const isLogin = useSelector(state => state.login.value);
  const [id, setID] = useState(null)
  let sessionId

  useEffect(()=>{
    
  },[id])

  return (
    <>
      <h2>My Movies</h2>
    </>
  );
}

  