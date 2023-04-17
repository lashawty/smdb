import { Button, Dropdown } from 'antd';
import { Outlet, Link } from "react-router-dom";

export default function DropdownMenu() {
  const buttonStyle = {
    fontFamily: 'Stadiona',
    fontSize: '30px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: 0,
    lineHeight: 1
  }
  const dropdownStyle = {
    fontFamily: 'Stadiona',
    fontSize: '20px',
  }
  const items = [
    {
      key: '1',
      label: (
        <Link style={dropdownStyle} to='/top-rated'>Top Rated Movies</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link style={dropdownStyle} to='/most-popular'>Most Popular Movies</Link>
      ),
    },
  ]
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow={true} >
        <Button style={buttonStyle}>Menu</Button>
      </Dropdown>
  )
  
};
