import { useState } from 'react';
import Head from 'next/head'
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import Header from '../components/Header';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

import { GlobalStyled } from '../../styles/Global';

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
      <Header/>
      <Component {...pageProps} />
      <GlobalStyled />
    </ThemeProvider>
  )

}
export default MyApp
