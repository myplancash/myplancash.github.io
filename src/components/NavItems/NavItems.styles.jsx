import styled from 'styled-components';
import { Link } from 'react-router-dom';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};


export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px; /* Adjust this value to control the distance of the line from the text */
    left: 0;
    background-color: #14B2D4;
    transition: width 0.3s, opacity 0.3s; /* Add opacity transition */
    opacity: 0; /* Initially hidden */
  }

  &:hover {
    color: #14B2D4;

    &:before {
      width: 100%; /* Show the line from left to right */
      opacity: 1; /* Fade-in effect */
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    /* Add styles for medium screens and larger here */
  }
`;
