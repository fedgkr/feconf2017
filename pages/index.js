import React from 'react';
import Head from 'next/head';

const IndexPage = (props) => (
    <div className="wrap">
        <Head>
            <title>Hello FEConf 2017</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <style jsx>{`
            h1 {
                text-align: center;
                font-size: 2em;
            }
        `}</style>
        <h1>Hello FEConf 2017!!</h1>
    </div>
);

export default IndexPage;
