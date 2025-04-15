// components/GradientBackground.tsx
'use client';

import { useEffect, useState } from 'react';

export default function GradientBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <style jsx global>{`
      body {
        background: 
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--gradient-color-1), transparent 30%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${mousePosition.y}%, var(--gradient-color-2), transparent 30%),
          radial-gradient(circle at ${mousePosition.x}% ${100 - mousePosition.y}%, var(--gradient-color-3), transparent 30%),
          radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, var(--gradient-color-4), transparent 30%),
          var(--background);
      }
    `}</style>
  );
}