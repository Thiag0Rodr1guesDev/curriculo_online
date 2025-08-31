import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Code, Database, Network, Server } from "lucide-react"

function Skills(){
    const frontend = [
      "React", 
      "Next.js",
      "Angular", 
      "JavaScript",
      "TypeScript", 
      "Antd",
      "Bootstrap",
      "Sass"
    ];

    const backend = [
      "Kotlin",
      "Java",
      "C#", 
      "Spring Boot", 
      ".NET Core",
      "Node.js", 
      "Python", 
    ];

    const database = [
      "PostgreSQL", 
      "SQL Server", 
      "MySQL",
      "PlSQL", 
      "Redis" 
    ];

    const infra = [
      "Docker", 
      "Nginx",
      "BitBucket",
      "Git",
      "Azure DevOps",
      "AWS",
      "Linux"
    ];

    return (
      <section id="skills" className="py-20 px-5 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
            <p className="text-muted-foreground text-lg">
              Ferramentas e tecnologias que domino para criar soluções completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backend.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {database.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Infra</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {infra.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
}

export default Skills;