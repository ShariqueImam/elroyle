import '../styles/globals.css'
import Head from "next/head";
import screenWidth from '../hooks/windowSize'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title  key={'title'}>El Royle | Restaurant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
      name="description"
      content="A website restaurant for online presense"
    />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
