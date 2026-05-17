import { Link } from 'react-router-dom';
import './Categorias.css';

export const Categorias = () => {
  const listaCategorias = ['Notebooks', 'Celulares', 'Tablets', 'Acessórios'];

  return (
    <section>
      <h2>Categorias de Tecnologia</h2>
      <ul>
        {listaCategorias.map((cat) => (
          <li key={cat}>
            <Link to={`/categorias/${cat.toLowerCase()}`}>{cat}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};