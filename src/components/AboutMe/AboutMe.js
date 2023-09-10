import React, { useEffect, useMemo, useState } from 'react';
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

  const [randomQuote, setRandomQuote] = useState('')

  const quotes = useMemo(() => [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Technology empowers people to do what they want to do. It lets people be creative. - Steve Ballmer',
    'We are stuck with technology when what we really want is just stuff that works. - Douglas Adams',
    "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. - Bill Gates",
    'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past. - Tim Berners-Lee!',
    'The good news about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do. - Ted Nelson',
    "it's not a faith in technology. It's faith in people. - Steve Jobs",
    "Technology is anything that wasn't around when you were born. - Alan Kay",
    "The art challenges the technology, and the technology inspires the art. - John Lasseter",
    "The computer was born to solve problems that did not exist before. - Bill Gates",
  ], [])

   const technologyLogos = [
    require('../../assets/images/nodejs.png'),
    require('../../assets/images/react.png'),   
    require('../../assets/images/redux.png'),
    require('../../assets/images/typescript.png'),
    require('../../assets/images/javascript.png'), 
  ];


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setRandomQuote(quotes[randomIndex])
  }, [quotes])

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
            <p>
              Hello! I'm Sergio Esteban, a full-stack software developer with a background in business administration. With over 4 years of experience, I specialize in creating user-centric digital solutions that turn ideas into reality.
              <br/>Check out my resume <Resume href="https://drive.google.com/file/d/1EPTcDsPDbN9iDGPiUNAC4CNTfkZzAouE/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</Resume>.
            </p>
          </Introduction>
          <TechnologyLogos logos={technologyLogos} />
          <Quote>
            "{randomQuote}"
          </Quote>
          <CTAButton href="mailto:sergio.smiling@gmail.com">Let's Collaborate</CTAButton>
        </TextWrapper>
      </ContentWrapper>
    </Section>
  );
}

export default AboutMe;
