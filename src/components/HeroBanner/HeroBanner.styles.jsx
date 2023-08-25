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
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #3498DB, #2ecc71); 
  text-align: center;
  overflow: hidden;
  padding: 4rem 0; /* Adjust the padding value as needed */
  gap: 0.5rem; /* Adjust the gap value between elements */

  @media (max-width: ${breakpoints.medium}) {
    padding: 5rem 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  max-width: 800px;
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
  margin-bottom: 15px; /* Adjust the margin value as needed */
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
    background-color: #c0392b;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  opacity: 0.5;
`;
