import React, { useState } from 'react';
import { ExternalLink, MessageSquare } from 'lucide-react'; 
import ChatModal from './ChatModal'; 

export default function ProjectCard({ project }) { 
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Identifica se este card específico deve abrir o Chat
  const isAIProject = project.id === 1 || project.title.includes("Assistente Virtual");

  const handleAction = (e) => {
    if (isAIProject) {
      e.preventDefault(); // Impede o redirecionamento do link
      setIsChatOpen(true); // Abre o modal
    }
  };

  return (
    <>
      <div className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col h-full">
        <div className="p-6 flex flex-col flex-grow">
          <h5 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h5>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags?.map((tag, index) => (
              <span key={index} className="text-[10px] bg-slate-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-400 text-sm mb-6 flex-grow">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <a 
              href={project.link} 
              target={isAIProject ? "_self" : "_blank"}
              rel="noreferrer"
              onClick={handleAction} 
              className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 transition font-bold ${
                isAIProject 
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white" 
                : "bg-slate-800 hover:bg-slate-700 text-slate-300"
              }`}
            >
              {isAIProject ? (
                <>
                  <MessageSquare size={18} />
                  Testar Assistente
                </>
              ) : (
                <>
                  Ver Código 
                  <ExternalLink size={16}/>
                </>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Renderiza o modal apenas se for o projeto de IA */}
      {isAIProject && (
        <ChatModal 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />
      )}
    </>
  );
}