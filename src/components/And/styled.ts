import styled from 'styled-components';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Container = styled(AnimationOnScroll)<{ $withDelay?: boolean }>`
  position: relative;
  display: inline-block;
  color: #d1cbc8;
  animation-delay: ${({ $withDelay }) => $withDelay && '3s'};
`;
