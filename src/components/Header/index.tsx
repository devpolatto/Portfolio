import React, { useState, useEffect, ReactNode } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import { HiX } from "react-icons/hi"
import {useRouter} from 'next/router'

import { 
    Flex, 
    Box,
    Container,
    Link,
    useMediaQuery,
    Text,
    Collapse,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/color-mode";
import { HStack, Stack } from '@chakra-ui/layout';
import { IconButton} from '@chakra-ui/button'


const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
      px={5}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );

function Header() {

    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isLargerThan768px] = useMediaQuery("(min-width: 768px)")
    const [isLargerThan1024px] = useMediaQuery("(min-width: 1024px)")

    const router = useRouter()
    const isRouteHomeActive = router.pathname === '/'    
    const isRouteProjectsActive = router.pathname === '/projects'
    const isRouteAboutActive = router.pathname === '#about-me'

    const { isOpen, onToggle, onClose, onOpen } = useDisclosure()

    function toggleMenuAfterChangeRoute(route: string){
        onClose
        router.push(route)
    }

    function close(){
        () => onToggle
    }

    useEffect(() => {
        console.log(isOpen)
    },[isOpen])

    return (
        <Box w="full">
            <Container w="full" maxW="container.xl">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack display="flex" spacing={8} alignItems={'center'} justifyContent="space-between">
                        <Box>
                            <Text fontSize="3xl">Polatto.dev</Text>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', lg: 'flex' }}>
                            {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    {
                        isLargerThan1024px ? '' : (
                            <IconButton
                                size={'lg'}
                                icon={isOpen ? <HiX color="#9B2C2C" fontSize="28" /> : <FaBars color="#7CFFC4" fontSize="28" />}
                                variant="ghost"
                                colorScheme="#7CFFC4"
                                aria-label={'Open Menu'}
                                onClick={isOpen ? onClose : onOpen}
                            />
                        )
                    }
                </Flex>
                {!isLargerThan1024px ? (
                        <Collapse in={isOpen} startingHeight={0}>
                            <Box w="full">
                                <Stack as={'nav'} alignItems="center" spacing={3} w="full" bg={isLargerThan1024px ? '' : '#181C25'}>
                                    {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                    ))}
                                </Stack>
                            </Box>
                        </Collapse>
                ) : null}
            </Container>
        </Box>
    );
}

export default Header;