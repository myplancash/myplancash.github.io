import React from 'react';
import { NavBarWrapper, NavContainer, Logo, NavMenu, NavItem, NavLink } from './Navbar.styles';
import LogoSVG from '../../assets/digital-biz-inverted.svg'; 

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavContainer>
        <Logo to="/">
          <img src={LogoSVG} alt="DigitalBiz Logo" width="150px" height="50px" />
        </Logo>
        <NavMenu>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavBarWrapper>
  );
}

export default NavBar;
