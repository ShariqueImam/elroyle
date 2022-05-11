import '../styles/globals.css'
import Head from "next/head";
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

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
