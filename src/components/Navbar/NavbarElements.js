import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 12px;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px; 
  
`;
