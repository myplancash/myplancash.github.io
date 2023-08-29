import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row nowrap;
  gap: 1rem;
  justify-content: center;
  align-items: center; /* Align logos vertically */
  margin-top: 20px;
`;

export const Logo = styled.img`
  width: auto;
  max-height: 60px; /* Adjust the maximum height as needed */
  margin: 10px;
`;
