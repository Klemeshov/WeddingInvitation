import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    aside, nav, footer, header, section, main {
        display: block;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    /* Form */

    input, textarea, button, select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
    }


    button, input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        cursor: pointer;
    }

    input:focus, input:active,
    button:focus, button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }
`;
