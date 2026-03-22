import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navegação",
      links: [
        { label: "Sobre", href: "#story" },
        { label: "Expertise", href: "#expertise" },
        { label: "Projetos", href: "#projects" },
        { label: "Serviços", href: "#services" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Blog", href: "#" },
        { label: "Documentação", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Webinars", href: "#" },
      ],
    },
    {
      title: "Conecte-se",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/jemerson-santos", external: true },
        { label: "GitHub", href: "https://github.com/Jemerson07", external: true },
        { label: "Email", href: "mailto:jemerson456l@gmail.com" },
        { label: "WhatsApp", href: "https://wa.me/5581985332616", external: true },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        {footerSections.map((section, i) => (
          <motion.div
            key={i}
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="footer-bottom">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <p>
            © {currentYear} Jemerson Santos. Todos os direitos reservados. | Especialista em IA, Dados & Automação
          </p>
          <motion.button
            onClick={scrollToTop}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(255, 255, 255, 0.05)",
              color: "inherit",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
            whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Voltar ao Topo
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
}
