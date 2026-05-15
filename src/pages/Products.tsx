import { useEffect, useMemo, useState } from 'react';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductCard } from '../components/ProductCard';
import { getProdutos } from '../services/api';
import type { Produto } from '../types/Product';
import './Products.css';

export function Products() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [busca, setBusca] = useState<string>('');
  const [filtroCategoria, setFiltroCategoria] = useState<string>('todas');
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  async function carregar(): Promise<void> {
    try {
      setCarregando(true);
      setErro(null);
      const dados = await getProdutos();
      setProdutos(dados);
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao carregar produtos.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  const categorias = useMemo<string[]>(() => {
    const set = new Set<string>(produtos.map((p) => p.categoria));
    return Array.from(set).sort();
  }, [produtos]);

  const produtosFiltrados = useMemo<Produto[]>(() => {
    return produtos.filter((produto) => {
      const correspondeBusca = produto.nome
        .toLowerCase()
        .includes(busca.toLowerCase());
      const correspondeCategoria =
        filtroCategoria === 'todas' || produto.categoria === filtroCategoria;
      return correspondeBusca && correspondeCategoria;
    });
  }, [produtos, busca, filtroCategoria]);

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Todos os produtos</h1>
        <p>Explore nosso catálogo completo de tecnologia.</p>
      </header>

      <div className="products-filters">
        <input
          type="search"
          className="products-search"
          placeholder="Buscar pelo nome do produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <select
          className="products-select"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="todas">Todas as categorias</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {carregando && <Loading mensagem="Carregando produtos..." />}

      {erro && !carregando && <ErrorMessage mensagem={erro} onRetry={carregar} />}

      {!carregando && !erro && (
        <>
          <p className="products-count">
            {produtosFiltrados.length}{' '}
            {produtosFiltrados.length === 1
              ? 'produto encontrado'
              : 'produtos encontrados'}
          </p>

          {produtosFiltrados.length === 0 ? (
            <div className="products-empty">
              <p>Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="products-grid">
              {produtosFiltrados.map((produto) => (
                <ProductCard key={produto.id} produto={produto} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}