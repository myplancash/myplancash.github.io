import React from 'react'
import { LogoContainer, Logo } from './TechnologyLogos.styles';

const TechnologyLogos = ({ logos }) => {
  return (
    <LogoContainer>
      {logos.map((logo, index) => (
        <Logo key={index} src={logo} alt={`Logo ${index}`} />
      ))}
    </LogoContainer>
  );
};

export default TechnologyLogos;