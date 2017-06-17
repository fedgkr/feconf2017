import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

class FEConfDocument extends Document {
    static getInitialProps ({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage();
        const styles = flush();
        return { html, head, errorHtml, chunks, styles };
    }

    render () {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <style>{`
                        html,
                        body {
                            margin: 0;
                            padding: 0;
                            font-size: 16px;
                        }
                    `}</style>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}

export default FEConfDocument;
