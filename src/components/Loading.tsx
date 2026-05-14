import './Loading.css';

interface LoadingProps {
  mensagem?: string;
}

export function Loading({ mensagem = 'Carregando...' }: LoadingProps) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <div className="loading-spinner" />
      <p>{mensagem}</p>
    </div>
  );
}