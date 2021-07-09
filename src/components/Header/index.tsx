import React, { useState } from 'react';
import Link from 'next/link';

import { HeaderStyled, Nav, NavItems, Logo } from './styles';

import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isActiveButton, setIsActiveButton] = useState(false);
    const { theme, handleSetTheme } = useTheme();

    function showSideBar() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)
        isActiveButton === true ? setIsActiveButton(false) : setIsActiveButton(true)
        console.log(isOpen)
    }

    return (
        <HeaderStyled theme={theme}>
            <Logo theme={theme} className="logo">
                Polatto<span>.</span>dev
            </Logo>
            <button onClick={showSideBar}>
                <div
                    className={`hamburger ${isActiveButton === true ? 'is-active' : ''}`}
                    id="hamburger-6">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </button>
            <Nav sidebarHidden={isOpen} theme={theme}>
                <NavItems theme={theme}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="#about-me">Skills</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contato</Link></li>
                    <div className="checkbox">
                        <input onClick={handleSetTheme} type="checkbox" id="switch" />
                        <label htmlFor="switch" />
                    </div>
                </NavItems>
            </Nav>
        </HeaderStyled>
    );
}

export default Header;