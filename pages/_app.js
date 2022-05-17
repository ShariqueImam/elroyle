import '../styles/globals.css'
import Head from "next/head";
import screenWidth from '../hooks/windowSize'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Website for a fast food restaurant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" description="This is a website created for a fast food restaurant"/>
        <script>
          var viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute(
          "content",
          viewport.content + ", height=" + `${screenWidth.height}`
          );
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
