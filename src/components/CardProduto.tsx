import { Produto } from '../types/Produto';
import { Link } from 'react-router-dom';

// Tipagem das props (obrigatório!) [cite: 116]
interface CardProps {
  produto: Produto;
}

export const CardProduto = ({ produto }: CardProps) => {
  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} width="200" />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <Link to={`/produtos/${produto.id}`}>Ver Detalhes</Link>
    </div>
  );
};