import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">

      <video 
        autoPlay 
        muted 
        loop 
        className="video-bg" 
        src="/hero.mp4">
      </video>

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3.2rem", fontWeight: 900 }}
      >
        Tecnologia • IA • Dados • Automação
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        style={{ fontSize: "1.3rem", opacity: 0.8 }}
      >
        Transformando processos e decisões com inteligência analítica e inovação.
      </motion.p>

    </section>
  );
}
