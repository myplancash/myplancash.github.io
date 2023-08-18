import React from 'react';
import { Section, Heading, SkillList, SkillItem, Icon, Img } from './Skills.styles';
import javascriptLogo from '../../images/javascript.png';
import reactLogo from '../../images/react.png';
import nodeLogo from '../../images/node.png';
import reduxLogo from '../../images/redux.png';
import typescriptLogo from '../../images/typescript.png';
import firebaseLogo from '../../images/firebase.png';

const Skills = () => {
  return (
    <Section id="skills">
      <Heading>Skills</Heading>
      <SkillList>
        <SkillItem>
          <Icon>
            <Img
              src={javascriptLogo}
              alt="JavaScript Logo"
            />
          </Icon>
        </SkillItem>
        <SkillItem>
          <Icon>
            <Img src={reactLogo} alt="React Logo" />
          </Icon>

        </SkillItem>
        <SkillItem>
          <Icon>
            <Img src={nodeLogo} alt="Node Logo" />
          </Icon>
        </SkillItem>
        <SkillItem>
          <Icon>
            <Img src={reduxLogo} alt="React Logo" />
          </Icon>

        </SkillItem>
        <SkillItem>
          <Icon>
            <Img src={typescriptLogo} alt="Typescript Logo" />
          </Icon>
        </SkillItem>
        <SkillItem>
          <Icon>
            <Img src={firebaseLogo} alt="Firebase Logo" />
          </Icon>
        </SkillItem>
      </SkillList>
    </Section>
  );
}

export default Skills;
