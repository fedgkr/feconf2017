export default {
    event: {
        title: 'FECONF KOREA 2017',
        time: '2017-10-21 10:00:00'
    },
    introduction: {
        title: '프론트엔드<br/>컨퍼런스<br/>코리아',
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
            picture: './static/img/img-user.png',
            name: '임정호',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
        }, {
            picture: './static/img/img-user.png',
            name: '김양원',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
        }, {
            picture: './static/img/img-user.png',
            name: '김양원',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
        }, {
            picture: './static/img/img-user.png',
            name: '서정명',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
        }, {
            picture: './static/img/img-user.png',
            name: '고재도',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
        }, {
            picture: './static/img/img-user.png',
            name: '손찬욱',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
        }, {
            picture: './static/img/img-user.png',
            name: 'Bjorn Tegelund',
            company: 'Company',
            desc: '길은 지금 긴 산허리에 걸려 있다. 밤중을 지난 무렵인지 죽은 듯이 고요한 속에서 짐승 같은 달의 숨소리가 손에 잡힐 듯이 들리며...'
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
            title: '브라우저 렌더링 퍼포먼스 최적화',
            location: ['Company', '임정호']
        }, {
            icon: 'double-circle',
            startTime: '10:50',
            endTime: '11:30',
            title: 'JavaScript Fatigue',
            location: ['Company', '김양원']
        }, {
            icon: 'double-circle',
            startTime: '11:40',
            endTime: '12:20',
            title: '일렉트론으로 제품 만들기',
            location: ['Company', '서정명']
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
            title: 'React SPA 삽질기',
            location: ['Company', '김동우']
        }, {
            icon: 'double-circle',
            startTime: '14:10',
            endTime: '14:50',
            title: 'Angular4로 실제 서비스 만들기',
            location: ['Company', '고재도']
        }, {
            icon: 'double-circle',
            startTime: '15:00',
            endTime: '15:40',
            title: 'RxJS의 모든것',
            location: ['Company', '손찬욱']
        }, {
            icon: 'double-circle',
            startTime: '15:50',
            endTime: '16:30',
            title: '텀블벅 개발기',
            location: ['Company', 'Bjorn Tegelund']
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