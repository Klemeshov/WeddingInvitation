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
          <ColorCircle $color="#130922" />
          <ColorCircle $color="#3B4D0C" />
          <ColorCircle $color="#9A9D8F" />
          <ColorCircle $color="#D5D9DA" />
          <ColorsContainer>
            <ColorCircle $color="#D1CCC9" />
            <ColorCircle $color="#DCDBD9" />
            <ColorCircle $color="#F5F5F5" $withBorder />
          </ColorsContainer>
        </ColorsContainer>
      </ContentContainer>
      <ExamplesContainer>
        <GenderContainer>
          <Gender>Мужчины</Gender>
          <MalesContainer>
            <ExampleImage $src={man1} $area="q" />
            <ExampleImage $src={man2} $area="w" />
            <ExampleImage $src={man3} $area="e" />
            <ExampleImage $src={man4} $area="r" />
          </MalesContainer>
        </GenderContainer>
        <GenderContainer>
          <Gender>Девушки</Gender>
          <FemalesContainer>
            <ExampleImage $src={women1} $area="q" />
            <ExampleImage $src={women2} $area="w" />
            <ExampleImage $src={women3} $area="e" />
            <ExampleImage $src={women4} $area="r" />
            <ExampleImage $src={women5} $area="t" />
          </FemalesContainer>
        </GenderContainer>
      </ExamplesContainer>
    </Container>
  );
};
