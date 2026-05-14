import { Link } from 'react-router-dom';

const Menu = () => (
  <nav style={{ padding: '10px', background: '#eee', marginBottom: '20px' }}>
    <Link to="/">Home</Link> | 
    <Link to="/produtos"> Produtos</Link> | 
    <Link to="/categorias"> Categorias</Link> | 
    <Link to="/sobre"> Sobre</Link>
  </nav>
);