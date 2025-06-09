import { useEffect } from 'react';

export default function useDisableBackgroundScroll(isOpen) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  }, [isOpen]);
}
