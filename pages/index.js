import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';

const IndexPage = (props) => (
    <div className="wrap">
        <Head>
            <title>Hello FEConf 2017</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <Header/>
        <Hero/>
        <h1>Hello FEConf 2017!!</h1>
        <Link href="/call-for-speakers"><a>Go to call for speakers page</a></Link>
    </div>
);

export default IndexPage;
