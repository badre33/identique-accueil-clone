
import { useState, useCallback } from 'react';
import { AppError } from '@/types/common';

interface UseErrorHandlerReturn {
  error: AppError | null;
  setError: (error: AppError | null) => void;
  handleError: (error: unknown) => void;
  clearError: () => void;
  retryCount: number;
  retry: () => void;
}

export const useErrorHandler = (maxRetries = 3): UseErrorHandlerReturn => {
  const [error, setError] = useState<AppError | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = useCallback((error: unknown) => {
    const appError: AppError = {
      code: 'UNKNOWN_ERROR',
      message: 'Une erreur inattendue s\'est produite',
      details: error,
      timestamp: new Date(),
    };

    if (error instanceof Error) {
      appError.message = error.message;
      appError.code = error.name;
    } else if (typeof error === 'string') {
      appError.message = error;
    }

    console.error('Error handled:', appError);
    setError(appError);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
    setRetryCount(0);
  }, []);

  const retry = useCallback(() => {
    if (retryCount < maxRetries) {
      setRetryCount(prev => prev + 1);
      setError(null);
    }
  }, [retryCount, maxRetries]);

  return {
    error,
    setError,
    handleError,
    clearError,
    retryCount,
    retry,
  };
};
