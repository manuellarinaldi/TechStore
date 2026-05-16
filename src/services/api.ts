import type { Produto, RespostaProdutos } from '../types/Produto';


const API_URL: string = import.meta.env.VITE_API_URL ?? '';

function endpointProdutos(): string {

  if (!API_URL) return '/produtos.json';
  return `${API_URL}/produtos`;
}


export async function getProdutos(): Promise<Produto[]> {
  try {
    const response = await fetch(endpointProdutos());

    if (!response.ok) {
      throw new Error(`Erro ao buscar produtos: ${response.status}`);
    }

    const data = (await response.json()) as Produto[] | RespostaProdutos;


    if (Array.isArray(data)) {
      return data;
    }

    return data.produtos;
  } catch (error) {
    const mensagem = error instanceof Error ? error.message : 'Erro desconhecido';
    throw new Error(`Falha ao carregar produtos. ${mensagem}`);
  }
}


export async function getProdutoPorId(id: number): Promise<Produto | undefined> {
  try {

    if (API_URL) {
      const response = await fetch(`${API_URL}/produtos/${id}`);
      if (!response.ok) {
        if (response.status === 404) return undefined;
        throw new Error(`Erro ao buscar produto: ${response.status}`);
      }
      return (await response.json()) as Produto;
    }


    const produtos = await getProdutos();
    return produtos.find((p) => p.id === id);
  } catch (error) {
    const mensagem = error instanceof Error ? error.message : 'Erro desconhecido';
    throw new Error(`Falha ao carregar o produto. ${mensagem}`);
  }
}


export async function getCategorias(): Promise<string[]> {
  const produtos = await getProdutos();
  const setCategorias = new Set<string>(produtos.map((p) => p.categoria));
  return Array.from(setCategorias).sort();
}


export async function getProdutosPorCategoria(categoria: string): Promise<Produto[]> {
  const produtos = await getProdutos();
  return produtos.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
  );
}