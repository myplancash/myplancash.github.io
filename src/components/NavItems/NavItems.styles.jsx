import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  color:#DC143C;
  text-decoration: none;
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