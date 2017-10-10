import {findCompany} from './companies';

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
            <strong class="intro-strong">
                프론트엔드 개발의<br/>
                소중한 경험을 공유합니다!
            </strong>
            <br/><br/>
            프론트엔드 개발자에 의한! 프론트엔드 개발자를 위한!<br/><br/>
            프론트엔드를 개발하며 마주했던<br/>
            치열한 고민과 깊은 인사이트를 공유하며<br/>
            여러분과 함께 성장하고 싶습니다!<br/><br/>
            2017.10.21 9:30 ~ 17:20 @Seoul<br/>
            발표가 끝나면 참석자들과 함께하는 네트워크 시간을 마련합니다!
        `
    },
    speakers: {
        title: '발표자',
        subTitle: 'SPEAKERS',
        list: [{
            picture: './static/img/img-mc.jpeg',
            name: '김훈민',
            company: findCompany('NAVER'),
            desc: '발표자인 듯 공간을 차지하고 있지만, 사실은 사회자입니다. 행사 준비할 때 한 게 없다고 사회 보랍니다. FEConf 10회 때는 저도 발표하고 싶습니다. 그때까지 콘퍼런스 할 수 있게, 전국의 프론트엔드 개발자 님들 도와주십쇼. 굽신굽신.'
        }, {
            picture: './static/img/img-speaker-1.jpeg',
            name: 'Robin Rheem',
            company: findCompany('Lezhin Entertainment'),
            desc: 'var whatToSay = "Always engineer the shi* out of everything.";'
        }, {
            picture: './static/img/img-speaker-2.png',
            name: '김양원',
            company: findCompany('TTCC'),
            desc: 'Javascript 는 언젠가 개발자들에게 피로감을 주는 달리 말하면 배워야할께 너무 많은 환경이 되어가고 있고 이런 흐름이 어디서부터 발현되었고 어떠한 변화들과 그 변화들이 추구하는 빅피쳐는 무엇인지를 이야기하고 이를 통해 자바스크립트의 피로감을 조금 덜어보려고 합니다.'
        }, {
            picture: './static/img/img-speaker-3.jpeg',
            name: '서정명',
            company: findCompany('NCsoft'),
            desc: '최대한 데스크탑 앱 스럽게... 프론트엔드 개발자가 electron을 사용하여 웹 메신저를 데스크탑 앱으로 만드는 과정을 들려 드립니다.'
        }, {
            picture: './static/img/img-speaker-4.jpg',
            name: '김동우',
            company: findCompany('공개SW개발자Lab'),
            desc: 'React, Router, Redux, Webpack 까지 공부하느라 지쳤는데, 이제 Redux의 대세는 Saga라고 합니다. (그만 좀 나와라...)'
        }, {
            picture: './static/img/img-speaker-6.jpg',
            name: '손찬욱',
            company: findCompany('NAVER'),
            desc: 'Reactive Programming, Functional Programming. ReactiveX와 같은 복잡한 용어는 이제 그만. RxJS를 살펴봄으로써 개발자로서 고민해야할 부분들에 대해 이야기합니다. 쉽게 써봅시다. RxJS!'
        }, {
            picture: './static/img/img-speaker-5.png',
            name: '고재도',
            company: findCompany('Google Developer Expert'),
            desc: 'Angular로 대시보드를 만들면서 경험한 내용들을 공유합니다. 컴포넌트 간의 데이터를 전달한 방법이나 ngrx에 대한 내용을 주로 다룹니다.'
        }, {
            picture: './static/img/img-speaker-7.png',
            name: '조성우',
            company: findCompany('NAVER'),
            desc: 'TypeScript에 관심 있지만, 적용을 고민하는 분께 도움이 되면 좋겠습니다. 꼭 TypeScript가 아니어도, 21세기에 사는 Front-End 개발자들이 당연히 누려야 할 개발 환경은 어떤 것이어야 하는지 함께 고민해 보는 시간이 되길 바랍니다.'
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
            location: '마루180'
        }, {
            icon: 'double-circle',
            startTime: '10:00',
            endTime: '10:40',
            title: 'Performance Optimization',
            speaker: {
                name: 'Robin Rheem',
                company: findCompany('Lezhin Entertainment')
            }
        }, {
            icon: 'double-circle',
            startTime: '10:50',
            endTime: '11:30',
            title: 'JavaScript Fatigue',
            speaker: {
                name: '김양원',
                company: findCompany('TTCC')
            }
        }, {
            icon: 'double-circle',
            startTime: '11:40',
            endTime: '12:20',
            title: ' electron으로 만드는 데스크탑 메신저 앱',
            speaker: {
                name: '서정명',
                company: findCompany('NCsoft')
            }
        }, {
            icon: 'circle',
            startTime: '12:20',
            endTime: '13:50',
            title: '점심시간'
        }, {
            icon: 'double-circle',
            startTime: '13:50',
            endTime: '14:30',
            title: 'Redux-thunk에서 Redux-saga로 이사하기',
            speaker: {
                name: '김동우',
                company: findCompany('공개SW개발자Lab')
            }
        }, {
            icon: 'double-circle',
            startTime: '14:40',
            endTime: '15:20',
            title: '쉽게 써봅시다. RxJS!',
            speaker: {
                name: '손찬욱',
                company: findCompany('NAVER')
            }
        }, {
            icon: 'circle',
            startTime: '15:20',
            endTime: '15:40',
            title: '쉬는시간'
        }, {
            icon: 'double-circle',
            startTime: '15:40',
            endTime: '16:20',
            title: 'Angular 컴포넌트 대화법',
            speaker: {
                name: '고재도',
                company: findCompany('Google Developer Expert')
            }
        }, {
            icon: 'double-circle',
            startTime: '16:30',
            endTime: '17:10',
            title: 'TypeScript가 그대를 이롭게 할지니!',
            speaker: {
                name: '조성우',
                company: findCompany('NAVER')
            }
        }, {
            icon: 'circle',
            startTime: '17:20',
            endTime: '17:50',
            title: '오픈 Q&A',
            location: '마루180 지하1층'
        }, {
            icon: 'circle',
            startTime: '17:50',
            endTime: '',
            title: '네트워킹',
            location: '마루180 1층 홀'
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
            <p class="place"><a href="http://maru180.com">MARU180</a></p>
            <p class="spot">@Gangnam</p>
            <p class="addr">서울 강남구 역삼로 180(역삼동, 790-6)</p>
        `,
        position: [37.495482, 127.038741]
    },
    sponsors: {
        title: '스폰서',
        subTitle: 'SPONSORS',
        list: [
            findCompany('Lezhin Entertainment'),
            findCompany('NAVER'),
            findCompany('NCsoft'),
        ]
    }
};
