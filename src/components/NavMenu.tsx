import { NavLink } from 'react-router-dom';
import './NavMenu.css';

interface NavMenuProps {
  onNavigate?: () => void;
}

export function NavMenu({ onNavigate }: NavMenuProps) {
  return (
    <nav className="nav-menu" aria-label="Menu principal">
      <NavLink to="/" end onClick={onNavigate} className="nav-link">
        Início
      </NavLink>
      <NavLink to="/produtos" onClick={onNavigate} className="nav-link">
        Produtos
      </NavLink>
      <NavLink to="/categorias" onClick={onNavigate} className="nav-link">
        Categorias
      </NavLink>
      <NavLink to="/sobre" onClick={onNavigate} className="nav-link">
        Sobre
      </NavLink>
    </nav>
  );
}