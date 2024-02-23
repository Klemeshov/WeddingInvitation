import React from 'react';
import { And, Container, Footer, OurNames, Title } from './styled';

export const FooterPage = () => {
  return (
    <Container>
      <Title>С нетерпением ждём вас!</Title>
      <OurNames>
        Дарья <And>&</And> Дмитрий
      </OurNames>
      <Footer />
    </Container>
  );
};
