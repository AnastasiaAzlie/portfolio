// hooks/useGradient.ts
import { useEffect } from 'react';

const useGradient = (startColor?: string, endColor?: string, angle?: string) => {
  useEffect(() => {
    const root = document.documentElement;
    if (startColor) root.style.setProperty('--gradient-start', startColor);
    if (endColor) root.style.setProperty('--gradient-end', endColor);
    if (angle) root.style.setProperty('--gradient-angle', angle);

    return () => {
      root.style.removeProperty('--gradient-start');
      root.style.removeProperty('--gradient-end');
      root.style.removeProperty('--gradient-angle');
    };
  }, [startColor, endColor, angle]);
};

export default useGradient;