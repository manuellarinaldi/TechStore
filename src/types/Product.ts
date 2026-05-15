
export interface Produto {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  descricaoCurta: string;
  descricaoDetalhada: string;
}


export interface RespostaProdutos {
  produtos: Produto[];
}


export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';