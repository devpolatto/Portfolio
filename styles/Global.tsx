import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`

    :root {
        --color-background: #10071D;
        --color-theme: #30FDFF;
        --color-sideNav: #1B0C31;
        --color-text-primary: #fff;
        --color-text-secundary: #1B0C31;
        --color-text-tertiary: #090410;
        --color-text-title: #30FDFF;
        --close-btn: #F71735;
        --color-cardbox: #1e0b32;
        
    }

  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', 'Poppins', sans-serif;

        background-color: var(--color-background);

        width: 100%;
        height: 100%;
    }

    body #__next{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ul{
        list-style: none;
    }
`;
