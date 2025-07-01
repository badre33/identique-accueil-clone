
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AppError } from '@/types/common';

interface Props {
  children: ReactNode;
  fallback?: React.ComponentType<{ error: AppError; retry: () => void }>;
  onError?: (error: AppError) => void;
}

interface State {
  hasError: boolean;
  error: AppError | null;
}

const DefaultErrorFallback = ({ error, retry }: { error: AppError; retry: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-50">
    <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-lg text-center space-y-6">
      <div className="text-error-500 text-4xl">⚠️</div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-neutral-900">
          Une erreur est survenue
        </h2>
        <p className="text-neutral-600">
          {error.message || 'Une erreur inattendue s\'est produite'}
        </p>
      </div>
      
      <div className="space-y-3">
        <button 
          onClick={retry}
          className="btn-primary w-full"
        >
          Réessayer
        </button>
        <button 
          onClick={() => window.location.reload()}
          className="btn-secondary w-full"
        >
          Recharger la page
        </button>
      </div>
      
      {process.env.NODE_ENV === 'development' && error.details && (
        <details className="text-left text-sm text-neutral-500 mt-4">
          <summary className="cursor-pointer font-medium">
            Détails techniques
          </summary>
          <pre className="mt-2 p-3 bg-neutral-100 rounded overflow-auto">
            {JSON.stringify(error.details, null, 2)}
          </pre>
        </details>
      )}
    </div>
  </div>
);

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    const appError: AppError = {
      code: 'REACT_ERROR_BOUNDARY',
      message: error.message,
      details: {
        name: error.name,
        stack: error.stack,
      },
      timestamp: new Date(),
    };

    return {
      hasError: true,
      error: appError,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const appError: AppError = {
      code: 'REACT_ERROR_BOUNDARY',
      message: error.message,
      details: {
        name: error.name,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      },
      timestamp: new Date(),
    };

    console.error('ErrorBoundary caught an error:', appError);
    
    if (this.props.onError) {
      this.props.onError(appError);
    }
  }

  retry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} retry={this.retry} />;
    }

    return this.props.children;
  }
}
