import { Link } from 'react-router-dom';
import type { Produto } from '../types/Produto';
import { Button } from './Button';
import './ProductCard.css';

interface ProductCardProps {
  produto: Produto;
}

function formatarPreco(preco: number): string {
  return preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img
          src={produto.imagem}
          alt={produto.nome}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://via.placeholder.com/300x200?text=Sem+imagem';
          }}
        />
        <span className="product-card-categoria">{produto.categoria}</span>
      </div>

      <div className="product-card-body">
        <h3 className="product-card-title">{produto.nome}</h3>
        <p className="product-card-desc">{produto.descricaoCurta}</p>
        <p className="product-card-preco">{formatarPreco(produto.preco)}</p>

        <Link to={`/produtos/${produto.id}`} className="product-card-link">
          <Button variant="primary">Ver detalhes</Button>
        </Link>
      </div>
    </article>
  );
}