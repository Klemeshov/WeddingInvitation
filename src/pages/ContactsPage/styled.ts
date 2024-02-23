import styled from 'styled-components';
import { CoordIconSVG } from '../../assets/images/CoordIcon';
import { OrgIconSVG } from '../../assets/images/OrgIcon';
import { GroomIconSVG } from '../../assets/images/GroomIcon';

export const Container = styled.div`
  padding: 160px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media (max-width: 1024px) {
    padding: 80px 20px;
    gap: 40px;
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

export const ContactsContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const CoordIcon = styled(CoordIconSVG)`
  width: 78px;
  height: 104px;

  @media (max-width: 1024px) {
    width: 39px;
    height: 52px;
  }
`;

export const OrgIcon = styled(OrgIconSVG)`
  width: 78px;
  height: 104px;

  @media (max-width: 1024px) {
    width: 39px;
    height: 52px;
  }
`;

export const GroomIcon = styled(GroomIconSVG)`
  width: 104px;
  height: 77px;

  @media (max-width: 1024px) {
    width: 52px;
    height: 39px;
  }
`;
