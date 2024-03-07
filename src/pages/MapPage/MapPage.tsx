import React, { useCallback, useMemo, useRef } from 'react';
import { Placemark } from '@pbe/react-yandex-maps'; // eslint-disable-next-line import/no-unresolved
import ymap from 'yandex-maps';
import { Container, Location, StyledButton, StyledMap, Title, When, Where } from './styled';

export const MapPage = ({ where }: { where: 'registry' | 'hall' }) => {
  const ref = useRef<ymap.Map | undefined>();
  const coords = useMemo(
    () => (where === 'registry' ? [59.933961, 30.293877] : [59.931513, 30.28422]),
    [where]
  );

  const onClick = useCallback(() => {
    if (!ref.current) return;

    ref.current
      .setCenter(coords, 16, {
        timingFunction: 'ease-in',
        duration: 1000
      })
      .catch((e) => {
        throw e;
      });
  }, [coords]);

  return (
    <Container>
      <Title>Ждём Вас</Title>
      <When>{where === 'registry' ? '22 апреля, 15:00' : '22 апреля, 17:00'}</When>
      <Where>
        {where === 'registry'
          ? 'Дворец бракосочетания № 1 Английская набережная'
          : 'Атриум холл, Английская наб., 70'}
      </Where>
      <StyledMap instanceRef={ref} defaultState={{ center: coords, zoom: 16 }}>
        <Placemark defaultGeometry={coords} />
        <StyledButton onClick={onClick}>
          <Location />
        </StyledButton>
      </StyledMap>
    </Container>
  );
};
