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

    margin-bottom: 36px;

    @media (min-width: 1024px){
        flex: 1;
    }
`

export const Title = styled.div`
    position: relative;

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

    .cursor{
        display: inline-block;
        background-color: var(--color-theme);
        margin-left: 0.3rem;
        width: 2px;
        animation: blink 1s infinite;

        @keyframes blink {
            0%  { background-color: var(--color-theme); }
            49% { background-color: var(--color-theme); }
            50% { background-color: transparent; }
            99% { background-color: transparent; }
            100%  { background-color: var(--color-theme); }
        }
    }

    .typing{
        animation: none;
    }

    h3:nth-child(2){
        margin-left:20px;
    }

    h3:nth-child(3){
        margin-top: 4px;
        margin-left: 40px;
    }

    * {
        animation: showText 4s;

        @keyframes showText{
            0%{
                opacity: 0;
            }
            100%{
                opacity: 1;
            }
        }
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

        .cursor{
            height: 20px;
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