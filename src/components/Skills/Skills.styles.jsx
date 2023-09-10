import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';

export const Section = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: ${theme.background};
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: ${theme.primary};
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
`;

export const SkillItem = styled(motion.li)`
  display: flex;
  flex: 0 0 calc(33.33% - 1rem);
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  min-width: 3.5em;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

export const Icon = styled.div`
  width: 80px;
  margin: 0 auto 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const SkillLabel = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const SkillCategory = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

export const SkillProficiency = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

// Add any additional styling as needed for your specific design
