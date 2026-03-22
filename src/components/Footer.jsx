import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/jemerson-santos" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:jemerson456l@gmail.com">
          Email
        </a>
        <a href="https://wa.me/5581985332616" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>

      <p>
        © {currentYear} Jemerson Santos. Todos os direitos reservados.
      </p>
      <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>
        Portfólio Profissional • Especialista em IA, Dados & Automação
      </p>
    </motion.footer>
  );
}
