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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Education() {
  const education = [
    {
      title: "Pós-graduação em Inteligência Artificial",
      institution: "Estácio",
      period: "2026–2027",
      status: "Em andamento",
      icon: "🎓",
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "UNOPAR",
      period: "Concluído",
      status: "Certificado",
      icon: "💻",
    },
    {
      title: "AWS Academy — Cloud Foundations",
      institution: "Amazon Web Services",
      period: "Em andamento",
      status: "Certificação",
      icon: "☁️",
    },
    {
      title: "Cisco Networking Academy — Cybersecurity Essentials",
      institution: "Cisco",
      period: "Em andamento",
      status: "Certificação",
      icon: "🔒",
    },
  ];

  return (
    <section id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Formação & Certificações
      </motion.h2>

      <motion.div
        style={{ maxWidth: "800px", margin: "0 auto" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {education.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, x: 8 }}
            style={{ marginBottom: "20px" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
              <div style={{ fontSize: "2.5rem", minWidth: "60px" }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.95rem", marginBottom: "8px" }}>
                  <strong>{item.institution}</strong>
                </p>
                <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                    {item.period}
                  </span>
                  <span className="badge badge-success">{item.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
