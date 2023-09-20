import React from 'react'
import { CaseStudyContainer, Title, Description} from './CaseStudy.styles'

const CaseStudy = ({title, description}) => {
  return (
    <CaseStudyContainer className='case-study'>
      <Title>{title}</Title>
      <Description>{ description }</Description>
    </CaseStudyContainer>
  )
}

export default CaseStudy;