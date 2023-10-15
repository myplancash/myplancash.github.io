import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { LogoContainer, Logo } from './TechnologyLogos.styles';

const TechnologyLogos = ({ logos }) => {
  return (
    <LogoContainer>
      {logos.map((logo, index) => (
        <picture key={index}>
          <source
            srcSet={require(`../../assets/images/${logo}-2x.png`)}
            media="(min-resolution: 2dppx)"
          />
          <Logo
            src={require(`../../assets/images/${logo}.png`)}
            alt={`Logo ${index}`}
            loading="lazy"
            width="200"
            height="200"
          />
        </picture>
      ))}
    </LogoContainer>
  );
};

// Define prop type validation for the logos prop as an array
TechnologyLogos.propTypes = {
  logos: PropTypes.array.isRequired, // Ensure 'logos' is a required array prop
};

export default TechnologyLogos;
