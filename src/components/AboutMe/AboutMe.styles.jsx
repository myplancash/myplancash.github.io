// AboutMe.styles.js
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import theme from '../../styles/theme';

export const Section = styled.section`
  padding: 40px 0;
  background-color: #f8f8f8;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  /* background-color: rgba(255, 255, 255, 0.7); */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0.9; /* Adjust opacity value as needed */
`;

export const TextWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${theme.primary};
`;

export const Subheading = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 15px;
`;

export const Introduction = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

export const Icon = styled.span`
  margin-right: 8px;
`;

export const Quote = styled.blockquote`
  font-size: 1.2rem;
  color: #666;
  margin: 20px 0;
`;

export const CTAButton = styled(Link)`
  margin-top: 20px;
  display: inline-block;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${theme.secondary};
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
    color: #fefefe; /* Primary Color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add box-shadow on hover */
  }
`;
