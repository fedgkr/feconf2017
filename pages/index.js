import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import data from '../data';
import Section from '../components/Section';
import Placard from '../components/Placard';
import Countdown from '../components/Countdown';
import SpeakerCard from '../components/SpeakerCard';
import SpeakerCardList from '../components/SpeakerCardList';
import Schedule from '../components/Schedule';

const {subject, event, introduction, speakers, schedule, location, sponsors} = data;

const IndexPage = (props) => (
    <div className="wrap index">
        <Head>
            <title>Welcome to FEConf 2017 - FEConf Korea</title>
            <meta name="description" content="FEConf 2017 컨퍼런스 행사의 일정 및 스피커 그리고 각 세션을 소개합니다. 올해 처음 열리는 FEConf! 많은 관심과 성원 부탁드립니다."/>
            <meta name="keywords" content="프론트엔드,프론트엔드개발자,프론트엔드개발자그룹,개발자,프로그래머,마크업,디자이너,컨퍼런스,이벤트,서울,마루180,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul,MARU180"/>
        </Head>
        <div className="index__inner">
            <header className="index__hero">
                <Section tag="div">
                    <h1 className="index__title blind">{event.title}</h1>
                    <Countdown eventTime={moment(event.time).unix()}/>
                    <div className="index__hero-bg">
                        <img
                            className="index__image index__image--hero"
                            src="../static/img/img-hero.png"
                            aria-hidden="true"
                        />
                        <img
                            className="index__image index__image--astronaut"
                            src="../static/img/img-astronaut.png"
                            aria-hidden="true"
                        />
                    </div>
                </Section>
            </header>
            <div className="index__introduction">
                <Placard title={introduction.title} subTitle={introduction.subTitle}>
                    <div dangerouslySetInnerHTML={{__html: introduction.message}}/>
                </Placard>
            </div>
            <div className="index__speakers">
                <Section title={speakers.title} subTitle={speakers.subTitle}>
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
            </div>
            <div className="index__schedule">
                <Section title={schedule.title} subTitle={schedule.subTitle}>
                    <div className="index__schedule-bg">
                        <img
                            className="index__image index__image--meteor"
                            src="../static/img/img-meteor.png"
                            aria-hidden="true"
                        />
                        <img
                            className="index__image index__image--astronaut2"
                            src="../static/img/img-astronaut2.png"
                            aria-hidden="true"
                        />
                    </div>
                    <Schedule schedule={schedule.list}/>
                </Section>
            </div>
            <div className="index__location">
                <Placard title={location.title} subTitle={location.subTitle}>
                    <p className="index__place">MARU180</p>
                    <p className="index__spot">@Gangnam</p>
                    <p className="index__addr">서울 강남구 역삼로 180(역삼동, 790-6)</p>
                </Placard>
            </div>
            <div className="index__maps">
                <iframe
                    className="index__google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5270264947103!2d127.03654695071153!3d37.49548623585291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca154dd9258e5%3A0xe0888095de7a04b0!2z66eI66OoMTgw!5e0!3m2!1sko!2skr!4v1504010513555"
                    allowFullScreen
                />
            </div>
            <div className="index__sponsors">
                <Section title={sponsors.title} subTitle={sponsors.subTitle}>
                    <ul className="index__sponsor-list">
                        <li className="index__sponsor-item">
                            <img
                                className="index__image"
                                src="../static/img/logo-lezhin.png"
                                alt="레진엔터테인먼트 대표 이미지"
                            />
                            <span className="blind">레진엔터테인먼트</span>
                        </li>
                        <li className="index__sponsor-item">
                            <img
                                className="index__image"
                                src="../static/img/logo-naver.png"
                                alt="네이버 대표 이미지"
                            />
                            <span className="blind">네이버</span>
                        </li>
                    </ul>
                </Section>
            </div>
            <footer className="index__footer">
                <img
                    className="index__image index__image--feconf"
                    src="../static/img/logo-feconf.png"
                    alt="FEConf 2017 대표 이미지"
                />
            </footer>
        </div>
    </div>
);

export default IndexPage;
