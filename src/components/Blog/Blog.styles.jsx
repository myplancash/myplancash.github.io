import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BlogPost = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
`;

export const BlogExcerptContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
`;

export const BlogExcerpt = styled.p`
  color: #666;
`;

export const ReadMore = styled.button`
  background-color: #D4145A;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #14B2D4;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem 0.9rem; /* You can adjust the padding as needed */
    font-size: 2rem; /* You can adjust the font size as needed */
  }

`;
