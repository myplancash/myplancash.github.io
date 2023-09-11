import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Section = styled.section` 
  padding: 2rem;
  text-align: center;
  background-color: ${theme.background};
  /* scrollbar-gutter: stable both-edges; 
  overflow-y: scroll;*/
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${theme.primary};
`;

export const ProjectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ProjectItem = styled.li`
  display: flex;
  flex-direction: column; /* Display projects in a column on small screens */
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row; /* Display projects in a row on larger screens */
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const ProjectImage = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 10px; /* Add some space between image and description */

  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 0; /* Remove margin-bottom to maintain consistent layout */
    flex: 1; /* Expand to take remaining space */
  }
`;

export const ProjectDescription = styled.div`
  @media (min-width: 768px) {
    flex: 2; /* Take more space to the right on larger screens */
    text-align: left;
  }
`;

export const GitHubLink = styled(Link)`
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
    background-color: #A90C2E;
    transition: width 0.3s, opacity 0.3s; /* Add opacity transition */
    opacity: 0; /* Initially hidden */
  }

  &:hover {
    color: #A90C2E;

    &:before {
      width: 100%; /* Show the line from left to right */
      opacity: 1; /* Fade-in effect */
    }
  }
`;
