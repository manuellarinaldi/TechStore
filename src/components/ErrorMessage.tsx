import { Button } from './Button';
import './ErrorMessage.css';

interface ErrorMessageProps {
  mensagem: string;
  onRetry?: () => void;
}

export function ErrorMessage({ mensagem, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      <span className="error-message-icon" aria-hidden="true">
        ⚠️
      </span>
      <h2>Algo deu errado.</h2>
      <p>{mensagem}</p>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Tentar novamente
        </Button>
      )}
    </div>
  );
}