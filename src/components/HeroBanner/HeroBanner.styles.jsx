import styled from 'styled-components';
import theme from '../../styles/theme';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

export const HeroBannerWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #0A2463, #00CED1); 
  text-align: center;
  gap: 0.5rem;

  background-color: #f8f8f8;
  padding: 60px 0;
  text-align: center;
`;

export const HeroContent = styled.div`
  z-index: 1;
  max-width: 800px;
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  flex-flow: column nowrap;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const HeroHeadline = styled.h1`
  font-size: 2rem; /* Adjust the font size as needed */
  font-weight: bold;
  margin-bottom: .3em;
  letter-spacing: 2px;
`;


export const CTAButton = styled.a`
  background-color: ${theme.secondary}; 
  color: white;
  padding: .5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #6A0DAD;
  }
`;
