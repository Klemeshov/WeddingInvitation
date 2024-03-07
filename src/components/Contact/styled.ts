import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Container = styled(AnimationOnScroll)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 320px;

  @media (max-width: 1024px) {
    gap: 15px;
    width: 280px;
  }

  @media (max-width: 880px) {
    width: 240px;
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;

export const ImgContainer = styled.span`
  width: 160px;
  height: 160px;
  background: #8e9a9c;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 1024px) {
    gap: 5px;
  }
`;

export const Name = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Job = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  color: #8e9a9c;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Description = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-family:
    Cormorant Garamond,
    serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
    gap: 5px;
  }
`;

export const StyledLink = styled.a`
  color: #160824;
  border-bottom: 1px solid #160824;
  padding-bottom: 2px;
`;
