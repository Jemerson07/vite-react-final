import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 24px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled(motion.div)`
  h3 {
    font-size: 2.5rem;
    margin-bottom: 24px;
    color: var(--baby-blue);
    line-height: 1.2;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.125rem;
    opacity: 0.85;
    line-height: 1.8;
  }

  strong {
    color: var(--baby-blue);
    font-weight: 700;
  }

  .badges {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 32px;
  }

  .badge {
    padding: 8px 16px;
    border-radius: 50px;
    background: rgba(137, 207, 240, 0.1);
    border: 1px solid rgba(137, 207, 240, 0.2);
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--baby-blue);
  }
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ExperienceItem = styled(motion.div)`
  padding: 30px;
  border-radius: 20px;
  background: rgba(137, 207, 240, 0.03);
  border: 1px solid rgba(137, 207, 240, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(137, 207, 240, 0.06);
    border-color: rgba(137, 207, 240, 0.3);
    transform: translateX(10px);
  }
  
  h4 {
    font-size: 1.3rem;
    font-weight: 800;
    margin-bottom: 6px;
  }
  
  .company {
    font-size: 1rem;
    font-weight: 700;
    color: var(--baby-blue);
    margin-bottom: 12px;
    display: block;
  }
  
  .desc {
    font-size: 0.95rem;
    opacity: 0.8;
    line-height: 1.6;
  }
`;

const AvailabilityCard = styled(motion.div)`
  margin-top: 80px;
  padding: 40px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(137, 207, 240, 0.1), rgba(0, 71, 171, 0.1));
  border: 1px solid rgba(137, 207, 240, 0.2);
  text-align: center;

  h3 {
    margin-bottom: 16px;
    font-size: 1.8rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .item h5 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 8px;
    color: var(--baby-blue);
  }

  .item p {
    font-size: 0.95rem;
    opacity: 0.8;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Quem Sou
      </motion.h2>
      
      <Content>
        <TextBlock
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Especialista em <br /> Inteligência Operacional</h3>
          <p>
           Foi nesse ambiente que desenvolvi uma visão orientada à performance, unindo operações, tecnologia e análise de dados para transformar desafios complexos em resultados concretos.
          </p>
          <p>
            Na LM Mobilidade, gerenciei iniciativas que elevaram indicadores de controle operacional de 0,7% para mais de 90%, impactando mais de 5.000 usuários e aumentando significativamente a rastreabilidade dos processos.
            Também identifiquei aproximadamente R$100 mil em custos não faturados através da análise de contratos, automação de validações e construção de indicadores estratégicos.
          </p>
          <p>
           Hoje utilizo Business Intelligence, Automação e Inteligência Artificial não apenas para criar dashboards ou sistemas, mas para gerar eficiência,
            reduzir desperdícios e oferecer aos gestores a visibilidade necessária para tomar decisões mais rápidas e assertivas.
            Meu trabalho começa entendendo operações e termina entregando resultado.
          </p>
          <div className="badges">
            <span className="badge">INTELIGÊNCIA OPERACIONAL</span>
            <span className="badge">Business Intelligence</span>
            <span className="badge">AUTOMAÇÃO DE PROCESSOS</span>
            <span className="badge">FROTAS & TELEMETRIA</span>
          </div>
        </TextBlock>

        <ExperienceList>
          <ExperienceItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Inteligência Operacional</h4>
            <span className="company">LM Mobilidade</span>
            <p className="desc">
             Estruturação de indicadores, processos e controles para aumentar eficiência, rastreabilidade e governança operacional.
              
            </p>
          </ExperienceItem>

          <ExperienceItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4>Analytics & Business Intelligence</h4>
            <span className="company">LM Mobilidade</span>
            <p className="desc">
              Criação de dashboards, análises e KPIs que apoiam decisões estratégicas e permitem gestão baseada em dados.
            
            </p>
          </ExperienceItem>

          <ExperienceItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4>Automação & Tecnologia</h4>
            <span className="company">Projetos Estratégicos</span>
            <p className="desc">
              Desenvolvimento de automações e soluções tecnológicas para eliminar atividades repetitivas, reduzir erros e aumentar produtividade.
            
            </p>
          </ExperienceItem>
        </ExperienceList>
      </Content>

      <AvailabilityCard
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3>💼 Disponibilidade & Modelos de Trabalho</h3>
        <p>Trabalho com <strong>Modelo PJ</strong>, <strong>Projetos Estratégicos</strong> e <strong>Consultoria de Soluções em TI</strong>. Foco total em gerar resultado real para sua operação.</p>
        <div className="grid">
          <div className="item">
            <h5>⚡ Resposta</h5>
            <p>Imediata</p>
          </div>
          <div className="item">
            <h5>🎯 Foco</h5>
            <p>Execução & ROI</p>
          </div>
          <div className="item">
            <h5>📊 Metodologia</h5>
            <p>Data-Driven</p>
          </div>
        </div>
      </AvailabilityCard>
    </AboutSection>
  );
};

export default About;
