import Badge from "./ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";

function About() {
    return (
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-10 sm:px-4 md:px-0">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                    Sou um desenvolvedor Pernambucano, apaixonado por transformar ideias complexas em soluções digitais
                    elegantes e funcionais. Minha jornada na tecnologia é guiada pela curiosidade constante e pelo desejo
                    de sempre aprender algo novo.
                </p>
                <p>
                    Meus primeiros contatos com a área aconteceram em 2017 através do curso Técnico de Informática para Internet, do qual sou formado pelo Instituto de Educação, Ciências e Tecnologias. Onde aprendi um pouco de tudo e fui apresentado ao mundo da programação, despertando meu interesse desde o inicio. 
                </p>
                <p>
                    Ainda no meu período como aluno, tive a oportunidade de ser monitor das matérias de Lógica de Programação e Estrutura de dados, assim como a matéria de Programação Orientada a Objetos. Experiências muito importantes para meu desenvolvimento acadêmico e profissional e
                    que me deram condição de antes do término do curso técnico, participar do processo seletivo e ingressar na Avanade, minha primeira experiência de trabalho, participando de treinamentos sobre Javascript, Angular e C#, atuando como Desenvolvedor Web usando ASP .NET Core MVC, atuando também com RPA ( Robotic Process Automation ) usando como ferramenta a plataforma Automation Anywhere.
                    Atuei também como Desenvolvedor Full Stack Pleno na WS Work, oficialmente minha segunda experiência de trabalho, onde tive a oportunidade de conhecer diversas tecnologias e atuar em diferentes contextos como terceiro, desenvolvendo não só meu lado técnico, mas também o lado pessoal e comunicativo. 
                </p>
                <p>
                    Atualmente atuo na Novodente, empresa que me possibilitou e possibilita um aprendizado ainda maior, onde sigo 
                    me desenvolvendo e crescendo profissionalmente, atuando com tecnologias como React, Next.js, kotlin, Spring boot , PostgreSQL, entre outras.
                </p>
                <p>
                    Sigo focado em aprimorar minhas habilidades técnicas e expandir meu conhecimento, com o objetivo de me tornar uma referẽncia técnica e profissional, em quaisquer que seja o ambiente que estiver.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Filosofia de Desenvolvimento</CardTitle>
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
                    <Badge variant="primary">Machine Learning</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;