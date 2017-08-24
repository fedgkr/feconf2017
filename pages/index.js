import React from 'react';
import Head from 'next/head';

const IndexPage = (props) => (
    <div className="wrap index">
        <Head>
            <title>Welcome to FEConf 2017 - 2017 FEConf Korea</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <div className="index__inner">
            This is index page!!
        </div>
    </div>
);

export default IndexPage;
