import React from 'react';
import {
  ContactsBlock,
  Container,
  Description,
  ImgContainer,
  InfoContainer,
  Job,
  Name,
  StyledLink
} from './styled';

export type ContactProps = {
  img: React.ReactNode;
  name: string;
  job: string;
  description: string;
  tgLabel: string;
  tgLink: string;
  phone: string;
  phoneLink: string;
};

export const Contact = ({
  img,
  phoneLink,
  tgLink,
  phone,
  job,
  tgLabel,
  description,
  name
}: ContactProps) => {
  return (
    <Container>
      <ImgContainer>{img}</ImgContainer>
      <InfoContainer>
        <Name>{name}</Name>
        <Job>{job}</Job>
      </InfoContainer>
      <Description>{description}</Description>
      <ContactsBlock>
        <span>
          tg: <StyledLink href={tgLink}>{tgLabel}</StyledLink>
        </span>
        <span>
          <StyledLink href={phoneLink}>{phone}</StyledLink>
        </span>
      </ContactsBlock>
    </Container>
  );
};
