import React, { useContext, useState } from 'react';
import Link from 'next/link';

import { HeaderStyled, Nav, NavItems, Logo } from './styles';

type HeaderType = {
    theme: object;
    handleTheme?: () => void;
}

function Header({ theme }: HeaderType) {

    const [isOpen, setIsOpen] = useState(true);
    const [isActiveButton, setIsActiveButton] = useState(false);

    function showSideBar() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)
        isActiveButton === true ? setIsActiveButton(false) : setIsActiveButton(true)
        console.log(isOpen)
    }

    return (
        <HeaderStyled>
            <Logo className="logo">
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
            <Nav sidebarHidden={isOpen} >
                <NavItems >
                    <li><Link href="/" scroll>Home</Link></li>
                    <li><Link href="/#about-me">Who i am</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    {/* <div className="checkbox">
                        <input onClick={() => handleTheme()} type="checkbox" id="switch" />
                        <label htmlFor="switch" />
                    </div> */}
                </NavItems>
            </Nav>
        </HeaderStyled>
    );
}

export default Header;