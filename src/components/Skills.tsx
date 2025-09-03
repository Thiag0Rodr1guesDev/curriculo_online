import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { 
  Code, Server, Database, Network, Wrench, Cpu, 
  User, Star, Shield, Heart, Zap 
} from "lucide-react";

function Skills() {
  const skills = [
    // Hard Skills
    {
      type: "hard",
      category: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "Angular", "JavaScript", "TypeScript", "Antd", "Bootstrap", "Sass"]
    },
    {
      type: "hard",
      category: "Backend",
      icon: Server,
      skills: ["Kotlin", "Java", "C#", "Spring Boot", "Asp .NET Core", "Node.js", "Python", "Jpa", "Entity Framework", "Swagguer"]
    },
    {
      type: "hard",
      category: "Database",
      icon: Database,
      skills: ["PostgreSQL", "SQL Server", "MySQL", "Oracle PlSQL", "Redis"]
    },
    {
      type: "hard",
      category: "Infra",
      icon: Network,
      skills: ["Docker", "Nginx", "BitBucket", "Git", "Azure DevOps", "Linux", "AWS", "Hostinger", "BinárioCloud"]
    },
    {
      type: "hard",
      category: "Metodologias Ágeis e ferramentas",
      icon: Wrench,
      skills: ["Scrum", "Kanban", "Trello", "Jira"]
    },
    {
      type: "hard",
      category: "Outros",
      icon: Cpu,
      skills: ["Postman", "Figma", "Visual Studio Code", "IntelliJ", "Visual Studio"]
    },

    // Soft Skills
    {
      type: "soft",
      category: "Comunicação e Colaboração",
      icon: User,
      skills: ["Comunicação", "Trabalho em equipe", "Empatia"]
    },
    {
      type: "soft",
      category: "Pensamento e Resolução de Problemas",
      icon: Zap,
      skills: ["Resolução de problemas", "Pensamento crítico", "Criatividade", "Aprendizado contínuo"]
    },
    {
      type: "soft",
      category: "Responsabilidade e Liderança",
      icon: Star,
      skills: ["Responsabilidade", "Motivação", "Mentoria", "Tomada de decisão"]
    },
    {
      type: "soft",
      category: "Resiliência e Gestão Pessoal",
      icon: Shield,
      skills: ["Resiliência", "Gestão de estresse", "Proatividade", "Gestão de tempo"]
    },
    {
      type: "soft",
      category: "Inteligência Emocional",
      icon: Heart,
      skills: ["Autoconhecimento", "Autocontrole", "Empatia", "Motivação emocional"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-5 bg-muted/30">
      {/* Hard Skills */}
      <div className="max-w-5xl mx-auto my-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hard Skills</h2>
          <p className="text-muted-foreground text-lg">
            Principais ferramentas e tecnologias que utilizo no meu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills
            .filter(skill => skill.type === "hard")
            .map(({ category, icon: Icon, skills }) => (
              <Card key={category} className="text-center hover:shadow-lg transition-shadow min-w-[200px]">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="max-w-5xl mx-auto mt-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soft Skills</h2>
          <p className="text-muted-foreground text-lg">
            As principais soft skills que desenvolvi ao longo da minha carreira e que aplico no meu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills
            .filter(skill => skill.type === "soft")
            .map(({ category, icon: Icon, skills }) => (
              <Card key={category} className="text-center hover:shadow-lg transition-shadow min-w-[200px]">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
