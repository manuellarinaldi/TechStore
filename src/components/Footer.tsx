import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const anoAtual: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3>TechStore</h3>
          <p>O catálogo de tecnologia mais completo do Brasil.</p>
        </div>

        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <p>contato@techstore.com.br</p>
          <p>(11) 4002-8922</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {anoAtual} TechStore · Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}