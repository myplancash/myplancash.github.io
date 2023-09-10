import React from 'react';
import { NavBarWrapper, NavContainer, Logo, NavMenu } from './Navbar.styles';
import { NavItem, NAV_ITEMS } from '../NavItems/NavItems';
import LogoSVG from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavContainer>
        <Logo to="/">
          <img src={LogoSVG} alt="DigitalBiz Logo" width="140px" height="40px" />
        </Logo>
        <NavMenu>
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={index} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </NavBarWrapper>
  );
}

export default NavBar;
