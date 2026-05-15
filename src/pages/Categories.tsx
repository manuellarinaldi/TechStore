import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { CategoryCard } from '../components/CategoryCard';
import { getProdutos } from '../services/api';
import type { Produto } from '../types/Product';
import './Categories.css';

interface CategoriaResumo {
  nome: string;
  quantidade: number;
}

export function Categories() {
  const [categorias, setCategorias] = useState<CategoriaResumo[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  async function carregar(): Promise<void> {
    try {
      setCarregando(true);
      setErro(null);

      const produtos: Produto[] = await getProdutos();
      const contagem = new Map<string, number>();

      produtos.forEach((produto) => {
        contagem.set(
          produto.categoria,
          (contagem.get(produto.categoria) ?? 0) + 1
        );
      });

      const resumo: CategoriaResumo[] = Array.from(contagem.entries())
        .map(([nome, quantidade]) => ({ nome, quantidade }))
        .sort((a, b) => a.nome.localeCompare(b.nome));

      setCategorias(resumo);
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao carregar categorias.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <div className="categories-page">
      <header className="categories-header">
        <h1>Categorias</h1>
        <p>Escolha uma categoria para explorar os produtos disponíveis.</p>
      </header>

      {carregando && <Loading mensagem="Carregando categorias..." />}

      {erro && !carregando && <ErrorMessage mensagem={erro} onRetry={carregar} />}

      {!carregando && !erro && (
        <div className="categories-grid">
          {categorias.map((cat) => (
            <CategoryCard
              key={cat.nome}
              nome={cat.nome}
              quantidade={cat.quantidade}
            />
          ))}
        </div>
      )}
    </div>
  );
}