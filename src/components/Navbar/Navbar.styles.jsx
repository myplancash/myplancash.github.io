import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const NavBarWrapper = styled.nav`
  background: linear-gradient(to right, #DC143C, #FFDC49);
  color: white;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled(RouterLink)`
  color: #070606;
  max-width: 150px;
  text-decoration: none;
  cursor: pointer;
  padding-left: 1rem;
  margin: 1rem;
`;

export const ResponsiveLogo = styled.img`
  width: 100%;
  height: auto;
  max-width: 250px;
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  color: #070606;
  gap: 1rem;
  padding-right: 1rem;
`;

export const NavItem = styled.li`
  margin-right: 16px;
`;

export const NavLink = styled(ScrollLink)`
  color: #DC143C;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #A90C2E;
    transition: width 0.3s, opacity 0.3s;
    opacity: 0;
  }

  &:hover {
    color: #A90C2E;

    &:before {
      width: 100%;
      opacity: 1;
    }
  }
`;
