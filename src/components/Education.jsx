import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationSection = styled.section`
  padding: 100px 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  margin-top: 60px;
`;

const Card = styled(motion.div)`
  padding: 40px;
  border-radius: 24px;
  background: rgba(137, 207, 240, 0.03);
  border: 1px solid rgba(137, 207, 240, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(137, 207, 240, 0.06);
    border-color: rgba(137, 207, 240, 0.3);
    transform: translateY(-8px);
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    display: block;
  }

  h4 {
    color: var(--baby-blue);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.8;
    margin-bottom: 24px;
  }

  .date {
    font-weight: 600;
    color: var(--baby-blue);
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
      content: '📅';
    }
  }

  .status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 50px;
    background: rgba(137, 207, 240, 0.1);
    color: var(--baby-blue);
    font-size: 0.8rem;
    font-weight: 700;
    margin-left: 12px;
    border: 1px solid rgba(137, 207, 240, 0.2);
  }
`;

const Highlight = styled.span`
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;

const Education = () => {
  const educationData = [
    {
      type: "Pós-Graduação",
      title: "Inteligência Artificial & Machine Learning",
      institution: "Estácio",
      date: "2026 - 2027",
      status: "Em andamento",
      icon: "🎓",
      highlight: true
    },
    {
      type: "Especialização Acadêmica",
      title: "AWS Academy — Cloud Foundations",
      institution: "Amazon Web Services",
      date: "2023 - Presente",
      status: "Em andamento",
      icon: "☁️",
      description: "Foco em Cloud Architecture, Machine Learning e Infraestrutura Escalável."
    },
    {
      type: "Especialização Acadêmica",
      title: "Cisco Academy — Cybersecurity Essentials",
      institution: "Cisco Systems",
      date: "2023 - Presente",
      status: "Em andamento",
      icon: "🔒",
      description: "Domínio de Redes, Segurança da Informação e Infraestrutura Crítica."
    },
    {
      type: "Graduação",
      title: "Análise e Desenvolvimento de Sistemas (ADS)",
      institution: "UNOPAR",
      date: "Concluído",
      status: "Certificado",
      icon: "💻",
      description: "Formação sólida em desenvolvimento de software, arquitetura de sistemas e gestão de dados."
    }
  ];

  return (
    <EducationSection id="education">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Educação & <br /> Especializações
      </motion.h2>
      
      <Grid>
        {educationData.map((item, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="icon">{item.icon}</span>
            <h4>{item.type}</h4>
            <h3>
              {item.highlight ? <Highlight>{item.title}</Highlight> : item.title}
            </h3>
            <p><strong>{item.institution}</strong></p>
            {item.description && <p style={{ fontSize: '0.95rem', marginBottom: '16px' }}>{item.description}</p>}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="date">{item.date}</div>
              <span className="status-badge">{item.status}</span>
            </div>
          </Card>
        ))}
      </Grid>
    </EducationSection>
  );
};

export default Education;
