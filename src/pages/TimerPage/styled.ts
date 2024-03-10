import styled from 'styled-components';
import bg from '../../assets/images/timer-bg.png';

export const Container = styled.div`
  padding: 160px 20px;
  background: url(${bg});

  @media (max-width: 1024px) {
    padding: 120px 20px;
  }

  @media (max-width: 624px) {
    padding: 80px 20px;
  }
`;

export const Content = styled.div`
  max-width: 866px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 64px;
  }

  @media (max-width: 624px) {
    gap: 32px;
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

  @media (max-width: 624px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 16px;
  }

  @media (max-width: 624px) {
    gap: 0;
  }
`;

export const TimeContainer = styled.div`
  font-family: MyFont, serif;
  font-size: 200px;
  line-height: 200px;
  font-weight: 400;
  text-align: center;

  display: flex;
  flex-direction: column;

  padding: 0 25px;

  @media (max-width: 1024px) {
    padding: 0 16px;
    font-size: 125px;
    line-height: 125px;
  }

  @media (max-width: 624px) {
    padding: 0 10px;
    font-size: 72px;
    line-height: 72px;
  }
`;

export const TimerSeparator = styled(TimeContainer)`
  animation: flashing 2s infinite ease-in-out;

  @keyframes flashing {
    from,
    to,
    20%,
    80% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export const TimeLabel = styled.span`
  font-size: 120px;
  line-height: 120px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 64px;
    line-height: 64px;
  }

  @media (max-width: 624px) {
    font-size: 48px;
    line-height: 48px;
  }
`;
