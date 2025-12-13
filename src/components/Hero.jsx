import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[85vh] px-4 text-center overflow-hidden">
      
      {/* Glow de fundo mais suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Disponível para novos projetos
      </div>

      <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
        Transformo ideias em <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
          Soluções Digitais
        </span>
      </h1>

      <p className="text-lg text-slate-300 max-w-2xl mb-10 mx-auto leading-relaxed font-medium">
        Especialista em <span className="text-cyan-400">Next.js</span> e Automação. 
        Construo softwares modernos que geram valor real para seu negócio.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
        {/* Botão Primário: Branco Sólido */}
        <a 
            href="#projetos" 
            className="px-8 py-3.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-100 transition-transform transform hover:scale-105 shadow-lg shadow-white/10"
        >
            Ver Projetos
        </a>
        
        {/* MUDANÇA AQUI: Botão Secundário agora é SÓLIDO bg-slate-900 em vez de transparente */}
        <a 
            href="https://wa.me/5521968349785" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-slate-900 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:border-cyan-400 hover:bg-slate-800 transition-colors shadow-lg shadow-black/20"
        >
            Entrar em Contato
        </a>
      </div>
    </section>
  );
};

export default Hero;