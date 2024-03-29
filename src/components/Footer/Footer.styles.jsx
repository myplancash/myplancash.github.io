import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #007979, #c0c0c0);
  color: #fff;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterText = styled.p`
`;

export const SocialIcons = styled.div`
  font-size: 20px;
`;

export const IconLink = styled.a`
  color: #fff;
  margin-right: 10px;
  text-decoration: none;

  &:hover {
    color: #003366; /* Change to your preferred hover color */
  }
`;
