import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link as RouterLink } from 'react-router-dom';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};
export const HeroBannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  background-color: #fff;
  padding: 60px 0;
  text-align: center;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 400px; /* Adjust the minimum height as needed */

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;

export const NavBarWrapper = styled.section`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-flow: row wrap; /* Default to row layout */
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.medium}) {
    flex-flow: column; /* Switch to column layout on small screens */
    align-items: center;
  }
`;

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto; /* Push the navigation links to the right */

  @media (max-width: ${breakpoints.medium}) {
    /* Add styles for small screens here */
    flex-flow: row; /* Switch to column layout on small screens */
    align-items: center;
  }
`;

export const Logo = styled(RouterLink)`
  color: #070606;
  max-width: 150px;
  text-decoration: none;
  cursor: pointer;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem; /* Add margin-right for spacing */

  @media (max-width: ${breakpoints.medium}) {
    margin-right: 0; /* Remove margin-right on small screens */
    margin-bottom: 1rem; /* Add margin-bottom for spacing between logo and links */
  }
`;


export const HeroContent = styled.div`
  z-index: 1;
  max-width: 800px;
  color: #fff; /* Adjust text color to contrast with the background */

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;

export const TextWrapper = styled.div`
  flex-flow: column nowrap;
  padding: 0 1rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    color: #070606;
  }

  @media (max-width: 768px) {
    p {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

export const HeroHeadline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.4rem 0.6rem;
  color: #070606;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 2rem;
    padding: 0.6rem 0.9rem;
  }
`;

export const CTAButton = styled.a`
  background-color: ${theme.secondary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #a90c2e;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 0.6rem 0.9rem;
    font-size: 2rem;
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

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;
