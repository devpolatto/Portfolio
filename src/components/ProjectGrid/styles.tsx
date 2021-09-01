import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;

    padding: 32px 8px;    

    ::-webkit-scrollbar{
            width: 2px;
        }
    ::-webkit-scrollbar-thumb{
        background-color: var(--color-theme);
        border-radius: 4px;
    }

    @media (min-width: 768px){
        margin-top: 16px;

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: var(--color-theme);
            border-radius: 4px;
        }
        
    }

    @media (min-width: 1023px){
        height: 75vh;
        align-items: center;

        margin-bottom: 32px;

        padding: 32px 0;
        height: 100%;
    }

    @media (min-width: 2000px){
        ::-webkit-scrollbar{
            width: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: var(--color-theme);
            border-radius: 4px;
        }
    }
`;

export const WrapperContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;

    @media (min-width: 768px){
        column-gap: 24px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1124px){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 40px;
        row-gap: 28px;
    }
`
