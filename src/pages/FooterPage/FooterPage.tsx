import React from 'react';
import { Container, Footer, OurNames, Title } from './styled';
import { And } from '../../components/And';

export const FooterPage = () => {
  return (
    <Container>
      <Title>С нетерпением ждём вас!</Title>
      <OurNames>
        Дарья <And /> Дмитрий
      </OurNames>
      <Footer />
    </Container>
  );
};
