import styled from 'styled-components';
import { Link } from 'react-router-dom'
import theme from '../../styles/theme';

export const Section = styled.section`
  padding: 2rem;
  background-color: #fff;
  text-align: center;
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

export const Introduction = styled.section`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;


export const Resume = styled.a`
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

export const Icon = styled.span`
  margin-right: 8px;
`;

export const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
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
    background-color: #6A0DAD;
    color: #fefefe; /* Primary Color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add box-shadow on hover */
  }
`;
