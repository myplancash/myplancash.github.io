import React from 'react';
import {
  HeroBannerWrapper,
  TextWrapper,
  HeroContent,
  HeroHeadline,
  CTAButton,
  SocialIcons,
  NavBarWrapper,
  NavBarContainer,
  Logo,
} from './HeroBanner.styles';

import { NAV_ITEMS, NavItem } from '../NavItems/NavItems';
import LogoSVG from '../../assets/logo.svg';
import { backgroundStyle } from '../../utils/styles/backgroundStyle';

const HeroBanner = () => {
  return (
    <HeroBannerWrapper style={backgroundStyle}>
      <NavBarWrapper>
        <Logo to="/">
          <img src={LogoSVG} alt="DigitalBiz Logo" width="140px" height="40px" loading="lazy" />
        </Logo>
        <NavBarContainer>
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={index} to={item.to}>
              {item.label}
            </NavItem>
          ))}
        </NavBarContainer>
      </NavBarWrapper>
      <HeroContent>
        <TextWrapper>
          <HeroHeadline>
            I merge tech and business<br /> for impactful solutions
          </HeroHeadline>
          <p>Let&apos;s turn your ideas into strategic digital success.</p>
          <CTAButton
            href="https://calendly.com/sergio-esteban/reunion"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s Connect
          </CTAButton>
        </TextWrapper>
        <SocialIcons>
          {/* Add social media icons and links here */}
        </SocialIcons>
      </HeroContent>
    </HeroBannerWrapper>
  );
}

export default HeroBanner;
