import React from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import { ResetCss } from './styles/ResetCss';
import { DefaultStyles } from './styles/DefaultStyles';
import { Fonts } from './styles/Fonts';
import { MainPage } from './pages/MainPage';
import { MapPage } from './pages/MapPage';
import { DressCodePage } from './pages/DressCodePage';
import { TimerPage } from './pages/TimerPage';
import { ContactsPage } from './pages/ContactsPage';
import { FooterPage } from './pages/FooterPage';

export const App = () => {
  return (
    <YMaps query={{ lang: 'ru_RU' }}>
      {/* Global styles */}
      <ResetCss />
      <DefaultStyles />
      <Fonts />

      <div>
        <MainPage />
        <MapPage />
        <DressCodePage />
        <TimerPage />
        <ContactsPage />
        <FooterPage />
      </div>
    </YMaps>
  );
};
