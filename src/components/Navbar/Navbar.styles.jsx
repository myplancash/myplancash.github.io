import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled.nav`
  background-color: #3498db; /* Primary Color */
  padding: 10px 0;
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
  color: white;
  max-width: 150px;
  margin: 0.5em;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  padding-left: 1rem;
`;

export const ResponsiveLogo = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px; /* Set a maximum width for larger screens */
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #2ecc71; /* Accent Color */
  }
`;
