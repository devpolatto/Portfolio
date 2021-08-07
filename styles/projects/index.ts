import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 0 16px 0 ;

  border: 1px solid red;
`;

export const ProjectGrid = styled.div`
    width: 100%;
    max-width: 2000px;
    height: 100%;
    max-height: 100vh;

    overflow-y: scroll;
    border: 1px solid blue;

    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;

    padding: 1rem;
    place-content: start; 
    
    cursor: default;


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

    @media (min-width: 1440px){
        grid-template-columns: repeat(3, minmax(0, 1fr));
        max-width: 2000px;
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

`



export const SeeMoreFooter = styled.footer`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;
    text-decoration: none;
    
    .see-more{
        display: flex;
        align-items: center;
        gap: 16px;

        padding: 0.5rem 0.8rem;

        background-color: transparent;
        
        color: var(--color-text-primary);
        border: 2px solid var(--color-theme);
        border-radius: 8px;

        font-size: 1rem;
        cursor: pointer;

        transition: 0.4s ease-in-out;

        .githubicon{
            background: transparent;
            width: 28px;
            height: 28px;
        }
    }

    &:hover{
        .see-more{
            background-color: var(--color-theme);
            color: var(--color-text-secundary);
        }
    }
    
    @media (min-width: 768px) {
        bottom: 16px;
        font-size: 1.8rem;

        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 10;

        .see-more{
            font-size: 1.6rem;
            padding: 0.8rem 2rem;

            border: 4px solid var(--color-theme);;

            .githubicon{
                height: 32px;
                width: 32px;
            }

        }
    }

    @media (min-width:800px){
        bottom: 4px;
    }


`