import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.getAttribute('data-clickable') === 'true')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationId: number;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animationId = requestAnimationFrame(animateTrailing);
    };

    animationId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, [pos.x, pos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner pinpoint */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-screen"
        style={{
          width: isHovered ? '8px' : '5px',
          height: isHovered ? '8px' : '5px',
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          boxShadow: '0 0 12px rgba(56, 189, 248, 0.8)',
        }}
      />
      {/* Outer ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-all duration-200 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? 'w-10 h-10 border-cyan-400 bg-cyan-500/10 scale-110 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
            : 'w-7 h-7 border-indigo-400/40 bg-transparent'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      />
    </>
  );
};
