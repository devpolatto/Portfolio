import { useState } from 'react';

// import { MyContextPage } from '../context/MyContext';

export function useTheme() {

    const [theme, setTheme] = useState(false)

    function handleSetTheme() {
        theme === false ? setTheme(true) : setTheme(false)
        console.log(theme)
    }
    // const { handleSetTheme, theme } = useContext(MyContextPage)

    return ({
        handleSetTheme,
        theme
    })
}