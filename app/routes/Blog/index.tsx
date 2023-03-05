// import { Outlet } from '@remix-run/react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
const Blog = () => {
  return (
    <div className='h-full'>
      <ProSidebarProvider>
        <Sidebar>
          <Menu>
            <SubMenu label='Charts'>
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>
  );
};

export default Blog;
