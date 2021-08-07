import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between; 

    @media (min-width: 1140px){
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
`;

export const Content = styled.div`
    width: 100%;
    height:100%;

    display: flex;
    flex-direction: column; 
    justify-content: space-between;
    align-items: center;
    
    padding: 1rem 0.5rem; 

    @media (min-width: 1140px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0;

        margin-top: 32px;

        max-width: 1900px;
    }
`

export const Avatar = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 8px;

    margin: 8px 0;

    img{
        height: 180px;
        width: 180px;
        border-radius: 50%;

        box-shadow: 0 0 0 10px #10071D, 
        0 0 0 15px var(--color-theme), 
        0 0 0 10px rgb(209 148 148 / 0%), 
        0 0 0 10px rgb(230 179 179 / 0%), 
        0 0 0 10px rgb(245 214 214 / 0%);
    }

    @media (min-width: 1140px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        img{
            width: 380px;
            height:380px;
            padding: 0;

            box-shadow: 0 0 0 14px #10071D, 
            0 0 0 20px var(--color-theme), 
            0 0 0 10px rgb(209 148 148 / 0%), 
            0 0 0 10px rgb(230 179 179 / 0%), 
            0 0 0 10px rgb(245 214 214 / 0%);
        }
    }
`
export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    p{
        max-width: 800px;
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        color: var(--color-text-primary);
        text-align: left;
    }

    @media (min-width: 1140px){
        display: flex;
        flex: 1;
        gap: 16px;
        align-items: flex-start;

        margin-top: 0;

        p{
        font-size: 16px;
        
        }
    }
`

export const Technologies = styled.div`
    width: 100%;
    height: auto;

    margin-top: 16px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:0.4rem;

    @media (min-width: 1140px){
        margin-top: 0;
        justify-content: flex-start;
        gap: 1rem;
    }
`