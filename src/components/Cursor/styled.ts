import { createGlobalStyle } from 'styled-components';
import { StyledMap } from '../../pages/MapPage/styled';

export const Heart = createGlobalStyle`
    #cursor {
        position: absolute;
        width: 25px;
        height: 22px;
        z-index: 10000;
        pointer-events: none;

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 0;
            width: 13px;
            height: 20px;
            border-radius: 12px 12px 0 0;
            background: rgb(188, 188, 188);
        }

        &::before {
            left: 12px;
            transform: rotate(-45deg);
            transform-origin: 0 100%;
        }

        &::after {
            left: 0;
            transform: rotate(45deg);
            transform-origin: 100% 100%;
        }
    }
    
    a, button, body {
        cursor: none;
    }

    body:has(a:hover) #cursor, body:has(button:hover) #cursor {
        display: block !important;
        &::before,
        &::after {
            background: rgb(255, 188, 188);
        }
    }
    
    body:has(${StyledMap}:hover) #cursor {
        display: none;
    }
`;
