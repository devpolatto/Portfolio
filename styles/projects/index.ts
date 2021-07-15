import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 80px 0 16px 0 ;
`;

export const ProjectGrid = styled.div`
    width: 100%;
    max-width: 2000px;
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

        margin-top: 16px;

        grid-template-columns: repeat(2, minmax(0, 1fr));

        ::-webkit-scrollbar{
            width: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background-color: #383a59;
            border-radius: 4px;
        }
        
    }

    @media (max-width: 1440px){
        max-width: 1300px;
    }


    @media (min-width: 2000px){
        grid-template-columns: repeat(3, minmax(0, 1fr));

        gap: 0;

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

    -webkit-box-shadow: 0px 6px 16px 0px rgba(0,0,0,0.8); 
    box-shadow: 0px 6px 16px 0px rgba(0,0,0,0.4);

    transition: .2s ease-in-out 0s;

    @media (min-width: 767px){
        width: 360px;
        height: 200px;
        border-radius: 8px;

        &:hover{
            transform: scale(0.9);
        }
    }

    @media (min-width: 1024px){
        width: 480px;
    }

    @media (min-width: 1440px){
        width: 600px;
        height: 240px;
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
        font-size: 1.4rem;
        font-weight: 700;
    }

    @media (min-width: 1440px){
        font-size: 1.8rem;
    }
`

export const Description = styled.div`
    color: ${props => props.theme.text_primary};

    max-width: 90%;
    word-wrap: break-word;
    font-size: 0.8rem;
    font-weight: 400;

    /* white-space: wrap;
    text-overflow: clip ellipsis; */

    @media (min-width: 768px){
        font-size: 1rem;
    }

    @media (min-width: 1440px){
        font-size: 1.3rem;
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

    @media (min-width: 767px){

        img{
            width: 300px;
            height: 200px;
            border-radius: 0 8px 8px 0;
        }

    }

    @media (min-width: 1024px){
       img{
           width: 340px;
       }
    }

    @media (min-width: 1440px){
        width: 400px;
        img{
            height: 240px;
        }
    }
`

export const SeeMoreFooter = styled.footer`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    justify-content: center;
    text-decoration: none;

    &:hover{
        .see-more{
            background-color: ${props => props.theme.textHoverPrimary};
            color: ${props => props.theme.textSeeMoreButton};
        }
    }
    
    .see-more{
        display: flex;
        align-items: center;
        gap: 16px;

        padding: 0.5rem 0.8rem;

        background-color: transparent;

        border: 2px solid ${props => props.theme.borderSeeMoreButton};
        border-radius: 8px;

        cursor: pointer;
        color: ${props => props.theme.text_primary};
        font-size: 1rem;

        transition: 0.4s ease-in-out;

        .githubicon{
            background: transparent;
            width: 28px;
            height: 28px;
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

            border: 4px solid ${props => props.theme.borderSeeMoreButton};

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