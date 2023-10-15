import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-evenly;
  align-items: center; /* Align logos vertically */
  margin-top: 20px;
`;

export const Logo = styled.img`
  width: auto;
  max-height: 40px; /* Adjust the maximum height as needed */
  margin: 10px;
  box-shadow: '0 4px 8px rgba(0, 0, 0, 0.2)';
  opacity: '0.9';
`;
