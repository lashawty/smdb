import { Button } from 'antd';

export default function LoginButton(props) {
  const buttonClassName = `login-button ${props.isLogIn ? "hide" : ""}`;
  return(
    <div className={buttonClassName}>
      <Button onClick={props.onClick}>Sign In</Button>
    </div>
  )
  
};
