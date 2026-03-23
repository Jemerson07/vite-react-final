import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Expertise() {
  const expertiseAreas = [
    {
      title: "Inteligência Artificial & Machine Learning",
      description:
        "Desenvolvimento de modelos preditivos, agentes inteligentes e sistemas de IA aplicados a problemas reais de negócio.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "LLMs"],
      icon: "🤖",
    },
    {
      title: "Business Intelligence & Analytics",
      description:
        "Criação de dashboards estratégicos, análise exploratória de dados e geração de insights para decisão executiva.",
      technologies: ["Power BI", "Tableau", "SQL", "Python"],
      icon: "📊",
    },
    {
      title: "Automação de Processos (RPA)",
      description:
        "Identificação e automação de processos repetitivos, reduzindo custos operacionais e aumentando eficiência.",
      technologies: ["UiPath", "Automation Anywhere", "Python", "VBA"],
      icon: "⚙️",
    },
    {
      title: "Consultoria Estratégica",
      description:
        "Análise de processos, identificação de oportunidades de otimização e roadmap de transformação digital.",
      technologies: ["Metodologia Ágil", "Design Thinking", "Lean", "Six Sigma"],
      icon: "🎯",
    },
    {
      title: "Auditoria & Compliance",
      description:
        "Auditorias técnicas, conformidade regulatória e identificação de riscos e oportunidades de economia.",
      technologies: ["Análise de Risco", "Conformidade", "Documentação", "Relatórios"],
      icon: "✅",
    },
    {
      title: "Cloud & Infraestrutura",
      description:
        "Implementação de soluções em cloud, otimização de custos e arquitetura escalável de sistemas.",
      technologies: ["AWS", "Azure", "GCP", "Docker"],
      icon: "☁️",
    },
    {
      title: "Apresentação & Interação Técnica",
      description:
        "Capacidade de comunicar conceitos complexos de IA e automação para diversos públicos, demonstrando resultados práticos em tempo real.",
      technologies: ["DDS", "Comunicação", "Liderança Técnica", "Apresentação"],
      icon: "🎤",
    },
  ];

  return (
    <section id="expertise">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Áreas de Expertise
      </motion.h2>

      <motion.div
        className="grid-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {expertiseAreas.map((area, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
              {area.icon}
            </div>
            <h3 style={{ marginBottom: "12px", fontSize: "1.2rem" }}>
              {area.title}
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px", opacity: 0.8 }}>
              {area.description}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {area.technologies.map((tech, j) => (
                <span key={j} className="badge" style={{ fontSize: "0.8rem" }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
