import LoginButton from '../antd/LoginButton'
import User from '../antd/User'
import LoginModal from '../antd/LoginModal'
import { useState } from 'react';


export default function LoginComponent() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="login-component">
      <LoginButton onClick={showModal}></LoginButton>
      <User></User>
      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
      ></LoginModal>
    </div>
  )
}