import { Html, Head, Main, NextScript } from 'next/document'
import { SERVER_NAME } from '@/config' 

export default function Document() {
    return (
        <Html lang="en">
            <Head> 
                <title>Edsger Dijkstra - facujas dev</title>
                <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" /> 
            </Head>

            <body>
                <Main />
                <NextScript /> 
            </body>
        </Html>
    )
}
