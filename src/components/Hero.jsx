import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: radial-gradient(circle at center, rgba(137, 207, 240, 0.15) 0%, transparent 70%);
  padding-top: 120px;
`;

const Badge = styled(motion.div)`
  background: rgba(137, 207, 240, 0.1);
  color: var(--baby-blue);
  padding: 10px 20px;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 32px;
  border: 1px solid rgba(137, 207, 240, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
`;

const Title = styled(motion.h1)`
  font-size: 5.5rem;
  font-weight: 900;
  margin-bottom: 24px;
  letter-spacing: -0.04em;
  line-height: 1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  max-width: 850px;
  margin-bottom: 56px;
  line-height: 1.6;
  opacity: 0.9;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 80px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
  }
`;

const PrimaryButton = styled.a`
  background: var(--gradient-primary);
  color: white;
  padding: 18px 36px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(0, 71, 171, 0.25);
  display: inline-block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 71, 171, 0.35);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: var(--baby-blue);
  padding: 18px 36px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1.1rem;
  border: 1px solid var(--baby-blue);
  display: inline-block;
  
  &:hover {
    background: rgba(137, 207, 240, 0.08);
    transform: translateY(-3px);
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  margin-top: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  padding: 30px;
  border-radius: 20px;
  background: rgba(137, 207, 240, 0.03);
  border: 1px solid rgba(137, 207, 240, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(137, 207, 240, 0.06);
    border-color: rgba(137, 207, 240, 0.2);
    transform: translateY(-5px);
  }
  
  h3 {
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 10px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  p {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
    opacity: 0.8;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Badge
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎓 AWS & Cisco Academy | Pós em IA
      </Badge>
      
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Estrategista em IA, <br /> Dados & Automação
      </Title>
      
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Especialista em transformar processos complexos em soluções inteligentes. 
        Focado em IA, Business Intelligence e Automação para empresas que buscam 
        eficiência operacional e crescimento exponencial.
      </Subtitle>
      
      <ButtonGroup
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <PrimaryButton href="https://wa.me/5571991595758" target="_blank" rel="noopener noreferrer">
          💬 Contato Direto
        </PrimaryButton>
        <SecondaryButton href="#projects">
          Ver Projetos de Impacto
        </SecondaryButton>
      </ButtonGroup>
      
      <StatsContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <StatItem>
          <h3>R$ 400K+</h3>
          <p>Recuperados em Auditorias</p>
        </StatItem>
        <StatItem>
          <h3>50+</h3>
          <p>Automações Criadas</p>
        </StatItem>
        <StatItem>
          <h3>30+</h3>
          <p>Dashboards Estratégicos</p>
        </StatItem>
        <StatItem>
          <h3>6+</h3>
          <p>Anos de Experiência</p>
        </StatItem>
      </StatsContainer>
    </HeroSection>
  );
};

export default Hero;
