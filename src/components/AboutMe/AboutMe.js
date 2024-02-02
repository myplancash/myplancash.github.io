import React, { useEffect, useMemo, useState } from 'react';
import {
  Article,
  Header,
  Main,
  ContentWrapper, // Add ContentWrapper component
  TextWrapper,
  Introduction,
  ImageContainer,
  ProfileImage,
  Icon, // Add Icon component
  Quote,
  PersonalBrandStatement,
} from './AboutMe.styles';
import TechnologyLogos from '../TechnologyLogos/TechnologyLogos';

const AboutMe = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const quotes = useMemo(() => [
    // ...your quotes array
  ], []);

  const technologyLogos = [
    'nodejs',
    'react',
    'redux',
    'typescript',
    'javascript',
    'jest',
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, [quotes]);

  return (
    <Article id="about">
      <Header>
        <h1>Greetings, I&apos;m Sergio Esteban</h1> 
      </Header>
      <Main>
        <ContentWrapper>
          <ImageContainer>
            <ProfileImage
              src={require('../../assets/images/profile.png')}
              alt="Sergio Torres"
              loading="lazy"
              width="200"
              height="200"
            />
          </ImageContainer>
          <TextWrapper>
            <Introduction>
              <p>
                Hello! <Icon>👋🏻</Icon> <br/>
                I&apos;m Sergio Esteban, a dynamic full-stack software
                developer with a unique blend of technical expertise and a
                strong foundation in business administration. With over 4 years
                of hands-on experience, I have honed my skills in crafting
                user-centric digital solutions that not only bring ideas to life
                but also align seamlessly with strategic business objectives.
              </p>
              <PersonalBrandStatement>
                Check out my resume{' '}
                <a
                  href="https://drive.google.com/file/1EPTcDsPDbN9iDGPiUNAC4CNTfkZzAouE/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>{' '}
                to explore my diverse portfolio of successful projects and see
                how I can help you transform your digital vision into a
                strategic reality.
              </PersonalBrandStatement>
            </Introduction>
            <TechnologyLogos logos={technologyLogos} />
            <Quote>{randomQuote}</Quote>
            {/* <CTAButton to="mailto:sergio.smiling@gmail.com">
              Let&apos;s Collaborate
            </CTAButton> */}
          </TextWrapper>
        </ContentWrapper>
      </Main>
    </Article>
  );
};

export default AboutMe;
