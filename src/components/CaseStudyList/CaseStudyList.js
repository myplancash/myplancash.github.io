import React from 'react';
import CaseStudy from '../CaseStudy/CaseStudy';
import {CaseStudyListContainer, CaseStudyWrapper} from './CaseStudyList.styles'

const CaseStudyList = () => {
  return (
    <CaseStudyListContainer> 
      <h1>Previous Experiences:</h1>
      <CaseStudyWrapper>
      <CaseStudy
        title="Self-Improvement Blog with Hygraph CMS"
        description="I created a user-friendly self-improvement blog using Hygraph CMS and React.js. We made the website faster by 150% while tracking how well it was doing with some important goals."
      />
      <CaseStudy
        title="Indicator Dashboard at Robo-Advisory Firm"
        description="I built a helpful dashboard for our robot advisory service for regular investors. It's like a control panel made with JavaScript and React. We listened to users and fixed their main issues, making everyone really happy with the updates!"
      />
      </CaseStudyWrapper>
    </CaseStudyListContainer>
  );
};

export default CaseStudyList;
