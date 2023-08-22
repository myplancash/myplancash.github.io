import styled from 'styled-components';
import theme from '../../styles/theme';

export const Section = styled.section` 
  padding: 50px 0;
  text-align: center;
  background-color: ${theme.background};
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

export const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #2980b9;
  }
`;
