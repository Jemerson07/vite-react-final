import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 100px 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 60px;
`;

const SkillCard = styled(motion.div)`
  padding: 32px;
  border-radius: 24px;
  background: rgba(137, 207, 240, 0.03);
  border: 1px solid rgba(137, 207, 240, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

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

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 12px;
    color: var(--baby-blue);
  }

  p {
    font-size: 1rem;
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: auto;
  }

  .tag {
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 50px;
    background: rgba(137, 207, 240, 0.1);
    color: var(--baby-blue);
    border: 1px solid rgba(137, 207, 240, 0.2);
  }
`;

const Skills = () => {
  const skillsData = [
    {
      icon: "🤖",
      title: "IA & Automação Real",
      description: "Implementação estratégica de IA e automação cognitiva focada em resultados práticos e redução de erros operacionais.",
      tags: ["Python", "IA Estruturada", "Automação em Tempo Real"]
    },
    {
      icon: "📊",
      title: "BI & Data Analytics",
      description: "Transformação de dados operacionais em indicadores estratégicos (KPIs) para suporte à decisão executiva.",
      tags: ["Power BI", "SQL", "Pandas", "DDS"]
    },
    {
      icon: "⚙️",
      title: "Eficiência Operacional",
      description: "Otimização de processos complexos, gestão de frotas e identificação de gargalos produtivos.",
      tags: ["Gestão de Frotas", "KPIs", "ROI", "Auditoria"]
    },
    {
      icon: "🎤",
      title: "Apresentação & Interação",
      description: "Técnicas avançadas de apresentação técnica (DDS) e demonstração prática de soluções para diversos públicos.",
      tags: ["Comunicação Técnica", "DDS", "Execução Prática"]
    },
    {
      icon: "☁️",
      title: "Cloud & Networking",
      description: "Conhecimento sólido em infraestrutura de nuvem e redes através de certificações de elite.",
      tags: ["AWS Academy", "Cisco Academy", "Networking"]
    },
    {
      icon: "🔒",
      title: "Segurança & Compliance",
      description: "Garantia da integridade de dados e conformidade técnica em ambientes corporativos críticos.",
      tags: ["Cisco Security", "Compliance", "Auditoria Técnica"]
    }
  ];

  return (
    <SkillsSection id="skills">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Especialidades & <br /> Habilidades Técnicas
      </motion.h2>
      
      <Grid>
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="icon">{skill.icon}</span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tags">
              {skill.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </SkillCard>
        ))}
      </Grid>
    </SkillsSection>
  );
};

export default Skills;
