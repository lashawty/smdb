import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { logOut } from '../../store/loginSlice';
import { clearSession } from '../../store/getSessionSlice';
import axios from 'axios';

export default function User (props) {
  const isLogIn = useSelector(state => state.login.value);
  const dispatch = useDispatch()

  //登出session api
  const logOutAPI = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/authentication/session?api_key=06b5ea731fca9e39d8b51074aaad5aac')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleLogOut = () => {
    dispatch(logOut())
    dispatch(clearSession())
    // logOutAPI()
  }

  const userClassName = `user-box ${isLogIn ? "active" : ""}`;

  return(
    <div className={userClassName}>
      <Link to="/my-movies">
        <Avatar style={{ backgroundColor: '#87d068' }}>S</Avatar>
      </Link>
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  )
}