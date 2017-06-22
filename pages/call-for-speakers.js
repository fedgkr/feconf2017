import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Hero from '../components/Hero';

const CallForSpeakersPage = (props) => (
    <div className="wrap">
        <Head>
            <title>Call for Speakers - 2017 FEConf Korea</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <Header/>
        <Hero/>
        <Link href="/"><a>Go to home</a></Link>
    </div>
);

export default CallForSpeakersPage;
