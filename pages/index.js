import React from 'react';
import Head from 'next/head';
import data from '../data';

const {subject} = data;

const IndexPage = (props) => (
    <div className="wrap index">
        <Head>
            <title>{subject}</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <div className="index__inner">
            <h1 className="index__title">{subject}</h1>
        </div>
    </div>
);

export default IndexPage;
