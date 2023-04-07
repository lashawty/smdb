import { Button, Dropdown } from 'antd';
import { Outlet, Link } from "react-router-dom";

export default function DropdownMenu() {

  const items = [
    {
      key: '1',
      label: (
        <Link to='/top-rated'>Top Rated Movies</Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to='/most-popular'>Most Popular Movies</Link>
      ),
    },
  ]
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow={true}>
        <Button>MENU</Button>
      </Dropdown>
  )
  
};
