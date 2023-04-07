import './LoginComponent.sass'
import LoginButton from '../antd/LoginButton'
import User from '../antd/User'
import LoginModal from '../antd/LoginModal'
import { useState, useEffect, memo } from 'react';
export default function LoginComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //登入狀態
  const [loginStatus, setLoginStatus] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogin = () => {
    setLoginStatus(true)
  }

  return (
    <div className="login-component">
      <LoginButton isLogIn={loginStatus} onClick={handleModalOpen}></LoginButton>
      <User isLogIn={loginStatus}></User>
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onLogIn={handleLogin}
        isLogIn={loginStatus}
      ></LoginModal>
    </div>
  )
}