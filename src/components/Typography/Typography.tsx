import React from 'react';
import { Container } from './styled';

export type TypographyProps = {
  variant?: 'cormorantRegular' | 'cormorantMedium' | 'my';
  size?: number;
  children: React.ReactNode;
  className?: string;
};

export const Typography = ({
  variant = 'cormorantRegular',
  size = 32,
  children,
  className
}: TypographyProps) => {
  return (
    <Container className={className} $size={size} $variant={variant}>
      {children}
    </Container>
  );
};
