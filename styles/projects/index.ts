import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 100px 0 16px 0 ;
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

export const Project = styled.a`
    width: 100%;
    height: 140px;

    display: flex;
    justify-content: space-between;
    border-radius: 8px;

    text-decoration: none;

    background-color: ${props => props.theme.cardbox};

    -webkit-box-shadow: 0px 9px 11px 0px rgba(0,0,0,0.8); 
    box-shadow: 0px 9px 11px 0px rgba(0,0,0,0.8);

    transition: .2s ease-in-out 0s;

    @media (min-width: 768px){
        width: 600px;
        height: 250px;
        border-radius: 8px;

        &:hover{
            transform: scale(0.9);
        }
    }
`

export const ProjectDescription = styled.div`
    width: 100%;
    height: 100%;

    padding: 0.8rem 0 0.8rem 0.8rem;

    display: flex;
    flex-direction: column;

    border-radius: 8px 0 0 8px;

    @media (min-width: 768px){
        gap: 1rem;
    }

`

export const ProjectTitle = styled.div`
    color: ${props => props.theme.text_primary};

    font-size: 1.2rem;
    font-weight: 400;

    @media (min-width: 768px){
        font-size: 2rem;
        font-weight: 700;
    }
`

export const Description = styled.div`
    color: ${props => props.theme.text_primary};

    max-width: 90%;
    word-wrap: break-word;
    font-size: 0.8rem;
    font-weight: 100;

    white-space: wrap;
    text-overflow: clip ellipsis;

    @media (min-width: 768px){
        font-size: 1rem;
        font-weight: 100;
    }
`


export const ProjectPreview = styled.div`

    height: 100%;
    border-radius: 0 4px 4px 0;

    img{
        width: 150px;
        height: 140px;
        border-radius: 0 4px 4px 0;
    }

    @media (min-width: 768px){

        img{
            width: 300px;
            height: 250px;
            border-radius: 0 8px 8px 0;
        }

    }
`
