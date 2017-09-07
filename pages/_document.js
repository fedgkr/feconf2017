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
                    <script dangerouslySetInnerHTML={{__html: `
                        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                        ga('create', 'UA-68676515-5', 'auto');
                        ga('send', 'pageview');
                    `}}/>
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
