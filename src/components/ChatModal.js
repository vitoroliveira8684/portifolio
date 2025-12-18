  import { useState } from 'react';

  export default function ChatModal({ isOpen, onClose }) {
    const [messages, setMessages] = useState([
      { role: 'assistant', content: 'Olá! Sou o assistente virtual. Como posso ajudar com suporte técnico hoje?' }
    ]);;;;
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    
    // Se o site estiver rodando em localhost, ele usa a porta 5000. 
    // Se estiver na internet, ele usa o link do Render automaticamente.
    const API_URL = window.location.hostname === "localhost" 
     ? "http://localhost:5000/api/chat" 
     : "https://ai-support-agent-3rrp.onrender.com/api/chat";

    const sendMessage = async () => {
      if (!input.trim()) return;

      const userMsg = { role: 'user', content: input };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setLoading(true);

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMsg.content, history: [] }),
        });
        
        const data = await response.json();
        setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
      } catch (error) {
        setMessages((prev) => [...prev, { role: 'assistant', content: "Erro ao conectar com o servidor. Tente novamente." }]);
      } finally {
        setLoading(false);
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
          
          {/* Header */}
          <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800">
            <h3 className="text-white font-bold flex items-center gap-2">
              🚀 Assistente IA
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition">
              ✕
            </button>
          </div>

          {/* Área de Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-slate-500 text-xs animate-pulse">Digitando...</div>}
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              className="flex-1 bg-slate-900 text-white border border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition"
              placeholder="Digite sua dúvida..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              onClick={sendMessage}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition disabled:opacity-50"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    );
  }