import React, { useState } from 'react';
import Link from 'next/link';

import { HeaderStyled, Nav, NavItems, Logo } from './styles';

function Header() {

    const [isOpen, setIsOpen] = useState(true);
    const [isActiveButton, setIsActiveButton] = useState(false);

    function showSideBar() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)
        isActiveButton === true ? setIsActiveButton(false) : setIsActiveButton(true)
    }

    return (
        <HeaderStyled>
            <Logo className="logo">
                Polatto<span>.</span>dev
            </Logo>
            <button onClick={showSideBar}>
                <div id="hamburger-6" className={`hamburger ${isActiveButton === true ? 'is-active' : ''}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </button>
            <Nav sidebarHidden={isOpen} >
                <NavItems >
                    <li onClick={showSideBar}><Link href="/" scroll>início</Link></li>
                    <li onClick={showSideBar}><Link href="/#about-me">Sobre mim</Link></li>
                    <li onClick={showSideBar}><Link href="/projects">Projetos</Link></li>
                </NavItems>
            </Nav>
        </HeaderStyled>
    );
}

export default Header;