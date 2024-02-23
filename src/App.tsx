import React from 'react';
import { ResetCss } from './styles/ResetCss';
import { DefaultStyles } from './styles/DefaultStyles';
import { Fonts } from './styles/Fonts';
import { MainPage } from './pages/MainPage/MainPage';

export const App = () => {
  return (
    <>
      {/* Global styles */}
      <ResetCss />
      <DefaultStyles />
      <Fonts />

      <div>
        <MainPage />
      </div>
    </>
  );
};
