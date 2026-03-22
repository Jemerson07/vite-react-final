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

export default function Projects() {
  const projects = [
    {
      title: "Recuperação de R$ 400.000",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc:
        "Auditoria avançada em contrato público com 987 veículos, automação de cálculos e relatórios técnicos.",
      impact: "R$ 400K recuperados",
      tag: "Auditoria",
    },
    {
      title: "Operação Nacional — 5.000 condutores",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      desc:
        "Elevação do controle de 0,7% para 82% com rastreabilidade, padronização e automações via CRM.",
      impact: "82% de eficiência",
      tag: "Operações",
    },
    {
      title: "Agentes Inteligentes com IA",
      img: "https://images.unsplash.com/photo-1634382812645-fd2272c38ab5",
      desc:
        "Criação de agentes com IA para leitura, classificação, auditoria e suporte operacional automatizado.",
      impact: "50+ automações",
      tag: "IA",
    },
    {
      title: "Dashboards Estratégicos",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      desc:
        "Painéis completos em BI para telemetria, manutenção, indicadores e decisão executiva em tempo real.",
      impact: "30+ dashboards",
      tag: "BI",
    },
  ];

  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projetos de Impacto
      </motion.h2>

      <motion.div
        className="grid-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <img
              src={`${p.img}?auto=format&fit=crop&w=1000&q=80`}
              alt={p.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            />
            <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
              <span className="badge">{p.tag}</span>
              <span className="badge badge-success">{p.impact}</span>
            </div>
            <h3 style={{ marginBottom: "12px" }}>{p.title}</h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
