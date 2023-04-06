import './Nav.sass'
import InputSearch from '../antd/InputSearch'
import DropdownMenu from '../antd/DropdownMenu'
import LoginButton from '../antd/LoginButton'
export default function Nav() {

  return (
    <nav className="navbar">
      <a href='index.html'>SMDb</a>
      <DropdownMenu></DropdownMenu>
      <InputSearch></InputSearch>
      <LoginButton></LoginButton>
    </nav>
  )
}