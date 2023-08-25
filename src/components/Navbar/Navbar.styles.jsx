import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.nav`
  background: linear-gradient(to right, #3498DB, #2ecc71); /* Gradient from Primary to Accent Color */
  padding: 8px 0;
  color: white;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled(Link)`
  color: #070606;
  max-width: 150px;
  margin: 0.5em;
  font-size: 1.2rem; /* Adjust the font size */
  text-decoration: none;
  cursor: pointer;
  padding-left: 1rem;
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
`;

export const NavItem = styled.li`
  margin-right: 16px; /* Adjust the margin */
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #c0392b;
    text-decoration: underline;
  }
`;
