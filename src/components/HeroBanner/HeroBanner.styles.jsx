import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link as RouterLink } from 'react-router-dom';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

export const HeroBannerWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 60px 0;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 400px;
  width: 100%;

  @media (min-width: ${breakpoints.medium}) {
    min-height: 600px; /* Adjust minimum height for medium screens */
  }
`;

export const NavBarWrapper = styled.section`
  padding: 1rem;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: row; /* Change to column layout on small screens */
    align-items: center;
  }
`;

export const Logo = styled(RouterLink)`
  color: #070606;
  max-width: 150px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: auto; /* Move the logo to the left */

  @media (max-width: ${breakpoints.medium}) {
    margin-bottom: 1rem; /* Add margin-bottom for spacing on small screens */
    margin-right: 0; /* Reset the right margin for small screens */
  }
`;

export const HeroContent = styled.div`
  z-index: 1;
  max-width: 800px;
  color: #fff;
`;

export const TextWrapper = styled.div`
  padding: 0 1rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    color: #070606;
  }
`;

export const HeroHeadline = styled.h1`
  font-size: 3rem;
  flex: 1;
  font-weight: bold;
  padding: 0.4rem 0.6rem;

  @media (max-width: ${breakpoints.medium}) {
    padding: 0.6rem 0.9rem;
    font-size: 2rem;
  }
`;

export const CTAButton = styled.a`
  background-color: ${theme.secondary};
  color: white;
  flex: 1;
  text-align: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #14B2D4;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 80%;
    padding: 0.6rem 0.9rem;
    font-size: 1.5rem;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 1rem;

  a {
    margin-right: 1rem;
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.secondary};
    }
  }
`;
