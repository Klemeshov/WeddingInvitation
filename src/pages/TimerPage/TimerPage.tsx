import React, { useCallback, useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {
  Container,
  Content,
  TimeContainer,
  TimeLabel,
  TimerContainer,
  TimerSeparator,
  Title
} from './styled';

const weddingDate = new Date('2024-04-22 15:21');

const createLabel = (number: number, titles: [string, string, string]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`;
};

export const TimerPage = () => {
  const [state, setState] = useState({ days: 0, hours: 0, minutes: 0 });

  const callback = useCallback(() => {
    const now = new Date();
    // @ts-ignore
    const diff = weddingDate - now;

    setState({
      days: Math.max(Math.trunc(diff / 3600 / 1000 / 24), 0),
      hours: Math.max(Math.trunc(diff / 3600 / 1000) % 24, 0),
      minutes: Math.max(Math.trunc(diff / 60 / 1000) % 60, 0)
    });
  }, []);

  useEffect(() => {
    callback();
    setInterval(callback, 1000);
  }, [callback]);

  return (
    <Container>
      <Content>
        <Title>Станем Мужем и Женой через</Title>
        <TimerContainer>
          <TimeContainer>
            <AnimationOnScroll style={{ opacity: 1 }} animateIn="animate__pulse">
              {state.days}
            </AnimationOnScroll>
            <TimeLabel>{createLabel(state.days, ['День', 'Дня', 'Дней'])}</TimeLabel>
          </TimeContainer>
          <TimerSeparator>:</TimerSeparator>
          <TimeContainer>
            <AnimationOnScroll style={{ opacity: 1 }} animateIn="animate__pulse">
              {state.hours}
            </AnimationOnScroll>
            <TimeLabel>{createLabel(state.hours, ['Час', 'Часа', 'Часов'])}</TimeLabel>
          </TimeContainer>
          <TimerSeparator>:</TimerSeparator>
          <TimeContainer>
            <AnimationOnScroll style={{ opacity: 1 }} animateIn="animate__pulse">
              {state.minutes}
            </AnimationOnScroll>
            <TimeLabel>{createLabel(state.minutes, ['Минуту', 'Минуты', 'Минут'])}</TimeLabel>
          </TimeContainer>
        </TimerContainer>
      </Content>
    </Container>
  );
};
