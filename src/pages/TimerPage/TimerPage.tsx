import React, { useCallback, useEffect, useState } from 'react';
import { Container, Content, TimeContainer, TimeLabel, TimerContainer, Title } from './styled';

const weddingDate = new Date('2024-04-22 15:20');

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
      minutes: Math.max((Math.trunc(diff / 60 / 1000) + 1) % 60, 0)
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
            {state.days}
            <TimeLabel>{createLabel(state.days, ['День', 'Дня', 'Дней'])}</TimeLabel>
          </TimeContainer>
          <TimeContainer>:</TimeContainer>
          <TimeContainer>
            {state.hours}
            <TimeLabel>{createLabel(state.hours, ['Час', 'Часа', 'Часов'])}</TimeLabel>
          </TimeContainer>
          <TimeContainer>:</TimeContainer>
          <TimeContainer>
            {state.minutes}
            <TimeLabel>{createLabel(state.minutes, ['Минуту', 'Минуты', 'Минут'])}</TimeLabel>
          </TimeContainer>
        </TimerContainer>
      </Content>
    </Container>
  );
};
