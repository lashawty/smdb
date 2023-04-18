import { Card, Space, Input, Button, Modal } from 'antd';
import {  UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import  { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../store/loginSlice';
import { addSession } from '../store/getSessionSlice';
import axios from 'axios';
import './antd.sass'
// 登入流程：
// 輸入帳密 => 登入成功 => 狀態設為"已登入" => 跳轉第三方取得授權 => 回到登入前頁面

export default function LoginModal(props) {
  //redux
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.login.value);

  // 取得輸入帳密
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  //方法

  // 取得 token
   const getToken = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/authentication/token/new?api_key=06b5ea731fca9e39d8b51074aaad5aac')
      .then(response => {
        const token = response.data.request_token;
        localStorage.setItem("token", token)
        
        //取得跳轉前網址
        let url = localStorage.getItem("url")
        location.assign(`https://www.themoviedb.org/authenticate/${token}?redirect_to=${sessionStorage.getItem("url")}`)
      })
      .catch(error => {
        console.log(error);
      });
  };

  // 取得 session id
  const postSession = (token) => {

    axios.post('https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/authentication/session/new?api_key=06b5ea731fca9e39d8b51074aaad5aac', {
      "request_token": token
    })
      .then(response => {
        // console.log(response.data.session_id);
        dispatch(addSession(response.data.session_id));
        localStorage.setItem("session_id", response.data.session_id)
      })
      .catch(error => {
        // console.log(error);
      });
  }

  // 綁定事件
  const handleLogin = () => {
    if (username === localStorage.getItem('user') && password === localStorage.getItem('password')) {
      dispatch(logIn());
      getToken();
      localStorage.setItem("isLogIn", "true")
    } else {
      alert('帳號或密碼錯誤')
    }
  };

  // 防止冒泡
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  // 將假帳號密碼存在 local storage
  useEffect(()=>{
    
    localStorage.setItem("user", "sean")
    localStorage.setItem("password", "123")
    localStorage.setItem("url", location.href)

    if(localStorage.getItem("isLogIn") !== "true") {
      localStorage.setItem("isLogIn", "false")
    } else {
      dispatch(logIn());
      const token = localStorage.getItem("token")
      if(!localStorage.session_id) postSession(token)
    }
  },[])
  
  // 關閉 Modal
  useEffect(()=>{
    props.onClose()
  },[isLogin])

  return (
    <Modal
      open={props.isOpen}
      onOk={props.onClose}
      onCancel={props.onClose}
      footer={null} 
    >
      <Card
        onClick={stopPropagation}
        title="SIGN IN"
        style={{ width: '100%', textAlign: 'center', border:'none' }}>
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
    </Modal>
  );
}
