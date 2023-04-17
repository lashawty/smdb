import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function LoginButton(props) {
  const isLogIn = useSelector(state => state.login.value);
  const buttonClassName = `login-button ${isLogIn ? "hide" : ""}`;

  return(
    <div className={buttonClassName}>
      <Avatar
        onClick={props.onClick}
        icon={<UserOutlined/>} 
      />
    </div>
  )
};
