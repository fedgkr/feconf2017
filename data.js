export default {
    event: {
        title: 'FECONF KOREA 2017',
        time: '2017-10-21 10:00:00'
    },
    introduction: {
        title: '프론트엔드 컨퍼런스 코리아',
        subTitle: 'INTRODUCTION',
        message: `
            (컨퍼런스 소개 글 삽입영역)<br/>
            개발의 가능성을 최대한 이끌어 내려면, 언어의 한계를 알아야만 한다.<br/><br/>
            자바스크립트 구루이자 노련한 저자인 니콜라스 자카스는 이 책에서,<br/>
            자바스크립트의 기초부터 DOM, Ajax, HTML5까지를 설명한다.<br/><br/>
            상황에 따라 자바스크립트를 어떤 식으로 확장할 수 있는지,<br/>
            역동적인 사용자 인터페이스는 어떻게 만들 수 있는지를 풍부한<br/><br/>
            예제를 곁들여 알려준다.<br/><br/>
            2017.10.21 9:30 ~ 16:30 @Seoul
        `
    },
    speakers: {
        title: '발표자',
        subTitle: 'SPEAKERS',
        list: [{
            picture: 'https://avatars2.githubusercontent.com/u/6267393?v=4&s=400',
            name: '조은',
            company: '우아한형제',
            desc: '눈먼 손으로 나는 삶을 만져보았네 그건 가시 투성이였어 가시투성이 삶의 온몸을 만지면서 나는 미소지었지 이토록 가시가 많으니 곧 장미꽃이 피겠구나라고.'
        }, {
            picture: 'https://avatars2.githubusercontent.com/u/1321707?v=4&s=460',
            name: '주우영',
            company: '레진엔터테인먼트',
            desc: '깊이 앓으십시오 앓음답도록 아름답도록'
        }, {
            picture: 'https://avatars0.githubusercontent.com/u/19799263?v=4&s=460',
            name: '이두용',
            company: '레진엔터테인먼트',
            desc: '한때는 모든 것이 여기에 있었다 그렇다, 나는 삶을 불태우고 싶었다 다른 모든 것이 하찮은 것이 되어 버릴 때까지 다만 그것들은 얼마나 빨리 내게서 멀어졌는가'
        }, {
            picture: 'https://avatars1.githubusercontent.com/u/13197080?v=4&s=460',
            name: '김태훈',
            company: '네이버',
            desc: '우리 살아가는 일 속에 파도치는 날 바람 부는 날이 어디 한두 번 이랴 그런 날은 조용히 닻을 내리고 오늘 일을 잠시라도 낮은 곳에 묻어두어야 한다'
        }, {
            picture: 'https://avatars1.githubusercontent.com/u/13933210?v=4&s=460',
            name: '문주영',
            company: 'NC소프트',
            desc: '오늘 밤 주인공은 나야 나 너만을 기다려 온 나야 나 네 마음을 훔칠 사람 나야 나 마지막 단 한 사람 나야 나 오늘 밤 주인공은 나야 나 너만을 기다려 온 나야 나 네 마음을 훔칠 사람 나야 나 마지막 단 한 사람 나야 나'
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
            title: '세션 1',
            location: ['KAKAO', '김양원']
        }, {
            icon: 'double-circle',
            startTime: '10:50',
            endTime: '11:30',
            title: '네이버는 왜 오픈소스를 하는가',
            location: ['NAVER LABS', '이한나']
        }, {
            icon: 'double-circle',
            startTime: '11:40',
            endTime: '12:20',
            title: '세션 3',
            location: ['우아한 형제들', '신동엽']
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
            title: '세션 4',
            location: ['Google', '신세경']
        }, {
            icon: 'double-circle',
            startTime: '14:10',
            endTime: '14:50',
            title: '세션 5',
            location: ['NAVER LABS', '이한나']
        }, {
            icon: 'double-circle',
            startTime: '15:00',
            endTime: '15:40',
            title: '세션 6',
            location: ['NAVER LABS', '이한나']
        }, {
            icon: 'double-circle',
            startTime: '15:50',
            endTime: '16:30',
            title: '세션 7',
            location: ['우아한 형제들', '신동엽']
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
                 @media (max-width:414px) {
                    .place {font-size:40px} 
                 }
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