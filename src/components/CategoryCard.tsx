import { Link } from 'react-router-dom';
import './CategoryCard.css';

interface CategoryCardProps {
  nome: string;
  quantidade: number;
  icone?: string;
}

const ICONES_CATEGORIA: Record<string, string> = {
  notebooks: '💻',
  celulares: '📱',
  tablets: '📲',
  periféricos: '⌨️',
  perifericos: '⌨️',
  monitores: '🖥️',
  acessórios: '🎧',
  acessorios: '🎧',
  smartwatches: '⌚',
  componentes: '🧠',
};

function obterIcone(nome: string): string {
  return ICONES_CATEGORIA[nome.toLowerCase()] ?? '🛒';
}

export function CategoryCard({ nome, quantidade, icone }: CategoryCardProps) {
  const emoji = icone ?? obterIcone(nome);

  return (
    <Link to={`/categorias/${encodeURIComponent(nome)}`} className="category-card">
      <span className="category-card-icon" aria-hidden="true">
        {emoji}
      </span>
      <div className="category-card-info">
        <h3>{nome}</h3>
        <p>
          {quantidade} {quantidade === 1 ? 'produto' : 'produtos'}
        </p>
      </div>
    </Link>
  );
}