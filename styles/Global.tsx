import { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`

  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', 'Poppins', sans-serif;

        background-color: ${props => props.theme.background};

        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

`;
