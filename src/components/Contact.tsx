import { Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";

function Contact() {
    return (
        /* Contact Section */
        <section id="contact" className="py-10 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Conversar?</h2>
                <p className="text-muted-foreground text-lg mb-8">
                    Gostou do meu perfil? Estou sempre aberto a novos desafios e oportunidades de colaboração. Fique a vontade  para entrar em contato comigo para discutir como posso contribuir.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="default" size="lg" className="gap-2">
                        <Mail className="w-4 h-4" />
                        tvnicius782@gmail.com
                    </Button>
                    <Button href={"https://www.linkedin.com/in/thiago-vinícius/"} variant="primary" size="lg" className="gap-2 bg-transparent">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </Button>
                    <Button href={"https://github.com/Thiag0Rodr1guesDev"} variant="dark" size="lg" className="gap-2 bg-transparent">
                        <Github className="w-4 h-4" />
                        GitHub
                    </Button>
                </div>
            </div>
        </section>
    )
}   

export default Contact;