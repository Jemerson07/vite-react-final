import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section>
      <h2>Contato</h2>

      <motion.div
        className="glass contact-box"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p><strong>Email:</strong> jemerson456l@gmail.com</p>

        <p>
          <strong>LinkedIn:</strong>
          https://www.linkedin.com/in/jemerson-santos"
            className="contact-btn"
            target="_blank"
          >
            🔗 Acessar LinkedIn
          </a>
        </p>

        <p>
          <strong>WhatsApp:</strong>  
        </p>
      </motion.div>
    </section>
  );
}
