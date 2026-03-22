import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  const skills = [
    { name: "Inteligência Artificial & Machine Learning", level: "Especialista", icon: "🤖" },
    { name: "Análise de Dados & Business Intelligence", level: "Especialista", icon: "📊" },
    { name: "Automação de Processos (RPA)", level: "Avançado", icon: "⚙️" },
    { name: "Cloud Computing (AWS)", level: "Intermediário", icon: "☁️" },
    { name: "Cybersecurity Essentials", level: "Intermediário", icon: "🔒" },
    { name: "Desenvolvimento de Sistemas (ADS)", level: "Avançado", icon: "💻" },
    { name: "Auditorias Avançadas & Compliance", level: "Especialista", icon: "✅" },
    { name: "Gestão de Performance & KPIs", level: "Especialista", icon: "📈" },
  ];

  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Habilidades & Expertise
      </motion.h2>

      <motion.div
        className="grid-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
              {skill.icon}
            </div>
            <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>
              {skill.name}
            </h3>
            <span className="badge badge-success">{skill.level}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
