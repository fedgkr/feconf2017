export default {
    event: {
        title: 'FECONF KOREA 2017',
        time: '2017-10-21 10:00:00'
    },
    introduction: {
        title: '프론트엔드<br/>컨퍼런스<br/>코리아',
        subTitle: 'INTRODUCTION',
        message: `
            <style>
                .intro-strong {font-size:34px}
                @media (max-width:640px) {.intro-strong {font-size:28px}}
                @media (max-width:320px) {.intro-strong {font-size:22px}}
            </style>
            프론트엔드 개발자에 의한!<br/>
            프론트엔드 개발자를 위한!<br/><br/>
            <strong class="intro-strong">
                프론트엔드 개발의<br/>
                소중한 경험을 공유합니다!
            </strong>
            <br/><br/>
            프론트엔드를 개발하며 마주했던<br/>
            치열한 고민과 깊은 인사이트를 공유하며<br/>
            여러분과 함께 성장하고 싶습니다!<br/><br/>
            2017.10.21 9:30 ~ 16:30 @Seoul<br/>
            ※ 발표가 끝나면 참석자들과 함께하는 네트워크 시간을 마련합니다!
        `
    },
    speakers: {
        title: '발표자',
        subTitle: 'SPEAKERS',
        list: [{
            picture: './static/img/img-speaker-1.jpeg',
            name: 'Robin Rheem',
            company: 'LezhinEntertainment',
            link: 'https://www.lezhin.com',
            desc: 'var whatToSay = "Always engineer the shi* out of everything.";'
        }, {
            picture: './static/img/img-speaker-2.png',
            name: '김양원',
            company: 'TTCC',
            link: 'https://triple.guide/',
            desc: 'Javascript 는 언젠가 개발자들에게 피로감을 주는 달리 말하면 배워야할께 너무 많은 환경이 되어가고 있고 이런 흐름이 어디서부터 발현되었고 어떠한 변화들과 그 변화들이 추구하는 빅비쳐는 무엇인지를 이야기하고 이를 통해 자바스크립트의 피로감을 조금 덜어보려고 합니다.'
        }, {
            picture: './static/img/img-speaker-3.jpeg',
            name: '서정명',
            company: 'NCsoft',
            link: 'http://kr.ncsoft.com/korean/',
            desc: '게임회사 프론트엔드 개발자. 회사내의 비주류 개발자가 개발하는 비주류 서비스 이야기를 들려 드립니다.'
        }, {
            picture: './static/img/img-speaker-4.jpg',
            name: '김동우',
            company: '공개SW개발자Lab',
            link: 'https://kosslab.kr/',
            desc: 'React, Router, Redux, Webpack 까지 공부하느라 지쳤는데, 이제 Redux의 대세는 Saga라고 합니다. (그만 좀 나와라...)'
        }, {
            picture: './static/img/img-speaker-5.png',
            name: '고재도',
            company: 'Flitto',
            link: 'https://www.flitto.com/',
            desc: '엥귤러로 대시보드를 만들면서 경험한 내용들을 공유합니다. 컴포넌트 간의 데이터를 전달한 방법이나 ngrx에 대한 내용을 주로 다룹니다.'
        }, {
            picture: './static/img/img-speaker-6.jpg',
            name: '손찬욱',
            company: 'NAVER',
            link: 'https://www.naver.com',
            desc: 'Reactive Programming, Funtional Programming. ReactiveX와 같은 복잡한 용어는 이제 그만. RxJS를 살펴봄으로써 개발자로서 고민해야할 부분들에 대해 이야기합니다. 쉽게 써봅시다. RxJS!'
        }, {
            picture: './static/img/img-speaker-7.jpg',
            name: 'Bjorn Tegelund',
            company: 'Tumblbug',
            link: 'https://tumblbug.com/',
            desc: '코드는 가치가 있는 것을 만들기 위한 도구일 뿐입니다. 무엇을 왜 하는지 의식하는 것이 제일 중요합니다.'
        }]
    },
    schedule: {
        title: '스케줄',
        subTitle: 'SCHEDULE',
        list: [{
            icon: 'circle',
            startTime: '09:30',
            endTime: '10:00',
            title: '입장',
            location: ['마루180']
        }, {
            icon: 'double-circle',
            startTime: '10:00',
            endTime: '10:40',
            title: 'Performance Optimization',
            location: ['레진엔터테인먼트', 'Robin Rheem']
        }, {
            icon: 'double-circle',
            startTime: '10:50',
            endTime: '11:30',
            title: 'JavaScript Fatigue',
            location: ['TTCC', '김양원']
        }, {
            icon: 'double-circle',
            startTime: '11:40',
            endTime: '12:20',
            title: ' electron으로 만드는 데스크탑 메신저 앱',
            location: ['NCsoft', '서정명']
        }, {
            icon: 'circle',
            startTime: '12:20',
            endTime: '13:20',
            title: '점심시간',
            location: []
        }, {
            icon: 'double-circle',
            startTime: '13:20',
            endTime: '14:00',
            title: 'Redux-thunk에서 Redux-saga로 이사하기',
            location: ['공개SW개발자Lab', '김동우']
        }, {
            icon: 'double-circle',
            startTime: '14:10',
            endTime: '14:50',
            title: '엥귤러 컴포넌트 대화법',
            location: ['Flitto', '고재도']
        }, {
            icon: 'double-circle',
            startTime: '15:00',
            endTime: '15:40',
            title: '쉽게 써봅시다. RxJS!',
            location: ['NAVER', '손찬욱']
        }, {
            icon: 'double-circle',
            startTime: '15:50',
            endTime: '16:30',
            title: '최근 1년 동안 새로운 팀이 새로운 기술로 새로운 프론트엔드를 만들면서 얻은 교훈들',
            location: ['Tumblbug', 'Bjorn Tegelund']
        }, {
            icon: 'circle',
            startTime: '16:30',
            endTime: '',
            title: '네트워킹',
            location: []
        }]
    },
    location: {
        title: '장소',
        subTitle: 'LOCATION',
        message: `
            <style>
                .place {margin:0}
                .place a {font-size:47px;color:#16193d;font-weight:700;text-decoration:none}
                .spot {font-size:20px;color:#697be4;line-height:1;margin: 14px 0 0}
                .addr {font-size:19px;font-weight:400;margin:19px 0 0}
                 @media (max-width:640px) {.place {font-size:40px}}
            </style>
            <p class="place"><a href="http://maru180.com/pcindex.php">MARU180</a></p>
            <p class="spot">@Gangnam</p>
            <p class="addr">서울 강남구 역삼로 180(역삼동, 790-6)</p>
        `,
        position: [37.495482, 127.038741]
    },
    sponsors: {
        title: '스폰서',
        subTitle: 'SPONSORS',
        list: [{
            name: 'LezhinEntertainment',
            image: '../static/img/logo-lezhin.png',
            link: 'https://www.lezhin.com'
        }, {
            name: 'NAVER',
            image: '../static/img/logo-naver.png',
            link: 'https://www.naver.com'
        }]
    }
};