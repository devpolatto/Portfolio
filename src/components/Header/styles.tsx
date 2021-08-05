import { ReactNode } from 'react';
import styled from 'styled-components';

interface HeaderStyledProps {
    sidebarHidden?: boolean;
    children?: ReactNode;
}


export const HeaderStyled = styled.div<HeaderStyledProps>`
    width: 100%;

    padding: 0.5rem 1rem;  
    position: fixed;
    top: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-background);

    button {
        background: none;
        border: none;
        
        z-index: 11;

        .hamburguer .line{
            width: 35px;
            height: 5px;
            background-color: var(--color-text-primary);
            display: block;
            margin: 8px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }

        #hamburguer-6.is-active{
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
            -webkit-transition-delay: 0.6s;
            -o-transition-delay: 0.6s;
            transition-delay: 0.6s;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        #hamburguer-6.is-active .line:nth-child(2){
            width: 0px;
        }

        #hamburguer-6.is-active .line:nth-child(1),
        #hamburguer-6.is-active .line:nth-child(3){
            -webkit-transition-delay: 0.3s;
            -o-transition-delay: 0.3s;
            transition-delay: 0.3s;
        }

        #hamburguer-6.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
        }

        #hamburguer-6.is-active .line:nth-child(3){
            -webkit-transform: translateY(-13px) rotate(90deg);
            -ms-transform: translateY(-13px) rotate(90deg);
            -o-transform: translateY(-13px) rotate(90deg);
            transform: translateY(-13px) rotate(90deg);
        }
    }

    @media (min-width: 768px) {
        padding: 0.8rem 1rem;
    }

    @media (min-width: 1024px) {
        padding: 0.8rem 3rem;

        button{
            display: none;
        }
    }

`;

export const Logo = styled.h2`
    font-size: 1.5rem;
    line-height: 1rem;

    color: var(--color-text-primary);

    span{
        color: var(--color-theme);
    }

    @media (min-width: 768px){
        font-size: 2rem;
    }
`

export const Nav = styled.nav<HeaderStyledProps>`
    height: 100%;
    width: ${props => props.sidebarHidden === true ? '0' : '80%'};

    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    padding-top: 60px;
    overflow-x: hidden;

    background-color: var(--color-sideNav);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    transition: 0.5s ease-in-out;

    @media (min-width: 500px){
        width: ${props => props.sidebarHidden === true ? '0' : '50%'};
    }

    @media (min-width: 1024px) {
        flex-direction: row;

        width: auto;
        padding: 0;
        position: relative;
        z-index: none;

        background-color: transparent;
    }
`

export const NavItems = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li{
        width: auto;
        margin-top: 0.5rem;

        display: flex;
        flex-direction: row;
        justify-content: center;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 144px;
            height: 50px;
            font-family: 'Roboto';
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 0;
            /* padding: 1.5rem 1rem; */

            text-decoration: none;
            text-transform: uppercase;

            position: relative;
            overflow:hidden;

            color: ${props => props.theme.text_primary};
            
            &:after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 4px;
                /* background: ${props => props.theme.text_spanDot}; */
                background: linear-gradient(90deg, rgba(2,0,36,0.4598214285714286) 19%, rgba(145,249,229,1) 69%);
                border-radius: 90px;
                transition: 0.5s;
            }

            &:hover{
                &:after{
                    width: 80%;
                    left: 0;
                }
            }
        }

        @media (min-width: 768px) {
            margin-top: 0;
        }
    }

    @media (min-width: 1023px) {
        gap: 10px;
        flex-direction: row;

        .checkbox{
            margin-left: 1.75rem;
            margin-top: 0;
        }
    }
`