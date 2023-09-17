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

export const ImageWrapper = styled.section`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ImageContainer = styled.section`
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

export const TextWrapper = styled.section`
  flex-flow: column nowrap;
  padding: 0 1rem;
  margin: 1rem auto;
  display: flex;
  gap: .5rem;
  text-align: left; /* Align text to the left */

  @media (max-width: 768px) {
    align-items: center; /* Center items on small screens */
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${theme.primary};
`;

export const Subheading = styled.h2`
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
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px; /* Adjust this value to control the distance of the line from the text */
    left: 0;
    background-color: #A90C2E;
    transition: width 0.3s, opacity 0.3s; /* Add opacity transition */
    opacity: 0; /* Initially hidden */
  }

  &:hover {
    color: #A90C2E;

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
  background-color: ${theme.secondary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  max-width: 60%; /* Set a maximum width for the button */

  &:hover {
    background-color: #A90C2E;
    color: #fefefe; /* Primary Color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add box-shadow on hover */
  }


  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.6rem 0.9rem;
    font-size: 2rem;
  }
  
  @media (min-width: 992px) {
    max-width: 30%; /* Adjust the maximum width for wider screens */
  }
`;