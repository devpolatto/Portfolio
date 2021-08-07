import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 84vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-top: 24px;

    z-index: 0;  

    @media (min-width: 1024px){
        height: 88vh;
        padding-top: 0;

        flex-direction: row;
        gap: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;;
    align-items: center;

    margin-bottom: 24px;

    @media (min-width: 1024px){
        flex: 1;
    }
`

export const Title = styled.div`

    h1, h3{
        font-style: italic;
        font-family: 'Roboto';
    }

    h1{
        font-size: 3rem;
        font-weight: 700;
        line-height: 100%;
        margin-bottom: 8px;
        color: var(--color-theme);
    }

    h3{
        line-height: 1rem;
        font-weight: 500;
        color: var(--color-text-primary);

        span{
            color: var(--color-theme);
        }
    }

    h3:nth-child(2){
        margin-left:20px;
    }

    h3:nth-child(3){
        margin-top: 4px;
        margin-left: 40px;
    }

    
    @media (min-width: 500px){
        h1{
            font-size: 3.87rem;
        }

        h3{
            font-size: 1.3rem;
        }
    }

    @media (min-width: 1024px){
        margin-bottom: 0;

        h3:nth-child(2){
            margin-left: 25px;
            margin-top: 10px;
        }

        h3:nth-child(3){
            margin-top: 8px;
            margin-left: 46px;
        }
    }

    @media (min-width: 1440px){
        h1{
            font-size: 7rem;
        }

        h3{
            font-size: 2rem;
        }

        h3:nth-child(2){
            margin-left: 45px;
            margin-top: 16px;
        }

        h3:nth-child(3){
            margin-top: 16px;
            margin-left: 76px;
        }
    }
`

export const ImagePik = styled.div`
    display: flex;
    justify-content: center;
    width: 350px;
    height: 350px;

    @media (min-width: 500px){
        width: 400px;
        height: 400px;
    }

    @media (min-width: 1024px){
        width: 500px;
        height: 500px;
        flex: 1;
    }

    @media (min-width: 1300px){
        width: 600px;
        height: 600px;
    }
`