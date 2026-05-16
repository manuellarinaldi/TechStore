import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { getProdutosPorCategoria } from '../services/api';
import type { Produto } from '../types/Produto';
import './CategoryProducts.css';

export function CategoryProducts() {
  const { categoria } = useParams<{ categoria: string }>();
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  const nomeCategoria: string = categoria
    ? decodeURIComponent(categoria)
    : '';

  async function carregar(): Promise<void> {
    try {
      setCarregando(true);
      setErro(null);
      const lista = await getProdutosPorCategoria(nomeCategoria);
      setProdutos(lista);
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao carregar produtos.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar();
  }, [nomeCategoria]);

  return (
    <div className="category-products-page">
      <Button
        variant="outline"
        className="category-products-back"
        onClick={() => navigate('/categorias')}
      >
        ← Todas as categorias
      </Button>

      <header className="category-products-header">
        <h1>{nomeCategoria}</h1>
        <p>Produtos disponíveis nesta categoria.</p>
      </header>

      {carregando && <Loading mensagem={`Carregando ${nomeCategoria}...`} />}

      {erro && !carregando && <ErrorMessage mensagem={erro} onRetry={carregar} />}

      {!carregando && !erro && produtos.length === 0 && (
        <div className="category-products-empty">
          <p>Nenhum produto cadastrado nesta categoria.</p>
          <Button variant="primary" onClick={() => navigate('/produtos')}>
            Ver todos os produtos
          </Button>
        </div>
      )}

      {!carregando && !erro && produtos.length > 0 && (
        <div className="category-products-grid">
          {produtos.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}