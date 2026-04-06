import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 100px 24px;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 40px;
  border-radius: 40px;
  background: rgba(137, 207, 240, 0.03);
  border: 1px solid rgba(137, 207, 240, 0.1);
  backdrop-filter: blur(20px);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 24px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  margin-bottom: 60px;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 40px;
`;

const ContactCard = styled(motion.a)`
  padding: 40px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(137, 207, 240, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: rgba(137, 207, 240, 0.08);
    border-color: rgba(137, 207, 240, 0.3);
    transform: translateY(-8px);
  }

  .icon {
    font-size: 3.5rem;
    color: var(--baby-blue);
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 800;
    margin-bottom: 4px;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.8;
  }

  .action-text {
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--baby-blue);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 10px;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title>Vamos Iniciar um <br /> Projeto de Impacto?</Title>
          <Description>
            Estou disponível para consultorias estratégicas, automação inteligente e contratos PJ. 
            Escolha o canal que preferir e vamos transformar seu negócio.
          </Description>
        </motion.div>

        <ContactGrid>
          <ContactCard 
            href="https://wa.me/5571991595758" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="icon">💬</span>
            <h4>WhatsApp</h4>
            <p>+55 71 99159-5758</p>
            <span className="action-text">Enviar Mensagem</span>
          </ContactCard>

          <ContactCard 
            href="https://www.linkedin.com/in/jemerson-santos/" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="icon">🔗</span>
            <h4>LinkedIn</h4>
            <p>Jemerson Santos</p>
            <span className="action-text">Conectar Profissionalmente</span>
          </ContactCard>

          <ContactCard 
            href="mailto:jemerson456l@gmail.com" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="icon">✉️</span>
            <h4>E-mail</h4>
            <p>jemerson456l@gmail.com</p>
            <span className="action-text">Enviar Proposta</span>
          </ContactCard>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
