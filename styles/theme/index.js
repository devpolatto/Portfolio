import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({

    initialColorMode: "dark",
    useSystemColorMode: false,

    styles: {
        global: (props) => ({
        // styles for the `body`
        body: {
            bg: props.colorMode === 'dark' ? '#292F3D' : '#F7FAFC',
        },
        // styles for the `a`
        a: {
            textDecoration: "unset",
        },

        p: {
            textDecoration: 'unset'
        }
        }),
    },
})


export default theme
