import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 75vh;
    max-width: 2000px;

    overflow-y: scroll;

    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;

    padding: 1rem;
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
        place-content: start; 
        place-items: center;

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

    @media (min-width: 1024px){
        height: 68vh; 
    }

    @media (min-width: 1440px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
        max-width: 2000px;
        height: 70vh; 
    }

    @media (min-width: 2000px){
        grid-template-columns: repeat(3, minmax(0, 1fr));

        gap: 0;

        ::-webkit-scrollbar{
            width: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: var(--color-theme);
            border-radius: 4px;
        }
    }
`;
