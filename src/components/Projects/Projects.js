import React from 'react';
import { Section, Heading, ProjectList, ProjectItem, ProjectImage, ProjectDescription, GitHubLink } from './Projects.styles';

const Projects = () => {
  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <ProjectList>
        <ProjectItem>
          <ProjectImage src={require('../../images/house-marketplace.png')} alt="Marketplace Listing Houses" />
          <ProjectDescription>
            <h3>House Marketplace</h3>
            <p>People can come and register, they can list their homes for rent for sale with a special offer.</p>
            <GitHubLink href="https://github.com/myplancash/house-marketplace">Github Repo</GitHubLink>
          </ProjectDescription>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src={require('../../images/boss-machine.png')} alt="Initial view of Boss machine app" />
          <ProjectDescription>
            <h3>Balanced scorecard for Entrepreneurs</h3>
            <p>An API to serve data to a unique management application for today's most accomplished (evil) entrepreneurs.</p>
            <GitHubLink href="https://github.com/myplancash/boss-machine">GitHub Repo</GitHubLink>
          </ProjectDescription>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage src={require('../../images/e-commerce.png')} alt="Initial view of E-commerce app" />
          <ProjectDescription>
            <h3>E-commerce retail store built with react and styled-components</h3>
            <p>Discover a world of seamless shopping with our cutting-edge E-commerce app built using React.</p>
            <GitHubLink href="https://github.com/myplancash/startup-store">GitHub Repo</GitHubLink>
          </ProjectDescription>
        </ProjectItem>
      </ProjectList>
    </Section>
  );
}

export default Projects;
