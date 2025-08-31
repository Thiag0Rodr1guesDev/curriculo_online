
export default function ExperienceSection() {

  const experience = [
    {
      year: "06/2024 - Momento atual",
      title: "Full Stack Developer",
      company: "Novodente/SA",
      description: "Desenvolvimento de sites e sistemas, desde o frontend até o backend, banco e um pouquinho de infra.",
      techs: ["React", "Next.js", "Kotlin", "Spring Boot", "Azure", "PostgreSQL", "AWS", "Nginx", "Docker...."],
    },
    {
      year: "06/2022 - 05/2024",
      title: "Full Stack Developer",
      company: "Ws Work",
      description: "Atuando como terceiro pra empresas de diversos ramos; Auxiliando na chegada de novos colegas.",
      techs: ["React", "Node.js",  "Next.js", "Angular", "Kotlin", "Spring boot", "PostgreSQL", "SQL Server"],
    },
    {
      year: "06/2018 - 01/2019",
      title: "Associate Software Engineer",
      company: "Avanade",
      description:
        "Automação de processos, desenvolvimento de APIs RESTful e frontend de sistemas corporativos.",
      techs: [".Net Core", "C#", "Angular", "RPA"]
      }
  ]

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

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
