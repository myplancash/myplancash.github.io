import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

export const NavLink = styled(ScrollLink)`
  color: #fff;
  text-decoration: none;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #6A0DAD;
    /* transition: width 0.3s, opacity 0.3s; */
    opacity: 0;
  }

  &:hover {
    color: #6A0DAD;

    &:before {
      width: 100%;
      opacity: 1;
    }
  }
`;
