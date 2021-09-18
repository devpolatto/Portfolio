import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import {useRouter} from 'next/router'

import { 
    Heading, 
    Flex, 
    Box,
    Container,
    Link,
    useMediaQuery,
    Divider,
    Text,
    Collapse,
    SlideFade,
    useDisclosure
} from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/color-mode";
import { HStack } from '@chakra-ui/layout';
import { IconButton} from '@chakra-ui/button'

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isLargerThan768px] = useMediaQuery("(min-width: 768px)")
    const [isLargerThan1024px] = useMediaQuery("(min-width: 1024px)")

    const router = useRouter()
    const isRouteHomeActive = router.pathname === '/'   
    const isRouteProjectsActive = router.pathname === '/projects'
    const isRouteAboutActive = router.pathname === '#about-me'

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Container w="full" maxW="container.xl" py="4">
            <Flex w="100%" align="center" justifyContent="space-between">
                <Heading>
                    Polatto<span>.</span>dev
                </Heading>
                
                <Box w="auto" display="flex" alignItems="center" justifyContent="space-between">
                    <Flex
                        pos={isLargerThan1024px ? 'unset' : 'absolute'}
                        top={isLargerThan1024px ? 'unset' : '75px'}
                        left={isLargerThan1024px ? 'unset' : '0px'}
                        w='full'
                        
                        align="center"  
                        justifyContent={isLargerThan1024px ? 'space-between' : 'center'}
                        px="1"
                    >
                        <SlideFade in={isOpen} offsetX={isLargerThan1024px ? '80px' : 'unset'} offsetY="0">
                                             
                            <HStack direction='row' spacing={14} mr={isLargerThan1024px ? 5 : 0}>
                                <Link onClick={() => router.push('/')}>
                                    <Text
                                        color={isRouteHomeActive && isDark  ? '#7CFFC4' : colorMode}
                                        fontSize={isLargerThan768px ? '2xl' : 'md'}
                                        fontWeight="semibold" 
                                        textTransform="uppercase"
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
                                <IconButton 
                                    fontSize={20}
                                    icon={isDark  ? <FaSun color="#7CFFC4" /> : <FaMoon />} 
                                    isRound={true} 
                                    variant="outline"
                                    arial-label="Change Theme"
                                    onClick={toggleColorMode}/>
                            </HStack>

                        </SlideFade>
                    </Flex>

                    <IconButton 
                        alignContent="center"
                        justifyContent="center"
                        fontSize={30}
                        icon={<FaBars color={isDark ? '#F7FAFC' : '#0e0e0e'} />} 
                        arial-label="Change Theme"
                        onClick={onToggle}
                    />
                </Box>
            </Flex>
        </Container>
    );
}

export default Header;