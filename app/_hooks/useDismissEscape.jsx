import { useEffect } from 'react';

export default function useDismissEscape(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);
}
