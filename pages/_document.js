// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                <title>Website for a fast food restaurant</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width,This is a website created for a fast food restaurant"/>                   
                 <link href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
                        rel="stylesheet"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Kristi&display=swap" rel="stylesheet"/>
                    
                </Head>
                <body>
                    
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument