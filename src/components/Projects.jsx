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
      title: "Automação de IA em Tempo Real",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      desc:
        "Desenvolvimento e execução de uma IA estruturada para otimização de processos, apresentada em DDS na LM Mobilidade.",
      impact: "Eficiência Imediata",
      tag: "IA & Automação",
      link: "https://www.linkedin.com/posts/jemerson-santos_inteligenciaartificial-automacao-transformacaodigital-ugcPost-7441901618083766272-24s9"
    },
    {
      title: "Gestão Estratégica de Frotas",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      desc:
        "Otimização de fluxos operacionais e implementação de sistemas de rastreabilidade para frotas de grande escala.",
      impact: "Redução de Custos",
      tag: "Operações",
    },
    {
      title: "Dashboards de Business Intelligence",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc:
        "Criação de painéis estratégicos em Power BI para suporte à decisão executiva e monitoramento de KPIs.",
      impact: "Decisões Data-Driven",
      tag: "BI",
    },
    {
      title: "Automação de Processos com Python",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      desc:
        "Desenvolvimento de scripts e robôs para automação de tarefas repetitivas e integração de sistemas.",
      impact: "50+ Automações",
      tag: "Python",
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
        Projetos & Execução
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
            <p style={{ opacity: 0.8, lineHeight: "1.6", marginBottom: "20px" }}>{p.desc}</p>
            {p.link && (
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: "0.9rem", color: "var(--baby-blue)", fontWeight: 700, textDecoration: "none" }}
              >
                Ver Detalhes do Projeto ↗
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
