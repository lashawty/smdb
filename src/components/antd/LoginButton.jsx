import { Button } from 'antd';
import { useSelector } from 'react-redux';

export default function LoginButton(props) {
  const isLogIn = useSelector(state => state.login.value);
  const buttonClassName = `login-button ${isLogIn ? "hide" : ""}`;
  return(
    <div className={buttonClassName}>
      <Button onClick={props.onClick}>Sign In</Button>
    </div>
  )
};
