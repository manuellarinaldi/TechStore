import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { Button } from '../components/Button';
import { getProdutoPorId } from '../services/api';
import type { Produto } from '../types/Product';
import './ProductDetail.css';

function formatarPreco(preco: number): string {
  return preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  async function carregar(): Promise<void> {
    try {
      setCarregando(true);
      setErro(null);

      const idNumerico = Number(id);
      if (Number.isNaN(idNumerico)) {
        throw new Error('Identificador de produto inválido.');
      }

      const resultado = await getProdutoPorId(idNumerico);
      if (!resultado) {
        throw new Error('Produto não encontrado.');
      }
      setProduto(resultado);
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Erro ao carregar o produto.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregar();
  }, [id]);

  if (carregando) return <Loading mensagem="Carregando produto..." />;

  if (erro) {
    return (
      <div className="product-detail-error">
        <ErrorMessage mensagem={erro} onRetry={carregar} />
        <div className="product-detail-error-actions">
          <Button variant="secondary" onClick={() => navigate('/produtos')}>
            Voltar para produtos
          </Button>
        </div>
      </div>
    );
  }

  if (!produto) return null;

  return (
    <article className="product-detail">
      <Button
        variant="outline"
        className="product-detail-back"
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </Button>

      <div className="product-detail-grid">
        <div className="product-detail-image">
          <img
            src={produto.imagem}
            alt={produto.nome}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://via.placeholder.com/600x400?text=Sem+imagem';
            }}
          />
        </div>

        <div className="product-detail-info">
          <span className="product-detail-categoria">{produto.categoria}</span>
          <h1>{produto.nome}</h1>
          <p className="product-detail-resumo">{produto.descricaoCurta}</p>

          <p className="product-detail-preco">
            {formatarPreco(produto.preco)}
          </p>

          <div className="product-detail-acoes">
            <Button variant="primary">Adicionar ao carrinho</Button>
            <Button
              variant="outline"
              onClick={() =>
                navigate(`/categorias/${encodeURIComponent(produto.categoria)}`)
              }
            >
              Ver mais {produto.categoria}
            </Button>
          </div>

          <section className="product-detail-descricao">
            <h2>Sobre o produto</h2>
            <p>{produto.descricaoDetalhada}</p>
          </section>

          <ul className="product-detail-meta">
            <li>
              <strong>ID:</strong> #{produto.id}
            </li>
            <li>
              <strong>Categoria:</strong> {produto.categoria}
            </li>
            <li>
              <strong>Garantia:</strong> 12 meses
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}