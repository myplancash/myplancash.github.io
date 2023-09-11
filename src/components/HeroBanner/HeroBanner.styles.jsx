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
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 400px; /* Adjust the minimum height as needed */

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;

export const NavBarWrapper = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Allow content to wrap to the next line if needed */

  @media (min-width: ${breakpoints.medium}) {
    padding: 1rem 2rem; /* Adjust padding for larger screens */
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto; /* Push the navigation links to the right */

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;

export const Logo = styled(RouterLink)`
  color: #070606;
  max-width: 150px;
  text-decoration: none;
  cursor: pointer;
  padding-left: 1rem;

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
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
  margin: 0 auto;
  flex-flow: column nowrap;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  p {
    color: #070606;
  }

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;

export const HeroHeadline = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.3em;
  letter-spacing: 1px;
  color: #070606;

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
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

  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
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
