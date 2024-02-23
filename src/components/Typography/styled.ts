import styled, { css } from 'styled-components';

export const Container = styled.div<{
  $variant: 'cormorantRegular' | 'cormorantMedium' | 'my';
  $size: number;
}>`
  ${({ $variant, $size }) => {
    switch ($variant) {
      case 'my':
        return css`
          font-family: MyFont, serif;
          font-weight: 400;
          font-size: ${$size}px;
          line-height: ${$size}px;
        `;
      case 'cormorantMedium':
        return css`
          font-family:
            Cormorant Garamond,
            serif;
          font-weight: 500;
          font-size: ${$size}px;
          line-height: ${$size}px;
        `;
      case 'cormorantRegular':
      default:
        return css`
          font-family:
            Cormorant Garamond,
            serif;
          font-weight: 400;
          font-size: ${$size}px;
          line-height: ${$size}px;
        `;
    }
  }}
`;
