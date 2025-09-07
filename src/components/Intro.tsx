function Intro() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
                <div className="border-2 border-primary w-36 h-36 mx-auto rounded-full bg-muted overflow-hidden">
                    <img src="perfil.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-mono text-sm mb-6">
                    {"< software-developer />"}
                </div>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
                    Desenvolvedor Full Stack apaixonado por aprendizado contínuo, transformando ideias criativas em
                    experiências digitais impactantes.
                </p>
                <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
                    Criando soluções <span className="text-primary">inovadoras</span> através do código
                </h1>
            </div>
        </div>
    </section>
)}

export default Intro;