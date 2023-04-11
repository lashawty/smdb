import { Avatar } from 'antd';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { logOut } from '../../store/loginSlice';
export default function User (props) {
  const isLogIn = useSelector(state => state.login.value);
  const dispatch = useDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
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