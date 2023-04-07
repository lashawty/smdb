import { Avatar } from 'antd';

export default function User (props) {
  const userClassName = `user-box ${props.isLogIn ? "active" : ""}`;
  return(
    <div className={userClassName}>
      <Avatar style={{ backgroundColor: '#87d068' }}>S</Avatar>
    </div>
  )
}