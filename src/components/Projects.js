import React from 'react';
import { projects } from '../data/project.js'; 

const Projects = () => {
  if (!projects) return null;

  return (
    <section className="py-24 w-full max-w-7xl px-4 mx-auto" id="projetos">
      
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Projetos Desenvolvidos
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            // MUDANÇA AQUI: bg-slate-900 SÓLIDO (sem transparência /50)
            // Usei shadow-xl para ajudar a destacar o bloco sólido do fundo
            className="group relative flex flex-col p-6 rounded-2xl border border-slate-800 bg-slate-900 shadow-xl hover:bg-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-between">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-900/30 transition-colors">
                    <span className="text-xl">🚀</span>
                </div>
                <span className="text-xs font-mono font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                    VER CÓDIGO ↗
                </span>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="mt-auto pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    // Tags também com fundo sólido mais claro que o card
                    className="text-[10px] uppercase font-mono tracking-wider font-semibold px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;