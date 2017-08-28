import React from 'react';
import Head from 'next/head';
import data from '../data';
import Hero from '../components/Hero';
import CardSection from '../components/CardSection';
import Section, {SectionHeader, SectionCoverBasic, SectionCoverCard, SectionBody} from '../components/Section';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerCardList from '../components/SpeakerCardList';
import Schedule from '../components/Schedule';

const {subject, event, introduction, speakers, schedule, location} = data;

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
            <CardSection className="index__introduction" title={introduction.title} subTitle={introduction.subTitle}>
                <div dangerouslySetInnerHTML={{__html: introduction.message}}/>
            </CardSection>
            <Section className="index__speakers" title={speakers.title} subTitle={speakers.subTitle}>
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
            </Section>
            <Section className="index__schedule" title={schedule.title} subTitle={schedule.subTitle} bg="gradient">
                <Schedule schedule={schedule.list}/>
            </Section>
            <CardSection className="index__location" title={location.title} subTitle={location.subTitle}>
                <span className="index__location-name">MARU180</span>
                <span className="index__location-area">@Gangnam</span>
                <span className="index__location-address">
                    서울시 강남구 역삼로 180(역삼동, 790-6)
                </span>
            </CardSection>
            <div className="index__maps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5272068998743!2d127.03654695083377!3d37.49548197971234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca154dd9258e5%3A0xe0888095de7a04b0!2z66eI66OoMTgw!5e0!3m2!1sko!2skr!4v1503922244861"
                    allowFullScreen
                />
            </div>
        </div>
    </div>
);

export default IndexPage;
