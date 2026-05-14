import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';
import './Header.css';

export function Header() {
  const [aberto, setAberto] = useState<boolean>(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="TechStore - Página inicial">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">
            Tech<span>Store</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto((prev) => !prev)}
        >
          {aberto ? '✕' : '☰'}
        </button>

        <div className={`nav-wrapper ${aberto ? 'open' : ''}`}>
          <NavMenu onNavigate={() => setAberto(false)} />
        </div>
      </div>
    </header>
  );
}