import Document, {Head, Main, NextScript} from 'next/document';
import styles from '../scss/styles.scss';

class FEConfDocument extends Document {
    static getInitialProps ({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage();
        return {html, head, errorHtml, chunks};
    }

    render () {
        return (
            <html lang="ko">
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="icon" href="/static/favicon.ico" />
                    <style dangerouslySetInnerHTML={{__html: styles}} />
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
