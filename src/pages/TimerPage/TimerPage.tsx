import React, { useCallback, useEffect, useState } from 'react';
import { Container, Content, TimeContainer, TimeLabel, TimerContainer, Title } from './styled';

const weddingDate = new Date('2024-04-22 15:20');

export const TimerPage = () => {
  const [state, setState] = useState({ days: 0, hours: 0, minutes: 0 });

  const callback = useCallback(() => {
    const now = new Date();
    // @ts-ignore
    const diff = weddingDate - now;

    setState({
      days: Math.trunc(diff / 3600 / 1000 / 24),
      hours: Math.trunc(diff / 3600 / 1000) % 24,
      minutes: (Math.trunc(diff / 60 / 1000) + 1) % 60
    });
  }, []);

  useEffect(() => {
    callback();
    setInterval(callback, 1000);
  }, []);

  return (
    <Container>
      <Content>
        <Title>Станем Мужем и Женой через</Title>
        <TimerContainer>
          <TimeContainer>
            {state.days}
            <TimeLabel>Дня</TimeLabel>
          </TimeContainer>
          <TimeContainer>:</TimeContainer>
          <TimeContainer>
            {state.hours}
            <TimeLabel>Часов</TimeLabel>
          </TimeContainer>
          <TimeContainer>:</TimeContainer>
          <TimeContainer>
            {state.minutes}
            <TimeLabel>Минут</TimeLabel>
          </TimeContainer>
        </TimerContainer>
      </Content>
    </Container>
  );
};
