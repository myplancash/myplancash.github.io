import React from 'react'
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

export default TechnologyLogos;