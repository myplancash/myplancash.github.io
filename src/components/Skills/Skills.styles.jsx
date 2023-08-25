import styled from 'styled-components';

/* Add these styles to your Skills.styles.css or equivalent */

export const Img = styled.img`
  width: 100px; 
  height: 100px; 
  object-fit: contain;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

export const Section = styled.section`
  padding: 40px 0;
`;


export const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
`;


export const SkillList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 15px;
`;

export const Icon = styled.div`
  margin-right: 10px;
  color: #3498DB;
`;
