import styled from 'styled-components';

export const Container = styled.a`
    width: 100%;
    height: 140px;

    display: flex;
    justify-content: space-between;
    border-radius: 8px;

    text-decoration: none;

    background-color: var(--color-cardbox);

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
        width: 560px;
        height: 240px;
    }
`;

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
    color: var(--color-text-primary);

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
    color: var(--color-text-primary);

    max-width: 90%;
    word-wrap: break-word;
    font-size: 0.8rem;
    font-weight: 400;

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