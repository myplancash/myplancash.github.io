import styled from 'styled-components';
import theme from '../../styles/theme';

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