import styled from 'styled-components';
import theme from '../../styles/theme';


export const Section = styled.section`
  padding: 2rem;
  scrollbar-gutter: stable both-edges;
  text-align: center;
  background-color: ${theme.background};
`;


export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const IconLink = styled.a`
  color: #333; // Or use a color that matches your design
  font-size: 2rem;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #FFF; // Or the color you prefer on hover
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: #070606;
  margin-bottom: 20px;
`;

export const ContactInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding:1rem;
`;
