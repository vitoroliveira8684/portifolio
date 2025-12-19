// src/data/projects.js
export const projects = [
    {
        id: 1,
        title: "Assistente Virtual Inteligente",
        description: "Aplicação backend que consome a API da OpenAI...",
        tags: ["React"],
        link: "https://github.com/vitoroliveira8684/ai-support-agent-setup.git",
        previewUrl: "#", // O clique aqui abrirá o chat
        isAI: true,
        imgUrl: "/images/projects/chatbot.png",
    },
    {
        id: 2,
        title: "Dashboard Financeiro Pessoal (MVP)",
        description: "Aplicação Next.js + Tailwind CSS com lógica de gestão de dados...",
        tags: ["Next.js", "Tailwind CSS"],
        link: "https://github.com/vitoroliveira8684/finance-dashboard", // Link do GitHub
        previewUrl: "/dashboard", // Link interno para a página do dashboard
        isAI: false,
        imgUrl: "/images/projects/dashboard.png",
    },
];
