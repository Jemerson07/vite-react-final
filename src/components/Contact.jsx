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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Contact() {
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

      <motion.div
        className="glass"
        style={{ maxWidth: "900px", margin: "0 auto" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
            🚀 Disponibilidade & Modelo de Trabalho
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            <div style={{ padding: "20px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.3)" }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>✅ Modelo PJ</p>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Disponível para contratos PJ com flexibilidade de horários e demanda
              </p>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", background: "rgba(251, 146, 60, 0.1)", border: "1px solid rgba(251, 146, 60, 0.3)" }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>📊 Projetos Estratégicos</p>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Consultoria em IA, automação e transformação digital
              </p>
            </div>
            <div style={{ padding: "20px", borderRadius: "12px", background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.3)" }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px" }}>⏱️ Demanda Pontual</p>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Disponível para projetos específicos e consultoria de curto prazo
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} style={{ marginBottom: "40px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
            💼 Canais de Contato
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
            <a
              href="mailto:jemerson456l@gmail.com"
              style={{
                padding: "20px",
                borderRadius: "12px",
                textDecoration: "none",
                background: "rgba(10, 132, 255, 0.1)",
                border: "1px solid rgba(10, 132, 255, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(10, 132, 255, 0.2)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(10, 132, 255, 0.1)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
                📧 Email
              </p>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                jemerson456l@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/jemerson-santos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "20px",
                borderRadius: "12px",
                textDecoration: "none",
                background: "rgba(10, 132, 255, 0.1)",
                border: "1px solid rgba(10, 132, 255, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(10, 132, 255, 0.2)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(10, 132, 255, 0.1)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
                🔗 LinkedIn
              </p>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Jemerson Santos
              </p>
            </a>

            <a
              href="https://wa.me/5581985332616"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "20px",
                borderRadius: "12px",
                textDecoration: "none",
                background: "rgba(52, 211, 153, 0.1)",
                border: "1px solid rgba(52, 211, 153, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(52, 211, 153, 0.2)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(52, 211, 153, 0.1)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
                💬 WhatsApp
              </p>
              <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Enviar Mensagem
              </p>
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} style={{ paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
          <p style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "15px" }}>
            ⚡ Respondo em até 24 horas
          </p>
          <p style={{ opacity: 0.7, lineHeight: "1.6" }}>
            Seja para discutir um projeto estratégico, solicitar consultoria ou explorar oportunidades de parceria,
            estou pronto para contribuir com expertise e impacto mensurável.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
