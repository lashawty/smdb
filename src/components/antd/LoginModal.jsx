import { Card, Space, Input, Button } from 'antd';
import {  UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import  { useState, useEffect, memo } from "react";
import './antd.sass'

export default function LoginModal(props) {
  //預設將帳密存在local storage
  useEffect(()=>{
    localStorage.setItem("user", "sean")
    localStorage.setItem("password", "123")
    localStorage.setItem("login", "false")
    console.log('set');
  },[])

  //取得輸入帳密
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //綁定事件
  const handleLogin = () => {
    if (
      username === localStorage.getItem('user') && 
      password == localStorage.getItem('password')) 
      {
        props.onLogIn()
        localStorage.setItem("login", "true")
      } else {
        alert('帳號或密碼錯誤')
      }
  };

  useEffect(()=>{
    props.onClose()
  },[props.isLogIn])

  const modalClassName = `Modal ${props.isOpen ? "active" : ""}`;
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  return (
    <div className={modalClassName} onClick={props.onClose}>
      <Card
        onClick={stopPropagation}
        title="SIGN IN"
        style={{ width: 300, textAlign: 'center' }}>
        <Space
          direction="vertical"
          size="middle"
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <Input
            placeholder="Enter your username"
            prefix={<UserOutlined className="site-form-item-icon" />}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            placeholder="enter password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="primary" onClick={handleLogin}>
            Login
          </Button>
        </Space>
      </Card>
    </div>
  );
}
