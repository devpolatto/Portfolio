import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-bottom: 36px;

    z-index: 0;  

    position: relative;

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

    margin-bottom: 20px;

    @media (min-width: 1024px){
        flex: 1;
    }
`

export const Title = styled.div`
    position: relative;
    
    @media (min-width: 500px){
        h1{
            font-size: 3.87rem;
        }

        h3{
            font-size: 1.3rem;
        }
    }


`

export const Name = styled.h1`
    font-family: 'Roboto';
    font-size: 3rem;
    font-weight: bold;

    margin-bottom: 8px;
    /* color: var(--color-text-primary); */
    

    @media (min-width: 500px){
        h1{
            font-size: 3.87rem;
        }
    }


`

export const TitleStack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 8px;

    span {
        width: 10px;
        height: 10px;
        background: #30FDFF;
        transform: rotate(-135deg);
    }

`

export const Skill = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    color: var(--color-text-primary);

    @media (min-width: 500px){
        h3{
            font-size: 1.3rem;
        }
    }
`

export const ImagePik = styled.div`
    display: flex;
    justify-content: center;
    width: 350px;
    height: 350px;
    z-index: 1;

    animation: adjustHeight 1.5s;

    img{
        z-index: 2;
        position: relative;
        animation: mymove 2.7s;
    }

    // Habilitando o Efieto apenas em dispositivos Mobile
    @media (max-width: 768px){
        @keyframes adjustHeight{
            0%{
                height: 500px;
            }
            100%{
                height: 350px;
            }
        }

        @keyframes mymove {
            0% {
                opacity: 0;
                top: 150px;
            }
            100%{
                opacity: 1;
                top: 0;
            }
        }
    }

    @media (min-width: 500px){
        width: 400px;
        height: 400px;

        @keyframes adjustHeight{
            0%{
                height: 300px;
            }
            100%{
                height: 600px;
            }
        }

        @keyframes mymove {
            0% {
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
        
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

export const ChevronDownContainer = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    
    position: relative;

    .ChevronDown{
        height:36px;
        width:36px;
        position: absolute;
    }


    .ChevronDown1{
        top: 4px;
        animation: mydown 2s infinite;
        animation-delay: 2.9s;

        @keyframes mydown{
            0%{
                opacity: 0;
            }
            50%{
                opacity: 1;
                color: var(--color-theme);
            }
            100%{
                opacity: 0.1;
            }
        }
    }

    .ChevronDown2{
        top: 20px;
        animation: mydown 2s infinite;
        animation-delay: 3.1s;

        @keyframes mydown{
            0%{
                opacity: 0;
            }
            50%{
                opacity: 1;
                color: var(--color-theme);
            }
            100%{
                opacity: 0.1;
            }
        }
    }

    .ChevronDown3{
        top: 36px;
        animation: mydown 2s infinite;
        animation-delay: 3.3s;

        @keyframes mydown{
            0%{
                opacity: 0;
            }
            50%{
                opacity: 1;
                color: var(--color-theme);
            }
            100%{
                opacity: 0.1;
            }
        }
    }
    
    @media (min-width: 1024px){
        display: none;
    }
`