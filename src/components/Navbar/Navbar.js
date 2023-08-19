import React from 'react';
import {
  NavBarWrapper,
  NavContainer,
  Logo,
  ResponsiveLogo,
  NavMenu,
  NavItem,
  NavLink
} from './Navbar.styles';
import LogoSVG from '../../assets/digital-biz-inverted.svg'; 

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavContainer>
        <Logo to="/">
          <ResponsiveLogo src={LogoSVG} alt="DigitalBiz Logo" />
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
