import { useEffect, useState } from 'react';
import { Produto } from '../types';
import { CardProduto } from '../components/CardProduto';

export const Produtos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true); // Estado de carregamento [cite: 100]
  const [erro, setErro] = useState<string | null>(null); // Tratamento de erro [cite: 101]

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        // Substitua pela URL da sua API (pode ser um JSON local no public/)
        const response = await fetch('http://localhost:5000/produto'); // [cite: 99]
        if (!response.ok) throw new Error('Erro ao buscar dados');
        
        const data = await response.json(); // Conversão .json() [cite: 99]
        setProdutos(data);
      } catch (err: any) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  if (loading) return <p>Carregando produtos...</p>; // [cite: 100]
  if (erro) return <p>Ops! Algo deu errado: {erro}</p>; // [cite: 101]

  return (
    <section>
      <h2>Nosso Catálogo</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {produtos.map(p => (
          <CardProduto key={p.id} produto={p} />
        ))}
      </div>
    </section>
  );
};