import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          BLOGS
        </NavLink>
        {/* <Bars /> */}
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;