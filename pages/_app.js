import '../styles/globals.css'
import Head from "next/head";
import screenWidth from '../hooks/windowSize'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>
          {/* @import url('https://fonts.googleapis.com/css2?family=Water+Brush&display=swap'); */}
        </style>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
        </style>
        <title>Website for a fast food restaurant</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script>
          var viewport = document.querySelector("meta[name=viewport]");
          viewport.setAttribute(
          "content",
          viewport.content + ", height=" + screenWidth.height
          );
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
