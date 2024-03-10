import React, { useEffect, useRef, useState } from 'react';
import { Heart } from './styled';

const isTouchEnabled = () => {
  return navigator.maxTouchPoints !== undefined
    ? navigator.maxTouchPoints > 0
    : 'ontouchstart' in window;
};

export const Cursor = ({ className }: { className?: string }) => {
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: -100,
    left: 0
  });
  const [scrollPosition, setScrollPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0
  });
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursorPosition = (event: MouseEvent) => {
      if (!isTouchEnabled()) setCursorPosition({ top: event.clientY, left: event.clientX });
    };

    const updateScrollPosition = () => {
      setScrollPosition({ top: window.scrollY, left: window.scrollX });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('scroll', updateScrollPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  useEffect(() => {
    if (!cursor.current) return;

    cursor.current.style.top = `${scrollPosition.top + cursorPosition.top - 10}px`;
    cursor.current.style.left = `${scrollPosition.left + cursorPosition.left - 12}px`;
  }, [cursorPosition, scrollPosition]);

  return (
    <>
      <Heart />
      <div id="cursor" className={className} ref={cursor} />
    </>
  );
};
