import styled from 'styled-components';

export const CaseStudyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CaseStudyWrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  width:100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`