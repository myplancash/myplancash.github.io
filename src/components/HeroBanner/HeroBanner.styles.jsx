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
  background: linear-gradient(to right, #3498DB, #2ecc71); 
  text-align: center;
  overflow: hidden;
  padding: 100px 0;

  @media (max-width: ${breakpoints.medium}) {
    padding: 80px 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const TextWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeroHeadline = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const CTAButton = styled.a`
  background-color: ${theme.secondary}; 
  color: white;
  padding: 10px 20px;
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
