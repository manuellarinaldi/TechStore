import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { getProdutos } from '../services/api';
import type { Produto } from '../types/Produto';
import './Home.css';

export function Home() {
  const [produtosDestaque, setProdutosDestaque] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  const navigate = useNavigate();

  async function carregar(): Promise<void> {
    try {
      setCarregando(true);
      setErro(null);
      const lista = await getProdutos();
      // Pega os 4 primeiros como destaques
      setProdutosDestaque(lista.slice(0, 4));
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao carregar produtos.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            A <span>tecnologia</span> que move o seu dia a dia.
          </h1>
          <p>
            Catálogo completo de notebooks, celulares, monitores, periféricos e
            muito mais — tudo em um só lugar.
          </p>
          <div className="hero-actions">
            <Button variant="primary" onClick={() => navigate('/produtos')}>
              Ver todos os produtos
            </Button>
            <Button variant="outline" onClick={() => navigate('/categorias')}>
              Explorar categorias
            </Button>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <span>💻</span>
          <span>📱</span>
          <span>🖥️</span>
          <span>⌚</span>
        </div>
      </section>

      <section className="destaques">
        <header className="destaques-header">
          <h2>Produtos em destaque</h2>
          <p>Confira algumas das nossas ofertas mais recentes.</p>
        </header>

        {carregando && <Loading mensagem="Buscando produtos em destaque..." />}

        {erro && !carregando && <ErrorMessage mensagem={erro} onRetry={carregar} />}

        {!carregando && !erro && (
          <div className="destaques-grid">
            {produtosDestaque.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}