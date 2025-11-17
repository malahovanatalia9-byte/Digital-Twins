'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { type ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'slide' | 'scale' | 'fade';
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  animation = 'slide'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1, '-50px');

  const animationClass = {
    slide: 'scroll-animate',
    scale: 'scroll-animate-scale',
    fade: 'scroll-animate-fade'
  }[animation];

  const delayClass = delay > 0 ? `stagger-${Math.min(delay, 8)}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
