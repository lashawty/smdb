import './Nav.sass'
import InputSearch from '../antd/InputSearch'
import DropdownMenu from '../antd/DropdownMenu'
import LoginComponent from '../LoginComponent/LoginComponent'
import { Outlet, Link, NavLink } from "react-router-dom";
import { memo } from 'react';
export default function Nav() {

  return (
    <nav className="navbar">
      <Link to='/'>SMDb</Link>
      <DropdownMenu></DropdownMenu>
      <InputSearch></InputSearch>
      <LoginComponent></LoginComponent>
    </nav>
  )
}