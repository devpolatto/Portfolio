import Head from 'next/head'
import type { AppProps } from 'next/app';

import Header from '../components/Header';

import { GlobalStyled } from '../../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Polatto.dev</title>
      </Head>
      <Header/>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  )

}
export default MyApp
