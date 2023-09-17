import React from 'react';
import { Section, Heading, SkillList, SkillItem, Icon, Img, SkillLabel, SkillCategory, SkillProficiency } from './Skills.styles';
import { motion } from 'framer-motion';

// Import your skill logos here

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      category: 'Front-end Development',
      proficiency: 'Intermediate',
      logo: require('../../assets/images/javascript.png'),
    },
    {
      name: 'React',
      category: 'Front-end Development',
      proficiency: 'Advanced',
      logo: require('../../assets/images/react.png'),
    },
    {
      name: 'Node.js',
      category: 'Back-end Development',
      proficiency: 'Intermediate',
      logo: require('../../assets/images/nodejs.png'),
    },
    {
      name: 'Redux',
      category: 'Front-end Development',
      proficiency: 'Intermediate',
      logo: require('../../assets/images/redux.png'),
    },
    {
      name: 'Firebase',
      category: 'Back-end Development',
      proficiency: 'Intermediate',
      logo: require('../../assets/images/firebase.png'),
    },
    {
      name: 'PostgreSQL',
      category: 'Back-end Development',
      proficiency: 'Advanced',
      logo: require('../../assets/images/postgresql.png'),
    },
    {
      name: 'Jest',
      category: 'Front-end Testing',
      proficiency: 'Advanced',
      logo: require('../../assets/images/jest.png'),
    },
    {
      name: 'typescript',
      category: 'Front-end Development',
      proficiency: 'Advanced',
      logo: require('../../assets/images/typescript.png'),
    },
    // Add more skills as needed
  ];

  return (
    <Section id="skills">
      <Heading>Skills</Heading>
      <SkillList>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillItem>
              <Icon>
                <Img src={skill.logo} alt={`${skill.name} Logo`} />
              </Icon>
              <SkillLabel>{skill.name}</SkillLabel>
              <SkillCategory>{skill.category}</SkillCategory>
              <SkillProficiency>{skill.proficiency}</SkillProficiency>
            </SkillItem>
          </motion.div>
        ))}
      </SkillList>
    </Section>
  );
};

export default Skills;
