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
      title: "Inteligência Artificial Aplicada à Operação",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      desc:
        "Desenvolvimento de soluções utilizando Inteligência Artificial para padronização de processos, aumento de produtividade e suporte à tomada de decisão em ambientes corporativos.",
      impact: "⚡ Automação Operacional",
      tag: "🤖 IA Aplicada",
      link: "https://www.linkedin.com/posts/jemerson-santos_inteligenciaartificial-automacao-transformacaodigital-ugcPost-7441901618083766272-24s9"
    },
    {
      title: "Inteligência Operacional para Gestão de Frotas",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      desc:
        "Estruturação de controles, indicadores e processos para gestão de manutenção, telemetria, contratos e rastreabilidade de operações de grande escala.",
      impact: "🚛 Fleet Analyticss",
      tag: "📊 Eficiência Operacional",
    },
    {
      title: "Data Analytics & Business Intelligence",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc:
        "Criação de dashboards executivos e indicadores de performance para acompanhamento dos principais resultados da operação e apoio à tomada de decisão.",
      impact: "📊 KPIs Estratégicos",
      tag: "📈 Data-Driven Decisions",
    },
    {
      title: "Automação Inteligente de Processos",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      desc:
        "Desenvolvimento de automações para eliminar tarefas repetitivas, reduzir erros manuais e acelerar fluxos operacionais críticos.",
      impact: "⚙️ Process Automation",
      tag: "🐍 Python & Workflows",
    },
     {
      title: "Recuperação de Custos e Governança Contratual",
      img: "https://images.unsplash.com/photo-1737064265670-445899289c4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc:
        "Análise de contratos e dados operacionais para identificação de custos não faturados, inconsistências operacionais e oportunidades de recuperação financeira.",
      impact: "💰 Cost Recovery",
      tag: "📋 Contract Analytics",
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
        Casos de Impacto
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
