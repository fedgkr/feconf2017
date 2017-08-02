import React from 'react';
import Head from 'next/head';
import Greeting from '../components/Greeting';

const IndexPage = (props) => (
    <div className="wrap">
        <Head>
            <title>Welcome to FEConf 2017 - 2017 FEConf Korea</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <Greeting/>
    </div>
);

export default IndexPage;
