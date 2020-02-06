import Document, {Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    
    render() { 
        return (  <html>
            <Head>
                <title>Scoring Engine</title>
                <link rel="stylesheet" href="/_next/static/style.css" />
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </html>);
    }
}
 
export default MyDocument;