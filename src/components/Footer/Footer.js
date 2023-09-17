import React from 'react';
import { FooterWrapper, FooterContent, FooterText, SocialIcons, IconLink } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterText>&copy; 2023 digitalbizfusion. All rights reserved.</FooterText>
        <SocialIcons>
          <IconLink href="https://www.linkedin.com/in/sergioestebantorres/">
            <FontAwesomeIcon icon={faLinkedin} />
          </IconLink>
          <IconLink href="https://github.com/myplancash">
            <FontAwesomeIcon icon={faGithub} />
          </IconLink>
        </SocialIcons>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;
