import './About.css';

interface Integrante {
  nome: string;
  rm: string;
}

const INTEGRANTE: Integrante[] = [
  {
    nome: 'Manuella Rinaldi',
    rm: 'RM567915',
  },
];

export function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Sobre a TechStore</h1>
        <p>
          TechStore é o projeto desenvolvido para o CheckPoint 3 da disciplina de Front-End
          Design Engineering, do curso de Análise e Desenvolvimento de Sistemas.
        </p>
      </header>

      <section className="about-section">
        <h2>Objetivo</h2>
        <p>
          A TechStore é uma aplicação web que simula um catálogo de produtos
          tecnológicos, com navegação entre páginas via rotas, consumo de uma
          API de dados via fetch, componentes reutilizáveis e tipagem completa
          em TypeScript.
        </p>
      </section>

      <section className="about-section">
        <h2>Tecnologias utilizadas</h2>
        <ul className="about-tags">
          <li>Vite</li>
          <li>React 18</li>
          <li>TypeScript</li>
          <li>React Router DOM</li>
          <li>Fetch API</li>
          <li>JSON Server</li>
          <li>Git e GitHub</li>
          <li>Vercel</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Integrante</h2>
        <div className="about-equipe">
          {INTEGRANTE.map((integrante) => (
            <div key={integrante.rm} className="about-integrante">
              <h3>{integrante.nome}</h3>
              <p className="about-integrante-rm">{integrante.rm}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}