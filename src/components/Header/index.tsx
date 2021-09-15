import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import {useRouter} from 'next/router'
import { useColorMode } from "@chakra-ui/color-mode";
import { 
    Heading, 
    Flex, 
    Box,
    Container,
    Link,
    useMediaQuery,
    Divider,
    Text
} from '@chakra-ui/react';
import { Spacer, Stack, HStack } from '@chakra-ui/layout';
import { IconButton, IconButtonProps } from '@chakra-ui/button'
import { FaSun, FaMoon } from 'react-icons/fa'


import { HeaderStyled, Nav, NavItems, Logo } from './styles';

function Header() {

    const [isOpen, setIsOpen] = useState(true);
    const [isActiveButton, setIsActiveButton] = useState(false);

    function showSideBar() {
        isOpen === false ? setIsOpen(true) : setIsOpen(false)
        isActiveButton === true ? setIsActiveButton(false) : setIsActiveButton(true)
    }

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isLargerThan768px] = useMediaQuery("(min-width: 768px)")

    const router = useRouter()
    const isRouteHomeActive = router.pathname === '/'   
    const isRouteProjectsActive = router.pathname === '/projects'
    const isRouteAboutActive = router.pathname === '#about-me'

    useEffect(() => {
        console.log('media:' + isLargerThan768px)
    },[isLargerThan768px])
    
    return (
            <Container w="full" maxW="container.xl"py="4">
                <Flex w="100%" align="center" justifyContent="space-between">
                    <Heading>
                        Polatto<span>.</span>dev
                    </Heading>
                    <Flex w="auto" align="center"  justifyContent="space-between" px="1">
                        
                        <HStack spacing={14}>
                            <Link onClick={() => router.push('/')}>
                                <Text
                                    color={isRouteHomeActive && isDark  ? '#7CFFC4' : colorMode}
                                    fontSize={isLargerThan768px ? '2xl' : 'md'}
                                    fontWeight="semibold" 
                                    textTransform="uppercase"
                                    // textDecorationLine="unset"
                                    // textDecoration="unset"
                                >Inicio</Text>
                            </Link>

                            <Link 
                                color={isRouteAboutActive && isDark ? '#7CFFC4' : colorMode}
                                fontSize={isLargerThan768px ? '2xl' : 'md'}
                                fontWeight="semibold"
                                textTransform="uppercase"
                                textDecorationLine="none"
                                textDecoration="none"
                                onClick={() => router.push('/#about-me')}
                            >   Sobre Mim
                            </Link>

                            <Link 
                                color={isRouteProjectsActive  && isDark ? '#7CFFC4' : colorMode}
                                fontSize={isLargerThan768px ? '2xl' : 'md'}
                                fontWeight="semibold"
                                textTransform="uppercase"
                                onClick={() => router.push('/projects')}
                            > Projetos
                            </Link>
                        </HStack>
                        <IconButton 
                            ml={8} 
                            fontSize={20}
                            icon={isDark ? <FaSun /> : <FaMoon />} 
                            isRound={true} 
                            variant="outline"
                            colorScheme="teal"
                            arial-label="Change Theme"
                            onClick={toggleColorMode}
                        />
                    </Flex>
                </Flex>
            </Container>
    );
}

        // <button onClick={showSideBar}>
        //         <div id="hamburger-6" className={`hamburger ${isActiveButton === true ? 'is-active' : ''}`}>
        //             <span className="line"></span>
        //             <span className="line"></span>
        //             <span className="line"></span>
        //         </div>
        //     </button>
        //     <Nav sidebarHidden={isOpen} >
        //         <NavItems >
        //             <li onClick={showSideBar}><Link href="/" scroll>início</Link></li>
        //             <li onClick={showSideBar}><Link href="/#about-me">Sobre mim</Link></li>
        //             <li onClick={showSideBar}><Link href="/projects">Projetos</Link></li>
        //         </NavItems>
        //     </Nav>

export default Header;