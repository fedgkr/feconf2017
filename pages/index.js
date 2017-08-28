import React from 'react';
import Head from 'next/head';
import data from '../data';
import Hero from '../components/Hero';
import Section, {SectionHeader, SectionCoverBasic, SectionCoverCard, SectionBody} from '../components/Section';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerCardList from '../components/SpeakerCardList';
import Schedule from '../components/Schedule';

const {subject, event, introduction, speakers, schedule} = data;

const IndexPage = (props) => (
    <div className="wrap index">
        <Head>
            <title>{subject}</title>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
        </Head>
        <div className="index__inner">
            <h1 className="index__title blind">{subject}</h1>
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
            <Section className="index__schedule" bg="gradient">
                <SectionHeader title={schedule.title} subTitle={schedule.subTitle}/>
                <SectionBody>
                    <Schedule schedule={schedule.list}/>
                </SectionBody>
            </Section>
        </div>
    </div>
);

export default IndexPage;
