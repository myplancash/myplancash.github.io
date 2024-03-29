import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

export const BlogPostContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 16px;

  /* Add more styles as needed */
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
  gap: 0.5rem;
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
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  aspect-ratio: 16 / 9;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #333;
`;

export const BlogExcerptContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BlogExcerpt = styled.p`
  color: #666;
`;

export const ReadMore = styled.button`
  background-color:#003366;
  color: #fff;
  border: none;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #007979;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.6rem 0.9rem;
    font-size: 1.5rem;
  }
`;
