import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`

    :root {
        --color-background: #10071D;
        --color-theme: #91F9E5;
        --color-sideNav: #1B0C31;
        --color-text-primary: #fff;
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

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    ul{
        list-style: none;
    }
`;
