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

export default function Contact() {
  const contactChannels = [
    {
      icon: "📧",
      title: "Email",
      value: "jemerson456l@gmail.com",
      link: "mailto:jemerson456l@gmail.com",
      description: "Para propostas formais e projetos",
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "Jemerson Santos",
      link: "https://www.linkedin.com/in/jemerson-santos",
      description: "Conecte-se comigo profissionalmente",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+55 81 98533-2616",
      link: "https://wa.me/5581985332616",
      description: "Para conversas rápidas e diretas",
    },
  ];

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Vamos Trabalhar Juntos
      </motion.h2>

      <motion.p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          marginBottom: "60px",
          maxWidth: "700px",
          margin: "20px auto 60px",
          lineHeight: "1.6",
          opacity: 0.8,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Pronto para transformar seu negócio? Escolha o canal que preferir e vamos conversar sobre como gerar impacto real.
      </motion.p>

      {/* Canais de Contato */}
      <motion.div
        className="grid-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginBottom: "80px" }}
      >
        {contactChannels.map((channel, i) => (
          <motion.a
            key={i}
            href={channel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            style={{ textDecoration: "none", display: "block", cursor: "pointer" }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
              {channel.icon}
            </div>
            <h3 style={{ marginBottom: "8px", fontSize: "1.2rem" }}>
              {channel.title}
            </h3>
            <p style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
              {channel.value}
            </p>
            <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
              {channel.description}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Informações de Disponibilidade */}
      <motion.div
        style={{
          padding: "50px",
          borderRadius: "16px",
          background: "linear-gradient(135deg, rgba(10, 132, 255, 0.1), rgba(52, 211, 153, 0.1))",
          border: "1px solid rgba(10, 132, 255, 0.2)",
          textAlign: "center",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
          ⚡ Disponibilidade & Tempo de Resposta
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginBottom: "30px",
          }}
        >
          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>
              🚀 Modelo PJ
            </p>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              Disponível para contratos de prestação de serviços com flexibilidade de horários e demanda variável.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>
              🎯 Projetos Estratégicos
            </p>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              Consultoria focada em resultados com escopo definido, prazo determinado e ROI garantido.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "10px" }}>
              ⏱️ Demanda Pontual
            </p>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>
              Suporte técnico e consultoria de curto prazo sem compromisso de longo prazo.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            paddingTop: "30px",
            borderTop: "1px solid rgba(10, 132, 255, 0.2)",
          }}
        >
          <div>
            <p style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>
              ✉️ Tempo de Resposta
            </p>
            <p style={{ fontSize: "1.2rem", fontWeight: 900, color: "#34d399" }}>
              Até 24 horas
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>
              📞 Reunião Inicial
            </p>
            <p style={{ fontSize: "1.2rem", fontWeight: 900, color: "#34d399" }}>
              Sem custo
            </p>
          </div>

          <div>
            <p style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "8px" }}>
              🎯 Foco Principal
            </p>
            <p style={{ fontSize: "1.2rem", fontWeight: 900, color: "#34d399" }}>
              Impacto & ROI
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Final */}
      <motion.div
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p style={{ fontSize: "1.1rem", marginBottom: "20px", opacity: 0.9 }}>
          Pronto para começar? Envie uma mensagem agora mesmo.
        </p>
        <motion.a
          href="mailto:jemerson456l@gmail.com"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-block",
            padding: "16px 40px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #0a84ff 0%, #34d399 100%)",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0 20px 40px rgba(10, 132, 255, 0.3)",
          }}
        >
          Iniciar Conversa
        </motion.a>
      </motion.div>
    </section>
  );
}
