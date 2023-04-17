import { FontSizeOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from "antd";
import { logOut } from '../../store/loginSlice';
import { clearSession } from '../../store/getSessionSlice';

export default function User (props) {
  const isLogIn = useSelector(state => state.login.value);
  const dispatch = useDispatch();
  const userClassName = `user-box ${isLogIn ? "active" : ""}`;
  
  const handleLogOut = () => {
    dispatch(logOut())
    dispatch(clearSession())
    localStorage.setItem("session_id", "")
    localStorage.setItem("token", "")
    localStorage.setItem("isLogIn", "false")
    sessionStorage.setItem("url", "")
  }

  return(
    <div className={userClassName}>
      <Link to="/my-movies">
        <Avatar style={{ backgroundColor: '#87d068' }}>S</Avatar>
      </Link>
      <LogoutOutlined onClick={handleLogOut} style={{
        color: '#fff',
        fontSize: '20px'  
      }}/>
    </div>
  )
}