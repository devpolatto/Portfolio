import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    margin: 20px;
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        padding: 0.7rem;


        border: 2px solid var(--color-theme);
        border-radius: 4px;

        background: transparent;
        color: var(--color-text-primary);

        text-decoration: none;
        text-align: center;

        transition: 0.4s ease-in-out;

        .icon{
            background-color: transparent;
            width: 26px;
            height: 26px;
        }

        &:hover{
            background-color: var(--color-theme);
            color: var(--color-text-secundary);
        }
    }

    @media (min-width: 768px){
        .icon{
            height: 32px;
            width: 32px;
        }
    }

    @media (min-width: 1140px){
        a{
            border-width: 4px; 
            border-radius: 8px;
            padding: 0.8rem 2rem;

            font-size: 1.4rem;
        }
    }
`;
