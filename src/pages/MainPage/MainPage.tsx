import React from 'react';
import { ChevronText } from '../../components/ChevronText';
import {
  Container,
  ImgContainer,
  Invite,
  LeftArrow,
  LeftArrowContainer,
  LeftArrowTitle,
  LeftBreath,
  OurNames,
  RightArrow,
  RightArrowContainer,
  RightArrowDescription,
  RightArrowTexts,
  RightArrowTitle,
  RightBreath,
  StyledImg
} from './styled';
import photo from '../../assets/images/photo.png';
import breath from '../../assets/images/breath.png';
import { And } from '../../components/And';

export const MainPage = ({ name }: { name: string }) => {
  return (
    <Container>
      <ChevronText>{name},</ChevronText>
      <Invite>Приглашаем вас на свадьбу</Invite>
      <OurNames>
        Дарьи <And withDelay /> Дмитрия
      </OurNames>
      <ImgContainer>
        <StyledImg src={photo} alt="photo" />
        <LeftArrowContainer>
          <LeftArrow />
          <LeftArrowTitle>Невеста Даша</LeftArrowTitle>
        </LeftArrowContainer>
        <RightArrowContainer>
          <RightArrow />
          <RightArrowTexts>
            <RightArrowTitle>Жоних Дима</RightArrowTitle>
            <RightArrowDescription>(не перепутайте)</RightArrowDescription>
          </RightArrowTexts>
        </RightArrowContainer>
      </ImgContainer>

      <LeftBreath src={breath} />
      <RightBreath src={breath} />
    </Container>
  );
};
