import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Recuperação de R$ 400.000",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      desc:
        "Auditoria avançada em contrato público com 987 veículos, automação de cálculos e relatórios técnicos.",
    },
    {
      title: "Operação Nacional — 5.000 condutores",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
      desc:
        "Elevação do controle de 0,7% para 82% com rastreabilidade, padronização e automações via CRM.",
    },
    {
      title: "Agentes Inteligentes",
      img: "https://images.unsplash.com/photo-1634382812645-fd2272c38ab5",
      desc:
        "Criação de agentes com IA para leitura, classificação, auditoria e suporte operacional.",
    },
    {
      title: "Dashboards Estratégicos",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      desc:
        "Painéis completos em BI para telemetria, manutenção, indicadores e decisão executiva.",
    }
  ];

  return (
    <section>
      <h2>Projetos</h2>

      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="card"
          initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={`${p.img}?auto=format&fit=crop&w=1000&q=80`}
            alt="project"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "20px"
            }}
          />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
