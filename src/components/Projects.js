import React, { useState } from 'react';
import { Folder, ExternalLink } from 'lucide-react'; // Ou seus ícones atuais
import ChatModal from './ChatModal'; // <--- Importe o Modal que criamos

export default function ProjectCard({ project }) { // Supondo que recebe props do projeto
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Verifica se é o projeto específico (pode usar ID ou Título)
  const isAIProject = project.title.includes("Assistente Virtual Inteligente");

  const handleButtonClick = (e) => {
    if (isAIProject) {
      e.preventDefault(); // Impede de abrir o link do GitHub
      setIsChatOpen(true); // Abre o Modal
    }
    // Se não for o projeto de IA, deixa o link funcionar normal
  };

  return (
    <>
      <div className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300 border border-slate-700 relative">
        {/* ... Seu código de imagem e descrição ... */}
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4">{project.description}</p>
          
          <div className="flex gap-4 mt-auto">
            {/* O BOTÃO MÁGICO */}
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noreferrer"
              onClick={handleButtonClick} // <--- AQUI ESTÁ O SEGREDO
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition cursor-pointer"
            >
              {isAIProject ? (
                <>🚀 Testar ao Vivo</>
              ) : (
                <>Ver Código <ExternalLink size={16}/></>
              )}
            </a>
          </div>
        </div>
      </div>

      {/* Renderiza o Modal condicionalmente */}
      {isAIProject && (
        <ChatModal 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />
      )}
    </>
  );
}