import React from 'react'
import { HeroBannerWrapper, ProfileImage, TextWrapper, ImageContainer,  HeroContent, HeroHeadline, CTAButton } from './HeroBanner.styles'

const HeroBanner = () => {
 return (
    <HeroBannerWrapper>
      <HeroContent>
        <TextWrapper>
          <HeroHeadline>Unleash Innovation with Digital Solutions</HeroHeadline>
          <p>Crafting Code, Building Success</p>
          <CTAButton href="https://calendly.com/sergio-esteban/reunion" target="_blank" rel="noopener noreferrer">
              Get Digital Advantage
          </CTAButton>
        </TextWrapper>
      </HeroContent>
      <ImageContainer>
        <ProfileImage src={require('../../images/hero.png')} alt="Hero background" />
      </ImageContainer>
    </HeroBannerWrapper>
  );
}

export default HeroBanner