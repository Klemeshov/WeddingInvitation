import React from 'react';
import { Container, LeftTriangle, RightTriangle, TextContainer } from './styled';

export type ChevronTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const ChevronText = ({ children, className }: ChevronTextProps) => {
  return (
    <Container className={className}>
      <LeftTriangle />
      <TextContainer>{children}</TextContainer>
      <RightTriangle />
    </Container>
  );
};
