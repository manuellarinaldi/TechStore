import { Link } from 'react-router-dom';

export const Erro = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>Ops! A página que você procura não existe.</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};