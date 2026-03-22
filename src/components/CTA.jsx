import { motion } from "framer-motion";

export default function CTA() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="cta"
      style={{
        padding: "120px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, rgba(10, 132, 255, 0.1), rgba(90, 200, 255, 0.05))",
        borderRadius: "20px",
        margin: "80px 40px",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Pronto para Transformar Seu Negócio?
      </motion.h2>

      <motion.p
        style={{
          fontSize: "1.2rem",
          marginBottom: "40px",
          maxWidth: "600px",
          margin: "20px auto 40px",
          lineHeight: "1.6",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Vamos conversar sobre como IA, automação e análise de dados podem impulsionar
        seus resultados e gerar impacto mensurável na sua organização.
      </motion.p>

      <motion.div
        style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button
          className="btn-primary"
          onClick={() => scrollToSection("contact")}
          style={{ fontSize: "1.05rem", padding: "16px 40px" }}
        >
          Solicitar Consultoria
        </button>
        <button
          className="btn-secondary"
          onClick={() => scrollToSection("projects")}
          style={{ fontSize: "1.05rem", padding: "16px 40px" }}
        >
          Ver Projetos
        </button>
      </motion.div>

      <motion.p
        style={{
          marginTop: "40px",
          fontSize: "0.95rem",
          opacity: 0.6,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        ⚡ Resposta em até 24 horas • 💼 Modelo PJ disponível • 📊 Projetos de impacto
      </motion.p>
    </motion.section>
  );
}
