import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

export const Article = styled.article`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
`;

export const Header = styled.header`
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 18px;

    ${breakpoint('medium')} {
      font-size: 24px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  ${breakpoint('medium')} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.section`
  position: relative;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
`;

export const TextWrapper = styled.section`
  padding: 0 1rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: left;

  p {
    color: #070606;
  }
`;

export const Introduction = styled.section`
  line-height: 1.6;
  color: #444;
`;

export const Icon = styled.span`
  margin-right: 8px;
`;

export const Quote = styled.blockquote`
  font-style: italic;
  color: #666;
  margin: 20px 0;
`;

export const CTAButton = styled(Link)`
  background-color: ${theme.secondary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #FFF;
  }

  ${breakpoint('medium')} {
    width: 80%;
    padding: 0.6rem 0.9rem;
    font-size: 1.5rem;
  }
`;

export const PersonalBrandStatement = styled.p`
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  ${breakpoint('medium')} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

function breakpoint(size) {
  return `@media (min-width: ${breakpoints[size]})`;
}
