import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  animation-name: chevron;
  animation-duration: 0.5s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;

  @keyframes chevron {
    to {
      transform: rotate(2deg);
    }
  }
`;

export const TextContainer = styled.div`
  padding: 10px 20px 12px 20px;
  background: #8e9a9c;
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;
  color: #f5f5f5;

  @media (max-width: 1024px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
  }
`;

const Triangle = styled.span`
  width: 23px;
  height: 50px;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-bottom: 23px solid #8e9a9c;

  @media (max-width: 1024px) {
    width: 15px;
    height: 32px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #8e9a9c;
  }
`;

export const LeftTriangle = styled(Triangle)`
  transform: rotate(-90deg);
`;
export const RightTriangle = styled(Triangle)`
  transform: rotate(90deg);
`;
