import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

/* export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`; */

export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;

  &.active {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const MainContent = styled.main`
  padding: 20px 0;
`;
