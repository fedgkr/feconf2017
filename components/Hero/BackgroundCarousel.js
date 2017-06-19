import React from 'react';

class BackbroundCarousel extends React.Component {
    componentDidMount() {
        let curIndex = 1;
        this.fadeTimer = setInterval(() => {
            const nextIndex = curIndex + 1 <= 4 ? curIndex + 1 : 1;
            const curImage = this.refs[`bg${curIndex}`];
            const nextImage = this.refs[`bg${nextIndex}`];
            curImage.classList.remove('fade-in');
            curImage.classList.add('fade-out');
            nextImage.classList.remove('fade-out');
            nextImage.classList.add('fade-in');
            curIndex = nextIndex;
        }, 6000);
    }

    componentWillUnmount() {
        clearTimeout(this.fadeTimer);
    }

    render() {
        return (
            <div className="hero__background-carousel">
                <img className="hero__background-img" ref="bg4" src="/static/img/react-meetup.04.jpg" alt="리액트 미트업 당시 행사 사진 3"/>
                <img className="hero__background-img" ref="bg3" src="/static/img/react-meetup.03.jpg" alt="리액트 미트업 당시 행사 사진 4"/>
                <img className="hero__background-img" ref="bg2" src="/static/img/react-meetup.02.jpg" alt="리액트 미트업 당시 행사 사진 2"/>
                <img className="hero__background-img" ref="bg1" src="/static/img/react-meetup.01.jpg" alt="리액트 미트업 당시 행사 사진 1"/>
            </div>
        );
    }
}

export default BackbroundCarousel;
