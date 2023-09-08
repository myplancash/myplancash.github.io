import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: center;
  height: 100%;
`;

export const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  max-width: 1200px;
  padding: 2rem;
  gap: 1rem;
  margin: 0 auto;
`;

export const BlogPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 1rem;
  min-height: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Ensure children stretch vertically */
  position: relative;

  @media (max-width: 768px) {
    flex-basis: calc(50% - 20px); /* Two columns on smaller screens */
  }

  @media (max-width: 480px) {
    flex-basis: 100%; /* Single column on even smaller screens */
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  flex: 1;
  height: auto;
  border-radius: 5px;
`;

export const BlogTitle = styled.h3`
  font-size: 1.2rem;
  flex: 1;
  margin-top: 10px;
  color: #333;
`;

export const BlogExcerptContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

export const BlogExcerpt = styled.p`
  color: #666;
  margin-top: 10px;
  flex: 1;
`;

export const ReadMore = styled(Link)`
  color: #DC143C;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
  flex: 1;
  align-self: self-end;
  /* position: absolute;
  bottom: 10px;
  right: 10px; */

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #6A0DAD;
    transition: width 0.3s, opacity 0.3s;
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