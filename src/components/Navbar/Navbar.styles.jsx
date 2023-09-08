import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.nav`
  background: linear-gradient(to right, #0A2463, #00CED1); 
  color: white;
`;

export const NavContainer = styled.div`
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

export const Logo = styled(Link)`
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
  max-width: 250px; /* Adjust the max width */
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  color: #070606;
  gap: 1rem;
  padding-right: 1rem;
`;

export const NavItem = styled.li`
  margin-right: 16px; /* Adjust the margin */
`;
export const NavLink = styled(Link)`
  color:#DC143C;
  text-decoration: none;
  transition: color 0.3s;
  position: relative; /* Add this to the parent element */

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px; /* Adjust this value to control the distance of the line from the text */
    left: 0;
    background-color: #6A0DAD;
    transition: width 0.3s, opacity 0.3s; /* Add opacity transition */
    opacity: 0; /* Initially hidden */
  }

  &:hover {
    color: #6A0DAD;

    &:before {
      width: 100%;
      opacity: 1;
    }
  }
`;
