'use client';

import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onDismiss?: () => void;
  duration?: number;
}

export function Toast({ message, type = 'success', onDismiss, duration = 5000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration <= 0) return;
    const t = setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onDismiss]);

  const handleClose = () => {
    setVisible(false);
    onDismiss?.();
  };

  if (!visible) return null;

  const styles = {
    success: 'bg-green-600 text-white border-green-700',
    error: 'bg-red-600 text-white border-red-700',
    info: 'bg-sky-600 text-white border-sky-700',
  };

  return (
    <div
      role="alert"
      className={`fixed top-4 right-4 z-[200] flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border ${styles[type]}`}
    >
      {type === 'success' && (
        <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
      )}
      <p className="text-sm font-medium">{message}</p>
      <button
        type="button"
        onClick={handleClose}
        className="ml-1 p-1 rounded-lg hover:bg-white/20 transition-colors"
        aria-label="Dismiss"
      >
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
