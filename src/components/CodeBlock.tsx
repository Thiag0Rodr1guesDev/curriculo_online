function CodeBlock() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Code Block */}
        <div className="bg-card border rounded-lg p-6 font-mono text-sm text-left max-w-ml mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div className="text-muted-foreground">
              {"// Aprendizado contínuo e criatividade"}
            </div>
            <div>
              <span className="text-primary">const</span> developer = {"{"}
            </div>
            <div className="pl-4">
              name:{" "}
              <span className="text-green-600">
                "Thiago Vinícius Oliveira de Matos Rodrigues"
              </span>
              ,
            </div>
            <div className="pl-4">
              passion:{" "}
              <span className="text-green-600">"Aprender, Criar & Inovar"</span>
              ,
            </div>
            <div className="pl-4">
              mindset: <span className="text-green-600">"Growth"</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CodeBlock;
