import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 35px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1100px) / 2);
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2px;
  height: 100%;
  cursor: pointer;
  margin-left:80px;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px; 
  
`;

