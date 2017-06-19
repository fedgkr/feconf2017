import React from 'react';
import BackgroundCarousel from './BackgroundCarousel';

class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="hero__inner">
                    <BackgroundCarousel/>
                    <div className="hero__mask"/>
                    <div className="hero__messages">
                        <h1 className="hero__title">FEDG / FEConf Korea 2017</h1>
                        <p className="hero__time">
                            <time dateTime="2017-10-21T09:30">2017.10.21 9:30</time>
                            <span> ~ </span>
                            <time dateTime="2017-10-21T16:30">16:30</time>
                            <span> @ Seoul</span>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
