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

export default function Services() {
  const services = [
    {
      title: "IA e Automação Inteligente",
      img: "https://images.unsplash.com/photo-1634382812645-fd2272c38ab5",
      desc: "Desenvolvimento de agentes de IA, automação de fluxos operacionais e sistemas inteligentes para máxima eficiência.",
      benefits: ["Redução de 70% em tempo operacional", "Automação de processos repetitivos", "Escalabilidade garantida"],
    },
    {
      title: "Estratégia & Inovação Corporativa",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      desc: "Consultoria em inovação, transformação digital e implementação de tecnologias disruptivas para crescimento exponencial.",
      benefits: ["Roadmap estratégico personalizado", "Implementação de tecnologias inovadoras", "ROI mensurável"],
    },
    {
      title: "Business Intelligence & Analytics",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      desc: "Dashboards avançados, análise de dados em tempo real e insights estratégicos para decisão executiva.",
      benefits: ["Visualização de dados complexos", "Decisões baseadas em dados", "Relatórios automáticos"],
    },
    {
      title: "Auditoria & Compliance Avançada",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc: "Auditorias técnicas, conformidade regulatória e identificação de oportunidades de economia e otimização.",
      benefits: ["Recuperação de recursos", "Conformidade garantida", "Risco minimizado"],
    },
  ];

  return (
    <section id="services">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Serviços Especializados
      </motion.h2>

      <motion.div
        className="grid-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <img
              src={`${s.img}?auto=format&fit=crop&w=1000&q=80`}
              alt={s.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ marginBottom: "12px" }}>{s.title}</h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6", marginBottom: "20px" }}>
              {s.desc}
            </p>
            <div style={{ marginTop: "15px", paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "8px" }}>
                Benefícios:
              </p>
              <ul style={{ fontSize: "0.9rem", lineHeight: "1.8", listStyle: "none", paddingLeft: 0 }}>
                {s.benefits.map((benefit, j) => (
                  <li key={j} style={{ marginBottom: "6px" }}>
                    ✓ {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
