import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

export default function Education() {
  const education = [
    {
      degree: "Técnologo em Análise e Desenvolvimento de Sistemas",
      school: "Uninter",
      year: "10/2022 - 04/2025",
       description: "Curso superior focado em análise, desenvolvimento e manutenção de sistemas de software, com ênfase em gestão, análise de requisitos e arquitetura de software. Abrangeu disciplinas como programação, banco de dados, redes e gestão de projetos.",
    },
     {
      degree: "Técnico em Informática para Internet",
      school: "Instituto Federal de Educação, Ciência e Tecnologia de Pernambuco (IFPE)",
      year: "02/2017 - 08/2018",
      description: "Curso técnico com ênfase em desenvolvimento web. Atuei como monitor de Lógica de Programação e Programação Orientada a Objetos, participando de projetos práticos que me introduziram à aplicação do conhecimento fora do ambiente acadêmico, além de me aprofundar em bancos de dados e boas práticas de desenvolvimento.",
    },
  ];

  const certifications : string[] = [
    "Treinamento presencial em Angular e JavaScript - Caelum e Alura, com o instrutor Dev Soutinho (Mario Souto), realizado na Avanade.",
  ];

  return (
    <section id="education" className="py-10 px-10">
      {/* Education & Certifications */}
      <div className="max-w-5xl space-y-12 items-center mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-card-foreground mb-8 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-accent" />
            Formação
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-accent font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {edu.year}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {certifications.length > 0 && (
          <div>
          <h3 className="text-xl font-serif font-semibold text-card-foreground mb-6">
            Certificações
          </h3>
          <div className="grid gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-card-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
