import { ReactNode } from 'react';
import styled from 'styled-components';

interface HeaderStyledProps {
    sidebarHidden?: boolean;
    children?: ReactNode;
}

export const Container = styled.div`
    width: 100%;
`


export const HeaderStyled = styled.div<HeaderStyledProps>`
    width: 100%;
    max-width: 1380px;

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

        .hamburger .line{
            width: 35px;
            height: 5px;
            background-color: #30FDFF;
            display: block;
            margin: 8px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
        }
        #hamburger-6.is-active{
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
        #hamburger-6.is-active .line:nth-child(2){
            width: 0px;
        }
        #hamburger-6.is-active .line:nth-child(1),
        #hamburger-6.is-active .line:nth-child(3){
            background-color: var(--close-btn);
            -webkit-transition-delay: 0.3s;
            -o-transition-delay: 0.3s;
            transition-delay: 0.3s;
        }
        #hamburger-6.is-active .line:nth-child(1){
            -webkit-transform: translateY(13px);
            -ms-transform: translateY(13px);
            -o-transform: translateY(13px);
            transform: translateY(13px);
        }
        #hamburger-6.is-active .line:nth-child(3){
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

        height: 66px;
        padding: 0.8rem 3rem;

        button{
            display: none;
        }
    }

`;

export const Logo = styled.h2`
    font-size: 1.5rem;
    line-height: 1rem;

    color: #30FDFF;

    @media (min-width: 768px){
        font-size: 1.4rem;
    }
`

export const Nav = styled.nav<HeaderStyledProps>`
    height: 100vh;
    width: ${props => props.sidebarHidden === true ? '0' : '80%'};

    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    padding-top: 60px;
    overflow-x: hidden;

    background: hsl(0 0% 100% / 0.1);
    backdrop-filter: blur(1.8rem);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    transition: 0.5s ease-in-out;

    overflow-y: hidden ;

    @media (min-width: 500px){
        width: ${props => props.sidebarHidden === true ? '0' : '50%'};
    }

    @media (min-width: 1024px) {

        height: 100%;
        flex-direction: row;

        /* border: 1px solid red; */

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
    align-items: left;

    padding-left: 2rem;

    li{
        width: auto;
        margin-top: 0.5rem;

        display: flex;
        flex-direction: row;
        justify-content: left;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: left;

            height: 50px;
            
            font-family: 'Roboto';
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 0;

            text-decoration: none;
            text-transform: uppercase;

            position: relative;
            overflow:hidden;

            color: var(--color-text-primary);
            
            &:after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 4px;
                /* background: ${props => props.theme.text_spanDot}; */
                background: linear-gradient(90deg, rgba(2,0,36,0.4598214285714286) 19%, #30FDFF 69%);
                border-radius: 90px;
                transition: 0.5s;
            }

            &:hover{
                &:after{
                    width: 80%;
                    left: 0;
                }
            }
            
            @media (min-width: 1024px) {
                width: auto;
                margin-top: 0;
                font-size: 0.9rem;

                color: #30FDFF;

                &:nth-child(5){
                    margin-top: 0;
                }
            }

        }

        &:nth-child(5){
            margin-top: 30px;
        }

        @media (min-width: 768px) {
            margin-top: 0;
        }

        @media (min-width: 1024px) {
            width: auto;
            margin-top: 0;
            font-size: 0.9rem;

            &:nth-child(5){
                margin-top: 0;
            }
        }
    }

    @media (min-width: 1024px) {
        gap: 10px;
        flex-direction: row;

        .checkbox{
            margin-left: 1.75rem;
            margin-top: 0;
        }
    }
`