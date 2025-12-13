import React from 'react';

const CTA = () => {
  return (
    <section className="px-4 py-20">
      {/* Borda Gradiente */}
      <div className="max-w-5xl mx-auto relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 my-auto">
        
        {/* MUDANÇA AQUI: Conteúdo interno com fundo SÓLIDO bg-slate-900 */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
          
          {/* Efeito de luz sutil no topo */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Vamos tirar sua ideia do papel?
          </h2>
          
          <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto relative z-10 leading-relaxed">
            Se você precisa de um desenvolvedor focado em performance e resultado, entre em contato agora.
          </p>

          <a
            href="https://wa.me/5521968349785"
            target="_blank"
            rel="noopener noreferrer"
            // Botão Verde Sólido
            className="relative z-10 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-green-900/20"
          >
            <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.577 1.913.846 3.037.846 3.179 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.999-5.771zm.001 10.126c-.958 0-1.831-.354-2.557-.991l-.183-.169-1.554.408.416-1.517-.168-.198c-.56-.662-.882-1.493-.881-2.427.001-2.316 2.016-4.281 4.542-4.281 2.478-.001 4.494 1.966 4.493 4.281 0 2.318-2.016 4.296-4.108 4.296zm2.469-3.23c-.135-.068-.797-.393-.921-.438-.124-.045-.214-.068-.305.068-.09.136-.351.439-.431.529-.078.09-.158.102-.293.034-.135-.068-.57-.21-1.085-.668-.404-.359-.676-.801-.755-.937-.079-.135-.008-.209.059-.276.061-.061.136-.159.203-.238.068-.079.09-.136.136-.226.045-.091.023-.17-.011-.238-.034-.068-.305-.733-.417-1.003-.109-.264-.22-.228-.305-.232-.079-.004-.17-.005-.26-.005-.09 0-.237.034-.361.17-.124.135-.473.463-.473 1.129 0 .666.485 1.31.553 1.401.068.09 1.915 2.924 4.639 4.101 2.724 1.177 2.724.786 3.218.736.493-.05 1.084-.443 1.237-.87.153-.428.153-.794.108-.87-.045-.075-.169-.12-.304-.188z"/>
            </svg>
            Iniciar Conversa
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;