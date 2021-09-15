import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({

    initialColorMode: "dark",
    useSystemColorMode: false,

    styles: {
        global: (props) => ({
        // styles for the `body`
        body: {
            bg: props.colorMode === 'dark' ? '#292F3D' : '#E2E8F0',
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
