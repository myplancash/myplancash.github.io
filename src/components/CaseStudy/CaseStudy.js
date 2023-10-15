import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { CaseStudyContainer, Title, Description } from './CaseStudy.styles';

const CaseStudy = ({ title, description }) => {
  return (
    <CaseStudyContainer className="case-study">
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CaseStudyContainer>
  );
};

// Define prop type validation for the title and description props
CaseStudy.propTypes = {
  title: PropTypes.string.isRequired, // Ensure 'title' is a required string prop
  description: PropTypes.string.isRequired, // Ensure 'description' is a required string prop
};

export default CaseStudy;
