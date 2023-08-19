import React from 'react';
import {
  Section,
  ContentWrapper,
  ImageWrapper,
  TextWrapper,
  Heading,
  Subheading,
  Introduction,
  ImageContainer, // Import the ImageContainer component
  ProfileImage, // Import the P
  Icon,
  Quote,
  CTAButton
} from './AboutMe.styles';

const AboutMe = () => {
  return (
    <Section id="about">
      <ContentWrapper>
        <ImageContainer>
          <ProfileImage src={require('../../images/profile.png')} alt="Profile" />
        </ImageContainer>
        <TextWrapper>
          <Heading>Greetings, I'm Sergio Esteban</Heading>
          <Subheading>
            <Icon>🚀</Icon> Bridging Technology and Business Strategy
          </Subheading>
          <Introduction>
            Welcome! I'm Sergio Esteban, a dedicated full-stack software developer with a background in business administration. With a passion for crafting innovative digital solutions, I bring over 4 years of expertise in seamlessly merging the worlds of technology and business. I believe in creating elegant, user-centric applications that drive meaningful results and transform ideas into reality.
          </Introduction>
          <Quote>
            "The best way to predict the future is to create it." - Abraham Lincoln
          </Quote>
          <CTAButton href="mailto:sergio.smiling@gmail.com">Let's Collaborate</CTAButton>
        </TextWrapper>
      </ContentWrapper>
    </Section>
  );
}

export default AboutMe;
