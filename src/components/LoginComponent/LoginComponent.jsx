import LoginButton from '../antd/LoginButton'
import User from '../antd/User'
import LoginModal from '../antd/LoginModal'
import { useState } from 'react';


export default function LoginComponent() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="login-component">
      <LoginButton onClick={handleModalOpen}></LoginButton>
      <User></User>
      <LoginModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
      ></LoginModal>
    </div>
  )
}