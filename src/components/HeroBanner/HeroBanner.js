import React from 'react'
import { HeroBannerWrapper, ProfileImage, TextWrapper, ImageContainer, HeroContent, HeroHeadline, CTAButton, SvgBackground } from './HeroBanner.styles';

import svgBackground from '../../assets/hero.svg';


const HeroBanner = () => {
 return (
    <HeroBannerWrapper>
      <HeroContent>
        <TextWrapper>
          <HeroHeadline>I merge tech and business for impactful solutions</HeroHeadline>
          <p>Let's turn your ideas into strategic digital success.</p>
          <CTAButton href="https://calendly.com/sergio-esteban/reunion" target="_blank" rel="noopener noreferrer">
            Let's Connect
          </CTAButton>
        </TextWrapper>
      </HeroContent>
    </HeroBannerWrapper>
  );
}

export default HeroBanner