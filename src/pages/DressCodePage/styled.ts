import { AnimationOnScroll } from 'react-animation-on-scroll';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 160px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 80px;
    gap: 40px;
  }
`;

export const Title = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 56px;
  line-height: 56px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 30px;
  }
`;

export const Description = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;
  max-width: 764px;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ColorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 20px;
  }
`;

export const ColorCircle = styled.span<{ $color: string; $withBorder?: boolean; $delay: number }>`
  box-sizing: content-box;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: ${({ $color }) => $color};
  ${({ $withBorder }) => $withBorder && 'border: 2px solid #D1CBC8'};
  animation-name: bounce;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-delay: ${({ $delay }) => `${$delay / 3}s`};

  @media (max-width: 1024px) {
    width: 65px;
    height: 65px;
  }

  @keyframes bounce {
    0%,
    4%,
    11%,
    20% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translateZ(0);
    }
    8%,
    8.6% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0) scaleY(1.1);
    }
    14% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0) scaleY(1.05);
    }
    16% {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translateZ(0) scaleY(0.95);
    }
    18% {
      transform: translate3d(0, -4px, 0) scaleY(1.02);
    }
  }
`;

export const ExamplesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 620px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
`;

export const Gender = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ExampleImage = styled(AnimationOnScroll)<{ $src: string; $area: string }>`
  background: url(${({ $src }) => $src}) no-repeat center center;
  background-size: cover;
  grid-area: ${({ $area }) => $area};
  width: 100%;
  height: 100%;
  user-select: none;
  align-self: ${({ $area }) => ($area === 'e' || $area === 'r' ? 'flex-end' : 'flex-start')};
  animation-duration: 1.5s !important;
`;

export const MalesContainer = styled.div`
  display: grid;
  grid-template-areas:
    'q w'
    'e w'
    'e r';
  grid-template-rows: 280px 200px 280px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 560px;
  height: 800px;

  @media (max-width: 1200px) {
    grid-template-rows: 175px 125px 175px;
    grid-gap: 12px;
    width: 350px;
    height: 500px;
  }

  @media (max-width: 785px) {
    grid-template-rows: 140px 100px 140px;
    grid-gap: 10px;
    width: 280px;
    height: 400px;
  }
`;

export const FemalesContainer = styled.div`
  display: grid;
  grid-template-areas:
    'q w'
    'q r'
    'e r'
    'e t';
  grid-template-rows: 200px 100px 160px 280px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 560px;
  height: 800px;

  @media (max-width: 1200px) {
    grid-template-rows: 125px 63px 100px 175px;
    grid-gap: 12px;
    width: 350px;
    height: 500px;
  }

  @media (max-width: 785px) {
    grid-template-rows: 100px 50px 80px 140px;
    grid-gap: 10px;
    width: 280px;
    height: 400px;
  }
`;
