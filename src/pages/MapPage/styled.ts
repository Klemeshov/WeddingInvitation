import styled from 'styled-components';
import { Map } from '@pbe/react-yandex-maps';
import { LocationSVG } from '../../assets/images/Location';

export const Container = styled.div`
  padding: 120px 20px 0 20px;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding-top: 90px;
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

  @media (max-width: 1024px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const When = styled.div`
  font-family: MyFont, serif;
  font-size: 200px;
  line-height: 200px;
  font-weight: 400;
  text-align: center;
  margin-top: 40px;

  @media (max-width: 1024px) {
    font-size: 80px;
    line-height: 80px;
    margin-top: 20px;
  }
`;

export const Where = styled.div`
  font-family:
    Cormorant Garamond,
    serif;
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;
  margin: 40px 20px 0 20px;

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StyledMap = styled(Map)`
  position: relative;
  width: 100%;
  height: 540px;
  margin-top: 30px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 #1309221a;

  @media (max-width: 1024px) {
    height: 480px;
  }

  a {
    display: none !important;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  bottom: 60px;
  right: 50px;
  z-index: 100;
  background: #f5f5f5;
  padding: 24px;
  border-radius: 100px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 1024px) {
    padding: 16px;
    right: 16px;

    &:active {
      transform: scale(0.9);
    }
  }
`;

export const Location = styled(LocationSVG)`
  width: 36px;
  height: 36px;

  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;
