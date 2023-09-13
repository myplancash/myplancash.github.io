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

export const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

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
