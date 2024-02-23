import React, { useCallback, useRef } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';
import ymap from 'yandex-maps';
import { Container, Location, StyledButton, StyledMap, Title, When, Where } from './styled';

export const MapPage = () => {
  const ref = useRef<ymap.Map | undefined>();

  const onClick = useCallback(() => {
    if (!ref.current) return;

    ref.current
      .setCenter([59.933961, 30.293877], 16, {
        timingFunction: 'ease-in',
        duration: 1000
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  return (
    <Container>
      <Title>Ждём Вас</Title>
      <When>22 апреля, 15:00</When>
      <Where>Дворец бракосочетания № 1 Английская набережная</Where>
      <StyledMap instanceRef={ref} defaultState={{ center: [59.933961, 30.293877], zoom: 16 }}>
        <Placemark defaultGeometry={[59.933961, 30.293877]} />
        <StyledButton onClick={onClick}>
          <Location />
        </StyledButton>
      </StyledMap>
    </Container>
  );
};
