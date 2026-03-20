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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <img
              src={`${p.img}?auto=format&fit=crop&w=1000&q=80`}
              alt={p.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "20px"
              }}
            />
            <h3 style={{ marginBottom: "15px" }}>{p.title}</h3>
            <p style={{ opacity: 0.8, lineHeight: "1.6" }}>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
