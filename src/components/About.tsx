import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-10 sm:px-4 md:px-0">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Olá! Sou um desenvolvedor Pernambucano com mais de 3 anos de
                experiência, apaixonado em traduzir ideias em soluções
                digitais robustas e funcionais. Minha trajetória se destaca pela
                versatilidade, adaptabilidade e habilidade de autogestão, tendo atuado
                em diversos setores.
              </p>
              <p>
                Com sólida experiência em tecnologias como React, Next.js,
                Kotlin e Spring Boot, sou proficiente em todo o ciclo de vida
                do desenvolvimento. Possuo um histórico comprovado em
                orçamentação técnica, comunicação com clientes e na
                mentoria de colegas de equipe, com foco em entregas de alta
                performance e código limpo.
              </p>
              <p>
                Além da minha expertise técnica, sou um profissional responsável, analítico,
                focado e dedicado com uma paixão pelo aprendizado contínuo. Busco
                constantemente aprimorar minhas habilidades, capacidades e aplicar meu
                conhecimento para construir soluções inovadoras e crescer junto com a empresa.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">
                  Filosofia de Desenvolvimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Código limpo</li>
                  <li>• Performance e Manutenabilidade</li>
                  <li>• Aprendizado contínuo</li>
                  <li>• Colaboração e mentoria</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Atualmente Estudando</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">AWS</Badge>
                  <Badge variant="primary">IA</Badge>
                  <Badge variant="primary">Inglês</Badge>
                  <Badge variant="primary">Arquiteturas e boas práticas</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
