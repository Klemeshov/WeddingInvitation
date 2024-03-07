import { createGlobalStyle } from 'styled-components';

export const DefaultStyles = createGlobalStyle`
  body {
    background: #F5F5F5;
    color: #160824;
    font-family: Cormorant Garamond, serif;
    font-weight: 500;
    width: 100vw;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 8px; /* ширина scrollbar */
    }

    &::-webkit-scrollbar-track {
      background: #F5F5F5; /* цвет дорожки */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b4b4b4; /* цвет плашки */
      border-radius: 20px; /* закругления плашки */
      border: 2px solid #F5F5F5; /* padding вокруг плашки */
    }
  }

  .rotation {
    animation-name: flip;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease;
  }

  @keyframes flip {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
`;
