import React, { useEffect, useState, useRef } from 'react';

interface MouseBlurLightProps {
  theme?: 'dark' | 'light';
}

export const MouseBlurLight: React.FC<MouseBlurLightProps> = ({ theme = 'dark' }) => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [targetPos, setTargetPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp animation for buttery-smooth light trail
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setPos((prev) => ({
        x: lerp(prev.x, targetPos.x, 0.18),
        y: lerp(prev.y, targetPos.y, 0.18),
      }));
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [targetPos.x, targetPos.y, visible]);

  if (!visible) return null;

  const isLight = theme === 'light';

  return (
    <>
      {/* Soft Ambient Light Halo tracking mouse cursor */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isLight ? 'z-10 opacity-70' : 'z-20 opacity-100'
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isLight ? '320px' : '380px',
          height: isLight ? '320px' : '380px',
          borderRadius: '9999px',
          background: isLight
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(99, 102, 241, 0.08) 45%, rgba(248, 250, 252, 0) 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(129, 140, 248, 0.10) 45%, rgba(7, 9, 14, 0) 75%)',
          filter: isLight ? 'blur(40px)' : 'blur(50px)',
          mixBlendMode: isLight ? 'normal' : 'screen',
        }}
      />

      {/* Enhanced High-Visibility Cursor Pointer for Light Theme */}
      {isLight && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
          style={{
            left: `${targetPos.x}px`,
            top: `${targetPos.y}px`,
            width: '20px',
            height: '20px',
            borderRadius: '9999px',
            border: '2px solid #0284c7',
            backgroundColor: 'rgba(14, 165, 233, 0.15)',
            boxShadow: '0 0 10px rgba(14, 165, 233, 0.45)',
          }}
        />
      )}
    </>
  );
};
