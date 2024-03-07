import styled from 'styled-components';
import { LeftArrowSVG } from '../../assets/images/LeftArrow';
import { RightArrowSVG } from '../../assets/images/RightArrow';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 148px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding-top: 74px;
  }
`;

export const Invite = styled.span`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 56px;
  font-weight: 500;
  line-height: 56px;
  text-align: center;
  margin-top: 60px;

  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 28px;
    margin-top: 30px;
  }
`;

export const OurNames = styled.span`
  font-family: myFont, serif;
  font-size: 200px;
  font-weight: 400;
  line-height: 200px;
  text-align: center;
  margin-top: 10px;

  @media (max-width: 1024px) {
    font-size: 80px;
    line-height: 80px;
  }
`;

export const And = styled.span`
  position: relative;
  display: inline-block;
  animation: and 4s both;
  animation-delay: 1s;
  color: #d1cbc8;

  @keyframes and {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  margin-top: 80px;
  padding: 0 18px;

  @media (max-width: 1024px) {
    max-width: 480px;
    margin-top: 60px;
  }

  @media (max-width: 580px) {
    max-width: 332px;
    margin-top: 40px;
  }
`;

export const LeftBreath = styled.img`
  top: 0;
  position: absolute;
  z-index: -1;
  user-select: none;
  opacity: 50%;
  animation-name: move-l;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;

  @keyframes move-l {
    from {
      left: -720px;
    }

    to {
      left: min(0px, calc((100vw - 1440px) / 10));
    }
  }
`;
export const RightBreath = styled.img`
  top: 0;
  transform: scale(-1, 1);
  position: absolute;
  z-index: -1;
  user-select: none;
  opacity: 50%;
  animation-name: move-r;
  animation-duration: 4s;
  animation-timing-function: ease-out;
  animation-delay: 1s;
  animation-fill-mode: both;

  @keyframes move-r {
    from {
      right: -720px;
    }

    to {
      right: min(0px, calc((100vw - 1440px) / 10));
    }
  }
`;

export const LeftArrowContainer = styled.div`
  position: absolute;
  left: -154px;
  bottom: 392px;
  width: 310px;
  height: 272px;

  @media (max-width: 1024px) {
    width: 20%;
    height: 20%;
    left: 20px;
    top: 70px;
  }

  @media (max-width: 580px) {
    left: 38px;
    top: 54px;
  }
`;

export const LeftArrow = styled(LeftArrowSVG)`
  position: absolute;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const LeftArrowTitle = styled.span`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  position: absolute;
  bottom: -32px;
  left: -38px;
  transform: rotate(15deg);
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 16px;
    color: #f5f5f5;
    transform: rotate(-10deg);
    left: 42px;
    top: -30px;
  }
  @media (max-width: 580px) {
    left: 16px;
  }
`;

export const RightArrowContainer = styled.div`
  position: absolute;
  right: -128px;
  bottom: 394px;
  width: 280px;
  height: 236px;

  @media (max-width: 1024px) {
    width: 20%;
    height: 20%;
    right: 62px;
    top: 92px;
  }

  @media (max-width: 580px) {
    right: 44px;
    top: 68px;
  }
`;

export const RightArrow = styled(RightArrowSVG)`
  position: absolute;

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const RightArrowTexts = styled.span`
  position: absolute;
  bottom: -64px;
  left: 168px;
  transform: rotate(-15deg);
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  @media (max-width: 1024px) {
    transform: rotate(10deg);
    top: -42px;
    left: -20px;
  }
`;

export const RightArrowTitle = styled.span`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 16px;
    color: #f5f5f5;
  }
`;

export const RightArrowDescription = styled.span`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  color: #8e9a9c;
  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 12px;
  }
`;
