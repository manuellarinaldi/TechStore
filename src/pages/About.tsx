import './About.css';

interface Integrante {
  nome: string;
  rm: string;
  papel: string;
}

const INTEGRANTES: Integrante[] = [
  {
    nome: 'Integrante 1',
    rm: 'RM000000',
    papel: 'Desenvolvimento de componentes, rotas e tipagens.',
  },
  {
    nome: 'Integrante 2',
    rm: 'RM000000',
    papel: 'Implementação das páginas e consumo da API.',
  },
  {
    nome: 'Integrante 3',
    rm: 'RM000000',
    papel: 'Estilização, organização do projeto e deploy na Vercel.',
  },
];

export function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Sobre a TechStore</h1>
        <p>
          Projeto desenvolvido para o CheckPoint 3 da disciplina de Front-End
          Design Engineering, do curso de Análise e Desenvolvimento de Sistemas
          (FIAP - Turma 1TDSPB).
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
        <h2>Integrantes</h2>
        <div className="about-equipe">
          {INTEGRANTES.map((integrante) => (
            <div key={integrante.rm} className="about-integrante">
              <h3>{integrante.nome}</h3>
              <p className="about-integrante-rm">{integrante.rm}</p>
              <p>{integrante.papel}</p>
            </div>
          ))}
        </div>
        <p className="about-equipe-aviso">
          ⚠️ Atualizem os nomes e RMs reais no arquivo
          <code> src/pages/About.tsx </code>
          e no <code>README.md</code> antes da entrega.
        </p>
      </section>
    </div>
  );
}