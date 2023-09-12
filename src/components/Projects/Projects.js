import React from 'react';
import { Section, Heading, ProjectList, ProjectItem, ProjectImage, ProjectDescription, GitHubLink } from './Projects.styles';

const Projects = () => {
  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <ProjectList>
        <ProjectItem className='item1'>
          <ProjectDescription>
            <h3>House Marketplace</h3>
            <p>People can come and register, they can list their homes for rent for sale with a special offer.
              <span><br/>Check out the repo<a href="https://github.com/myplancash/house-marketplace">here</a></span>
            </p>
            <GitHubLink href="https://house-marketplace-myplancash.vercel.app">Live Demo</GitHubLink>
          </ProjectDescription>
          <ProjectImage src={require('../../assets/images/house-marketplace.png')} alt="Marketplace Listing Houses" />
        </ProjectItem>
        <ProjectItem className='item2'>
          <ProjectDescription>
            <h3>Balanced scorecard for Entrepreneurs</h3>
            <p>An API to serve data to a unique management application for today's most accomplished (evil) entrepreneurs.
              <span><br/>Check out the repo <a href="https://github.com/myplancash/boss-machine">here</a></span>
            </p>
            <GitHubLink href="https://zesty-pavlova-a53f99.netlify.app/#/">Live Demo</GitHubLink>
          </ProjectDescription>
          <ProjectImage src={require('../../assets/images/boss-machine.png')} alt="Initial view of Boss machine app" />
        </ProjectItem>
        <ProjectItem className='item3'>
          <ProjectDescription>
            <h3>E-commerce retail store built with react and styled-components</h3>
            <p>Discover a world of seamless shopping with our cutting-edge E-commerce app built using React.
              <span><br/>Check out the repo <a href="https://github.com/myplancash/esther-clothing">here</a></span>
            </p>
            <GitHubLink href="https://esther-clothing.vercel.app">GitHub Repo</GitHubLink>
          </ProjectDescription>
          <ProjectImage src={require('../../assets/images/e-commerce.png')} alt="Initial view of E-commerce app" />
        </ProjectItem>
        <ProjectItem className='item4'>
          <ProjectDescription>
            <h3>A simple currency exchange calculator built to demonstrate the use of redux along with react hooks.</h3>
            <p>"Discover the Power of Redux and React Hooks with Our Currency Exchange Calculator!", 
              <span><br/>Check out the repo <a href="https://github.com/myplancash/currency-rates">here</a></span>
            </p>
            <GitHubLink href="https://coruscating-croissant-fbd49b.netlify.app">Live Demo</GitHubLink>
          </ProjectDescription>
          <ProjectImage src={require('../../assets/images/currency.png')} alt="Initial view of Currency Rates app" />
        </ProjectItem>
        <ProjectItem className='item5'>
          <ProjectDescription>
            <h3>A simple currency exchange calculator built to demonstrate the use of redux along with react hooks.</h3>
            <p>"Discover the Power of Redux and React Hooks with Our Currency Exchange Calculator!", 
              <span><br/>Check out the repo <a href="https://github.com/myplancash/currency-rates">here</a></span>
            </p>
            <GitHubLink href="https://coruscating-croissant-fbd49b.netlify.app">Live Demo</GitHubLink>
          </ProjectDescription>
          <ProjectImage src={require('../../assets/images/currency.png')} alt="Initial view of Currency Rates app" />
        </ProjectItem>   
      </ProjectList>
    </Section>
  );
}

export default Projects;
