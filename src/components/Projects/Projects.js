import React from 'react';
import {
  Section,
  Heading,
  ProjectList,
  ProjectItem,
  ProjectDescription,
  GitHubLink,
  ProjectImage
} from './Projects.styles';

const projectsData = [
  {
    title: 'E-commerce retail store',
    class: 'item1',
    description: 'Discover a world of seamless shopping with our cutting-edge E-commerce app.',
    repoLink: 'https://github.com/myplancash/my-space-jelly-gear',
    liveDemoLink: 'https://my-space-jelly-gear-sigma.vercel.app',
    image: require('../../assets/images/project1-thumb.png'),
  },
  {
    title: 'House Marketplace',
    class: 'item2',
    description: "People can register, list their homes for rent or sale",
    repoLink: 'https://github.com/myplancash/house-marketplace',
    liveDemoLink: 'https://house-marketplace-myplancash.vercel.app',
    image: require('../../assets/images/project2-thumb.png'),
  },
  {
    title: 'Balanced scorecard for Entrepreneurs',
    class: 'item3',
    description: "An API to serve data to a unique management application for today's entrepreneurs.",
    repoLink: 'https://github.com/myplancash/boss-machine',
    liveDemoLink: 'https://zesty-pavlova-a53f99.netlify.app/#/',
    image: require('../../assets/images/project3-thumb.png'),
  },
  {
    title: 'Currency Exchange Calculator',
    class: 'item4',
    description: "Discover the Power of Redux and React Hooks.",
    repoLink: 'https://github.com/myplancash/currency-rates',
    liveDemoLink: 'https://coruscating-croissant-fbd49b.netlify.app',
    image: require('../../assets/images/project4-thumb.png'),
  },
  {
    title: 'Accessible Audio Player',
    class: 'item5',
    description: "Learn how to harness the power of HTML's Media Element within the React framework",
    repoLink: 'https://github.com/myplancash/accessible-audio-player',
    liveDemoLink: 'https://polite-arithmetic-e607b0.netlify.app',
    image: require('../../assets/images/project5-thumb.png'),
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <Heading>Projects</Heading>
      <ProjectList>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} className={project.class} /* style={{ backgroundImage: `url(${project.image})` }} */>
            <ProjectDescription>
              <h3>{project.title}</h3>
              <p>{project.description}<span><br />Check out the repo <a href={project.repoLink} target="_blank" rel="noopener noreferrer">here</a></span></p>
              <GitHubLink href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" >Live Demo</GitHubLink>
            </ProjectDescription>
            <ProjectImage src={project.image} alt={project.title} />
          </ProjectItem>
        ))}
      </ProjectList>
    </Section>
  );
}

export default Projects;
