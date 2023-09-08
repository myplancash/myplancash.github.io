import React from 'react';
import {
  Section,
  ContentWrapper,
  TextWrapper,
  Heading,
  Subheading,
  Introduction,
  ImageContainer, // Import the ImageContainer component
  ProfileImage, // Import the P
  Icon,
  Quote,
  CTAButton,
  Resume
} from './AboutMe.styles';
import TechnologyLogos from '../TechnologyLogos/TechnologyLogos';


const AboutMe = () => {

   const technologyLogos = [
    require('../../assets/images/nodejs.png'),
    require('../../assets/images/react.png'),   
    require('../../assets/images/redux.png'),
    require('../../assets/images/typescript.png'),
    require('../../assets/images/javascript.png'), 
  ];

  return (
    <Section id="about">
      <ContentWrapper>
        <ImageContainer>
          <ProfileImage src={require('../../assets/images/profile.png')} alt="Profile" />
        </ImageContainer>
        <TextWrapper>
          <Heading>Greetings, I'm Sergio Esteban</Heading>
          <Subheading>
            <Icon>🚀</Icon> Bridging Technology and Business Strategy
          </Subheading>
          <Introduction>
            Welcome! I'm Sergio Esteban, a dedicated full-stack software developer with a background in business administration. With a passion for crafting innovative digital solutions, I bring over 4 years of expertise in seamlessly merging the worlds of technology and business. I believe in creating elegant, user-centric applications that drive meaningful results and transform ideas into reality.
            <br/>You can view my resume <Resume href="https://drive.google.com/file/d/1QPj7EKJYmcwFGAl4Q6yJBlviruaL3ros/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</Resume>.
          </Introduction>
          <TechnologyLogos logos={technologyLogos} />
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
