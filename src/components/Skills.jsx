import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "Inteligência Artificial & Machine Learning", level: "Avançado" },
    { name: "Análise de Dados & BI", level: "Especialista" },
    { name: "Automação de Processos", level: "Avançado" },
    { name: "Cloud Computing (AWS)", level: "Intermediário" },
    { name: "Cybersecurity Essentials", level: "Intermediário" },
    { name: "Desenvolvimento de Sistemas (ADS)", level: "Avançado" },
    { name: "Auditorias Avançadas", level: "Especialista" },
    { name: "Gestão de Performance & KPIs", level: "Especialista" }
  ];

  return (
    <section>
      <h2>Habilidades</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 style={{ marginBottom: "10px" }}>{skill.name}</h3>
            <p style={{ opacity: 0.7 }}>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
