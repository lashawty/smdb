import { Button, Dropdown, Space } from 'antd';

export default function DropdownMenu() {

  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="" href="https://www.antgroup.com">
          Top Rated Movies
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="" href="https://www.aliyun.com">
          Most Popular Movies
        </a>
      ),
    },
  ]
  return (
    <Dropdown menu={{ items }} placement="bottom" arrow={true}>
        <Button>MENU</Button>
      </Dropdown>
  )
  
};
