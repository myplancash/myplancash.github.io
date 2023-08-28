import styled from 'styled-components';
import theme from '../../styles/theme';

export const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const IconLink = styled.a`
  color: #333; // Or use a color that matches your design
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #c0392b; // Or the color you prefer on hover
  }
`;

export const Section = styled.section`
  padding: 50px 0;
  text-align: center;
  background-color: ${theme.background};
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${theme.primary};
`;

export const ContactInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;