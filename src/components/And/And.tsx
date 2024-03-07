import React, { useEffect, useState } from 'react';
import { Container } from './styled';

export const And = ({ withDelay }: { withDelay?: boolean }) => {
  const [delay, setDelay] = useState(withDelay);

  useEffect(() => {
    setDelay(withDelay);
    if (withDelay) {
      setTimeout(() => {
        setDelay(false);
      }, 5000);
    }
  }, [withDelay]);

  return (
    <Container style={{ opacity: 1 }} animateIn="rotation" $withDelay={delay}>
      &
    </Container>
  );
};
