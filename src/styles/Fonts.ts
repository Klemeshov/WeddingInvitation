import { createGlobalStyle } from 'styled-components';
import CormorantGaramondRegular from '../assets/fonts/CormorantGaramond-Regular.ttf';
import CormorantGaramondMedium from '../assets/fonts/CormorantGaramond-Medium.ttf';
import MyFont from '../assets/fonts/MyFont.otf';

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: Cormorant Garamond;
        src: url(${CormorantGaramondRegular}) format('opentype');
        font-weight: 400;
    }
    
    @font-face {
        font-family: Cormorant Garamond;
        src: url(${CormorantGaramondMedium}) format('opentype');
        font-weight: 500;
    }
    
    @font-face {
        font-family: MyFont;
        src: url(${MyFont}) format('opentype');
        font-weight: 400;
    }
`;
