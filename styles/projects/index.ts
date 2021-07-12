import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;
`;

export const ProjectGrid = styled.div`
    width: 100%;
    max-width: 1980px;
    height: 100%;
    max-height: 100vh;

    overflow-y: scroll;

    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    padding: 1rem;
    place-content: start; 
    
    cursor: default;


    @media (min-width: 768px){
        place-content: start; 
        place-items: center;

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
        
    }

    @media (min-width: 1024px){
        grid-template-columns: repeat(2, minmax(0, 1fr));

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
    }

    @media (min-width: 1750px){
        grid-template-columns: repeat(3, minmax(0, 1fr));

        ::-webkit-scrollbar{
            width: 8px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
    }

`

export const Project = styled.div`
    width: 100%;
    height: 140px;

    display: flex;
    justify-content: space-between;
    border: 2px solid ${props => props.theme.border_card_project};
    border-radius: 8px;

    background-color: #1e0b32;

    img{
        width: 250px;
        height: 100%;
    }

    @media (min-width: 768px){
        width: 600px;
        height: 280px;
        border-radius: 8px;
    }
`

export const ProjectDescription = styled.div`
    width: 100%;
    height: 100%;

    padding: 0.8rem 0 0.8rem 0.8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 8px 0 0 8px;

`

export const ProjectTitle = styled.div`
    color: #fff;

    font-size: 1.2rem;
    font-weight: 300;

    @media (min-width: 768px){
        font-size: 2rem;
        font-weight: 700;
    }
`

export const Description = styled.div`
    color: #fff;

    

    max-width: 90%;
    word-wrap: break-word;
    font-size: 0.8rem;
    font-weight: 100;

    white-space: wrap;
    text-overflow: clip ellipsis;

    a{
        text-decoration: none;

        width: 20px;
        height: 20px;

        .icon-open-project{
            width: 100%;
            height: 100%;

            &:hover{
                color: red;
            }
        }


    }

    @media (min-width: 768px){
        font-size: 1rem;
        font-weight: 100;
    }
`

export const ProjectLink = styled.div`
    color: #fff;
`

export const ProjectPreview = styled.div`

    border-radius: 0 4px 4px 0;

    img{
        width: 130px;
        height: 100%;

        border-radius: 0 4px 4px 0;
    }

    @media (min-width: 768px){
        img{
            width: 250px;
            height: 100%;

            border-radius: 0 8px 8px 0;
        }
    }
`