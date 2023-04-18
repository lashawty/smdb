import './Nav.sass'
import InputSearch from '../InputSearch'
import DropdownMenu from '../DropdownMenu'
import LoginComponent from '../../container/LoginComponent'
import { Link } from "react-router-dom";
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