import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Recuperação de R$ 400.000",
      desc:
        "Auditoria avançada em contrato público com 987 veículos, automação de cálculos e relatórios técnicos.",
    },
    {
      title: "Operação Nacional – 5.000 condutores",
      desc:
        "Elevação do controle de 0,7% para 82% com padronização, rastreabilidade e automações em CRM.",
    },
    {
      title: "Agentes Inteligentes",
      desc:
        "Desenvolvimento de agentes com IA para leitura, classificação e suporte operacional.",
    },
    {
      title: "Dashboards Estratégicos",
      desc:
        "Painéis executivos de telemetria, manutenção e indicadores para tomada de decisão.",
    },
  ];

  return (
    <section>
      <h2>Projetos de Impacto</h2>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
