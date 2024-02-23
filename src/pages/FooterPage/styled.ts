import styled from 'styled-components';
import BG from '../../assets/images/footer-bg.png';
import BGsm from '../../assets/images/footer-bg-sm.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 56px;
  line-height: 56px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const OurNames = styled.div`
  font-family: MyFont, serif;
  font-size: 200px;
  font-weight: 400;
  line-height: 220px;
  text-align: center;

  margin-top: 40px;

  @media (max-width: 1024px) {
    font-size: 80px;
    line-height: 80px;

    margin-top: 20px;
  }
`;

export const And = styled.span`
  color: #d1cbc8;
`;

export const Footer = styled.div`
  background: url(${BG}) center center;
  width: 100%;
  height: 450px;

  @media (max-width: 1024px) {
    background: url(${BGsm}) center center;
    height: 420px;
  }
`;
