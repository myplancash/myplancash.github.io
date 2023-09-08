import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: center;
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BlogPost = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BlogImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const BlogTitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
  color: #333;
`;

export const BlogExcerpt = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
`;


export const ReadMore = styled(Link)`
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
    background-color: #6A0DAD;
    transition: width 0.3s, opacity 0.3s; /* Add opacity transition */
    opacity: 0; /* Initially hidden */
  }

  &:hover {
    color: #6A0DAD;

    &:before {
      width: 100%; /* Show the line from left to right */
      opacity: 1; /* Fade-in effect */
    }
  }
`;
