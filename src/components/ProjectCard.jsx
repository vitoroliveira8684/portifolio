// src/components/ProjectCard.jsx
import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import ChatModal from "./ChatModal"; 

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, isAI, link }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // A variável 'gitUrl' no seu componente corresponde ao 'link' no seu data/projects.js
  const finalGitUrl = gitUrl || link;

  const handlePreviewClick = (e) => {
    if (isAI) {
      e.preventDefault(); // Bloqueia o redirecionamento
      setIsChatOpen(true); // Abre o chat
    }
  };

  return (
    <>
      <div className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
        
        {/* Área da Imagem */}
        <div className="h-52 md:h-72 relative overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${imgUrl || "/images/project-placeholder.jpg"})` }}
          ></div>
          
          {/* Overlay que aparece no Hover */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-4">
            
            {/* Ícone do GitHub (Ver Código) */}
            {finalGitUrl && !isAI && (
              <a href={finalGitUrl} target="_blank" rel="noopener noreferrer" className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
              </a>
            )}

            {/* Ícone de Preview (Testar Assistente ou Ver Site) */}
            <a
              href={isAI ? "#" : previewUrl}
              onClick={handlePreviewClick}
              target={isAI ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`h-14 w-14 border-2 relative rounded-full ${isAI ? 'border-cyan-400' : 'border-[#ADB7BE]'} hover:border-white group/link`}
            >
              <EyeIcon className={`h-10 w-10 ${isAI ? 'text-cyan-400' : 'text-[#ADB7BE]'} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
            </a>
          </div>
        </div>

        {/* Informações do Projeto */}
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 pb-6">
          <h5 className="text-xl font-semibold mb-2 text-cyan-400">{title}</h5>
          <p className="text-[#ADB7BE] text-sm md:text-base line-clamp-3">
            {description}
          </p>
          {isAI && (
             <span className="mt-3 inline-block text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
               ✨ IA Disponível para teste
             </span>
          )}
        </div>
      </div>

      {/* Modal de Chat */}
      {isAI && (
        <ChatModal 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />
      )}
    </>
  );
};

export default ProjectCard;