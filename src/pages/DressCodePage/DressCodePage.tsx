import React from 'react';
import {
  ColorCircle,
  ColorsContainer,
  Container,
  ContentContainer,
  Description,
  ExampleImage,
  ExamplesContainer,
  FemalesContainer,
  Gender,
  GenderContainer,
  MalesContainer,
  Title
} from './styled';
import man1 from '../../assets/images/man1.png';
import man2 from '../../assets/images/man2.png';
import man3 from '../../assets/images/man3.png';
import man4 from '../../assets/images/man4.png';
import women1 from '../../assets/images/women1.png';
import women2 from '../../assets/images/women2.png';
import women3 from '../../assets/images/women3.png';
import women4 from '../../assets/images/women4.png';
import women5 from '../../assets/images/women5.png';

export const DressCodePage = () => {
  return (
    <Container>
      <Title>Дресс-код</Title>
      <ContentContainer>
        <Description>
          Мы будем рады если вы своими нарядами поддержите цветовую гамму нашей свадьбы
        </Description>
        <ColorsContainer>
          <ColorCircle $delay={1} $color="#130922" />
          <ColorCircle $delay={2} $color="#3B4D0C" />
          <ColorCircle $delay={3} $color="#9A9D8F" />
          <ColorCircle $delay={4} $color="#D5D9DA" />
          <ColorsContainer>
            <ColorCircle $delay={5} $color="#D1CCC9" />
            <ColorCircle $delay={6} $color="#DCDBD9" />
            <ColorCircle $delay={7} $color="#F5F5F5" $withBorder />
          </ColorsContainer>
        </ColorsContainer>
      </ContentContainer>
      <ExamplesContainer>
        <GenderContainer>
          <Gender>Мужчины</Gender>
          <MalesContainer>
            <ExampleImage animateIn="animate__zoomInLeft" animateOnce $src={man1} $area="q" />
            <ExampleImage animateIn="animate__zoomInDown" animateOnce $src={man2} $area="w" />
            <ExampleImage animateIn="animate__zoomInUp" animateOnce $src={man3} $area="e" />
            <ExampleImage animateIn="animate__zoomInRight" animateOnce $src={man4} $area="r" />
          </MalesContainer>
        </GenderContainer>
        <GenderContainer>
          <Gender>Девушки</Gender>
          <FemalesContainer>
            <ExampleImage animateIn="animate__fadeInLeft" animateOnce $src={women1} $area="q" />
            <ExampleImage animateIn="animate__fadeInDown" animateOnce $src={women2} $area="w" />
            <ExampleImage animateIn="animate__fadeInUp" animateOnce $src={women3} $area="e" />
            <ExampleImage animateIn="animate__fadeInRight" animateOnce $src={women4} $area="r" />
            <ExampleImage animateIn="animate__fadeInUp" animateOnce $src={women5} $area="t" />
          </FemalesContainer>
        </GenderContainer>
      </ExamplesContainer>
    </Container>
  );
};
