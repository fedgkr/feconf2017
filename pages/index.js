import React from 'react';
import Head from 'next/head';
import data from '../data';
import Hero from '../components/Hero';
import Section, {SectionHeader, SectionCoverBasic, SectionCoverCard, SectionBody} from '../components/Section';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerCardList from '../components/SpeakerCardList';

const {event, introduction, speakers} = data;

const IndexPage = (props) => (
    <div className="wrap index">
        <Head>
            <title>Welcome to FEConf 2017 - 2017 FEConf Korea</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <div className="index__inner">
            <h1 className="index__title blind">
                Welcome to FEConf 2017 - 2017 FEConf Korea
            </h1>
            <Hero title={event.title} eventTime={event.time}/>
            <Section className="index__introduction">
                <SectionHeader type="card" title={introduction.title} subTitle={introduction.subTitle}>
                    <div dangerouslySetInnerHTML={{__html: introduction.message}}/>
                </SectionHeader>
            </Section>
            <Section className="index__speakers">
                <SectionHeader title={speakers.title} subTitle={speakers.subTitle}/>
                <SectionBody>
                    <SpeakerCardList>
                        {speakers.list.map((speaker, index) =>
                            <SpeakerCard
                                key={index}
                                picture={speaker.picture}
                                name={speaker.name}
                                company={speaker.company}
                                desc={speaker.desc}
                            />
                        )}
                    </SpeakerCardList>
                </SectionBody>
            </Section>
        </div>
    </div>
);

export default IndexPage;
