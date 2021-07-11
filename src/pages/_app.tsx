import '../../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react';
import type { AppProps } from 'next/app';

import { GlobalStyled } from '../../styles/Global';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState(dark)

  function handleSetTheme() {
    if (theme.title === 'dark') {
      setTheme(light)
    } else (
      setTheme(dark)
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Polatto.dev</title>
      </Head>
      <Header theme={theme} handleTheme={handleSetTheme} />
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )

}
export default MyApp
