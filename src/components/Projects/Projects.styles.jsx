import styled from 'styled-components';

export const Section = styled.section`
`;

export const Heading = styled.h1`
  font-size: 2rem;
`;

export const ProjectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProjectImage = styled.img`
  object-fit: contain;
  margin-right: 10px;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  margin-right: 20px;
  padding-right: 1rem;

  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 0; /* Remove margin-bottom to maintain consistent layout */
  }
`;

export const ProjectDescription = styled.div`
  flex: 1;
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
