import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qual é o seu modelo de trabalho?",
      answer:
        "Trabalho principalmente com modelo PJ, oferecendo flexibilidade de horários e demanda. Também aceito projetos pontuais e consultoria estratégica. Posso me adaptar às necessidades específicas do cliente.",
    },
    {
      question: "Quanto tempo leva para implementar uma solução?",
      answer:
        "Depende da complexidade do projeto. Automações simples podem ser implementadas em 2-4 semanas, enquanto projetos estratégicos de IA podem levar de 2-3 meses. Sempre apresento um cronograma detalhado na proposta.",
    },
    {
      question: "Você trabalha com empresas de qualquer tamanho?",
      answer:
        "Sim! Tenho experiência com startups, PMEs e grandes corporações. Adapto minha abordagem e escala de solução conforme o tamanho e necessidade da organização.",
    },
    {
      question: "Como é calculado o valor dos projetos?",
      answer:
        "Utilizo diferentes modelos: por projeto (escopo definido), por hora (demanda variável) ou por resultado (modelo de sucesso compartilhado). Sempre apresento propostas transparentes e detalhadas.",
    },
    {
      question: "Você oferece suporte após a implementação?",
      answer:
        "Sim! Ofereço suporte técnico pós-implementação, treinamento de equipes e otimizações contínuas. Posso manter uma relação de parceria de longo prazo com meus clientes.",
    },
    {
      question: "Qual é o seu diferencial?",
      answer:
        "Combino expertise técnica em IA e automação com visão estratégica de negócio. Não apenas implemento soluções, mas gero impacto mensurável em redução de custos, aumento de eficiência e melhoria na tomada de decisão.",
    },
  ];

  return (
    <section id="faq">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Perguntas Frequentes
      </motion.h2>

      <motion.div
        style={{ maxWidth: "800px", margin: "0 auto" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={{ marginBottom: "15px" }}
          >
            <motion.button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: "100%",
                padding: "20px",
                border: "none",
                borderRadius: "12px",
                textAlign: "left",
                cursor: "pointer",
                background: "transparent",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
              className="card"
              whileHover={{ scale: 1.01 }}
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: "1.5rem" }}
              >
                ▼
              </motion.span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openIndex === i ? 1 : 0,
                height: openIndex === i ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  padding: "0 20px 20px",
                  fontSize: "0.95rem",
                  lineHeight: "1.8",
                  opacity: 0.8,
                }}
              >
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
