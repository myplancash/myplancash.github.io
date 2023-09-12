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

export const ProjectList = styled.div`
/*   list-style: none;
  margin: 0;
  padding: 0; */
  display: grid;
  grid-template-columns: 1fr 60% 40%; /* Define the columns */
  grid-template-rows: auto auto auto; /* Define the rows */

  gap: 10px; /* Adjust the gap between items */

  .item1 {
    grid-column: 1 / span 3;
  }

  .item2 {
    grid-column: 1 / span 2;
    grid-row: 2;
  }

  .item3 {
    grid-column: 3;
    grid-row: 2 / span 2;
  }

  .item4 {
    grid-column: 1;
    grid-row: 3;
  }

  .item5 {
    grid-column: 2;
    grid-row: 3;
  }
   
  
`;

export const ProjectItem = styled.div`
  /* display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center; */

  background-color: #f2f2f2; /* Set a background color for items */
  padding: 20px; /* Adjust padding as needed */
  border: 1px solid #ddd;

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
  span {
    a {
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
    }
  }

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
