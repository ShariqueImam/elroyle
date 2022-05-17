import '../styles/globals.css'
import Head from "next/head";
import screenWidth from '../hooks/windowSize'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>El Royle | Restaurant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width,This is a website created for a fast food restaurant"/>
        <script>
          var viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute(
          "content",
          viewport.content + ", height=" + 100vh
          );
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
