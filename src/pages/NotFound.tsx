import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import './NotFound.css';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <span className="not-found-icon" aria-hidden="true">
        🚫
      </span>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>
        Desculpe, a página que você procura não existe ou pode ter sido movida.
      </p>
      <div className="not-found-actions">
        <Button variant="primary" onClick={() => navigate('/')}>
          Ir para o início
        </Button>
        <Button variant="outline" onClick={() => navigate('/produtos')}>
          Ver produtos
        </Button>
      </div>
    </div>
  );
}