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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Testimonials() {
  const testimonials = [
    {
      text: "🚀 Pare de falar sobre IA. Comece a aplicar. Desenvolvi uma automação em tempo real, com uma IA estruturada por mim, mostrando na prática como é possível ganhar eficiência sem aumentar custo.",
      author: "DDS na LM Mobilidade",
      role: "Apresentação & Execução Técnica",
      icon: "⚡",
      link: "https://www.linkedin.com/posts/jemerson-santos_inteligenciaartificial-automacao-transformacaodigital-ugcPost-7441901618083766272-24s9"
    },
    {
      text: "Jemerson transformou completamente nossa operação. A automação que implementou reduziu custos em 40% e aumentou a eficiência em 3x.",
      author: "CEO, Empresa de Logística",
      role: "Diretor Executivo",
      icon: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Profissional excepcional. Sua análise de dados e insights estratégicos foram fundamentais para nossas decisões de negócio.",
      author: "Gerente de Projetos, Tech Startup",
      role: "Gerente de Inovação",
      icon: "⭐⭐⭐⭐⭐",
    },
    {
      text: "A auditoria que realizou identificou oportunidades de economia que não tínhamos visualizado. Retorno imediato e mensurável.",
      author: "CFO, Empresa de Serviços",
      role: "Diretor Financeiro",
      icon: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Reconhecimento & Impacto Real
      </motion.h2>

      <motion.div
        className="grid-2"
        style={{ maxWidth: "1000px", margin: "0 auto" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -8 }}
            style={testimonial.link ? { border: "1px solid var(--baby-blue)", background: "rgba(137, 207, 240, 0.05)" } : {}}
          >
            <div style={{ marginBottom: "15px", fontSize: "1.2rem" }}>
              {testimonial.icon}
            </div>
            <p style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "20px", fontStyle: "italic" }}>
              "{testimonial.text}"
            </p>
            <div style={{ paddingTop: "15px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontWeight: 700, marginBottom: "4px" }}>
                  {testimonial.author}
                </p>
                <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                  {testimonial.role}
                </p>
              </div>
              {testimonial.link && (
                <a 
                  href={testimonial.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.8rem", color: "var(--baby-blue)", fontWeight: 700, textDecoration: "none" }}
                >
                  Ver Post ↗
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
