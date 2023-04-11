import { Avatar } from 'antd';
import { Link } from "react-router-dom";

export default function User (props) {
  const userClassName = `user-box ${props.isLogIn ? "active" : ""}`;
  return(
    <div className={userClassName}>
      <Link to="/my-movies">
        <Avatar style={{ backgroundColor: '#87d068' }}>S</Avatar>
      </Link>
    </div>
  )
}