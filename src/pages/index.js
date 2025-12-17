  import Head from 'next/head';
  import Hero from '@/components/Hero';     // Importando o novo Hero
  import Projects from '@/components/Projects';
  import CTA from '@/components/CTA';

  export default function Home() {
    return (
      <>
        <Head>
          <title>Portfólio | Desenvolvedor Fullstack</title>
          <meta name="description" content="Automação, Next.js e Soluções Web" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head> 

        {/* O fundo já é definido no globals.css, então usamos min-h-screen para garantir altura */}
        <main className="flex min-h-screen flex-col items-center overflow-hidden">
          
          {/* --- HERO SECTION --- */}
          <Hero />

          {/* --- PROJETOS --- */}
          <div id="projetos" className="w-full relative z-10">
            {/* Um background sutil para separar seções visualmente */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/5 to-transparent -z-10"></div>
            <Projects />
          </div>

          {/* --- CTA --- */}
          <div className="w-full mt-20 pb-20">
            <CTA />
          </div>

        </main>
      </>
    );
  }