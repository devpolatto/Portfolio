import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 75vh;
    max-width: 2000px;

    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 32px 16px 16px 16px;
    place-content: start; 
    
    cursor: default;

    ::-webkit-scrollbar{
            width: 2px;
        }
    ::-webkit-scrollbar-thumb{
        background-color: var(--color-theme);
        border-radius: 4px;
    }

    @media (min-width: 768px){
        margin-top: 16px;

        grid-template-columns: repeat(2, minmax(0, 1fr));

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: var(--color-theme);
            border-radius: 4px;
        }
        
    }

    @media (min-width: 1023px){
        width: auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 46px;

        align-items: center;

        margin-bottom: 32px;

        padding: 0 auto;
        height: 68vh; 
        height: 100%;
    }

    @media (min-width: 1195px){
        justify-content: flex-start;
    }

    @media (min-width: 1440px){
        width: auto;
        max-width: 2000px;
        /* height: 100vh;  */
    }

    @media (min-width: 1780px){
        justify-content: center;
    }

    @media (min-width: 2000px){
        width: auto;
        ::-webkit-scrollbar{
            width: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: var(--color-theme);
            border-radius: 4px;
        }
    }
`;
