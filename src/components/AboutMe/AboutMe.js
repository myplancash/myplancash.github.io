import React, { useEffect, useMemo, useState } from 'react';
import {
  Section,
  ContentWrapper,
  TextWrapper,
  Introduction,
  ImageContainer,
  Icon,
  ProfileImage,
  Quote,
  CTAButton,
} from './AboutMe.styles';
import TechnologyLogos from '../TechnologyLogos/TechnologyLogos';
import CaseStudyList from '../CaseStudyList/CaseStudyList';


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
    'nodejs',
    'react',
    'redux',
    'typescript',
    'javascript',
    'jest',
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setRandomQuote(quotes[randomIndex])
  }, [quotes])

  return (
    <Section id="about">
      <ContentWrapper>
        <ImageContainer>
          <picture>
            <source
              srcSet={require('../../assets/images/profile-2x.png')}
              media="(min-resolution: 2dppx)"
            />
            <ProfileImage
              src={require('../../assets/images/profile.png')}
              alt="Sergio Torres"
              loading="lazy"
              width="200"
              height="200"
            />  
          </picture>
        </ImageContainer>
        <TextWrapper>
          <h1>Greetings, I&apos;m Sergio Esteban</h1>
          <h2>
            <Icon>🚀</Icon> Bridging Technology and Business Strategy
          </h2>
          <Introduction>
            <p>
              Hello! I&apos;m Sergio Esteban, a dynamic full-stack software developer with a unique blend of technical expertise and a strong foundation in business administration. With over 4 years of hands-on experience, I have honed my skills in crafting user-centric digital solutions that not only bring ideas to life but also align seamlessly with strategic business objectives.<br/>
              <p>
                Check out my resume{' '}
                <a
                  href="https://drive.google.com/file/d/1EPTcDsPDbN9iDGPiUNAC4CNTfkZzAouE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{' '}
                to explore my diverse portfolio of successful projects and see how I can help you transform your digital vision into a strategic reality.
              </p>
            </p>
          </Introduction>
          <CaseStudyList />
          <TechnologyLogos logos={technologyLogos} />
          <Quote>
          </Quote>
          <CTAButton href="mailto:sergio.smiling@gmail.com" >
            Let&apos;s Collaborate
          </CTAButton>
        </TextWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default AboutMe;
