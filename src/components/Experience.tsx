
export default function ExperienceSection() {

  const experience = [
    {
      year: "06/2024 - Momento atual",
      title: "Full Stack Developer",
      company: "Novodente/SA",
      description: "Contratado como o primeiro desenvolvedor da empresa, com o desafio de atuar na manutenção de sistemas existentes e no desenvolvimento de novas soluções. Por ser o primeiro profissional da área, contribuí ativamente para a estruturação e crescimento do setor de TI, atuando também em DevOps para configurar servidores e automações de build/deploy. Atuei na concepção, desenvolvimento e manutenção de diversos projetos, incluindo sites institucionais e uma plataforma de sorteios. Sempre com foco na melhoria de performance e na otimização de sistemas. Atuando também na refatoração de aplicações de sistemas-chave, aprimorando a arquitetura da aplicação, melhorando a manutenabilidade. Participo do levantamento de requisitos, orçamentação técnica e mentoria de colegas de equipe e terceiros, além de atuar como ponto focal para questões técnicas.",
      techs: ["React", "Next.js", "Kotlin", "Spring Boot", "Azure", "PostgreSQL", "AWS", "Nginx", "Docker...."],
    },
    {
      year: "06/2022 - 05/2024",
      title: "Full Stack Developer",
      company: "Ws Work",
      description: "Ao longo de 2 anos, atuei como desenvolvedor Full Stack em mais de 8 projetos para clientes de setores variados como: plataforma de LGPD, gestão de produção e logística, sistemas para concessionárias com IA, supermercados e recursos Humanos. Participando de todas as fases do ciclo de desenvolvimento, desde a concepção até a entrega, garantindo a adaptação e o sucesso das soluções em diferentes ecossistemas de negócios. Adicionalmente, atuei no levantamento de requisitos e na orçamentação técnica de projetos, liderei reuniões para entender as necessidades dos clientes e fiz a mentoria de novos colegas na equipe.",
      techs: ["React", "Node.js",  "Next.js", "Angular", "Kotlin", "Spring boot", "PostgreSQL", "SQL Server"],
    },
    {
      year: "06/2018 - 01/2019",
      title: "Associate Software Engineer",
      company: "Avanade",
      description: "Participei do desenvolvimento de soluções para grandes clientes corporativos, contribuindo para a orçamentação de projetos e o desenvolvimento de telas de gestão e APIs. Atuei na automação de processos, focando na otimização de tarefas e melhoria da eficiência operacional.",
      techs: [".Net Core", "C#", "Angular", "RPA"]
      }
  ]

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-serif font-semibold text-card-foreground mb-8">Minha trajetória profissional</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent/20">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-accent">{exp.year}</p>
                      <h4 className="text-lg font-semibold text-card-foreground">{exp.title}</h4>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="font-bold">Tecnologias e ferramentas:</span><br />
                        {exp.techs.join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
