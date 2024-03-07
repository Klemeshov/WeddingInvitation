import React, { useMemo } from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import { useSearchParams } from 'react-router-dom';
import { ResetCss } from './styles/ResetCss';
import { DefaultStyles } from './styles/DefaultStyles';
import { Fonts } from './styles/Fonts';
import { MainPage } from './pages/MainPage';
import { MapPage } from './pages/MapPage';
import { DressCodePage } from './pages/DressCodePage';
import { TimerPage } from './pages/TimerPage';
import { ContactsPage } from './pages/ContactsPage';
import { FooterPage } from './pages/FooterPage';
import { guestsInfo } from './guestsInfo';
import 'animate.css/animate.min.css';

export const App = () => {
  const [searchParams] = useSearchParams();
  const guestId = searchParams.get('guest');
  const guest = useMemo(
    () => guestsInfo[guestId ?? ''] ?? { name: 'Дорогой гость', where: 'hall' },
    [guestId]
  );

  return (
    <YMaps query={{ lang: 'ru_RU' }}>
      {/* Global styles */}
      <ResetCss />
      <DefaultStyles />
      <Fonts />

      <div>
        <MainPage name={guest.name} />
        <MapPage where={guest.where} />
        <DressCodePage />
        <TimerPage />
        <ContactsPage />
        <FooterPage />
      </div>
    </YMaps>
  );
};
