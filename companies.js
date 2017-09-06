const companies = [{
    name: 'LezhinEntertainment',
    link: 'https://www.lezhin.com',
    image: '../static/img/logo-lezhin.png'
}, {
    name: 'TTCC',
    link: 'https://triple.guide/'
}, {
    name: 'NCsoft',
    link: 'http://kr.ncsoft.com/korean/'
}, {
    name: '공개SW개발자Lab',
    link: 'https://kosslab.kr/'
}, {
    name: 'Flitto',
    link: 'https://www.flitto.com/'
}, {
    name: 'NAVER',
    link: 'http://www.navercorp.com',
    image: '../static/img/logo-naver.png'
}, {
    name: 'Tumblbug',
    link: 'https://tumblbug.com/'
}];

function findCompany(name) {
    let result = null;
    for (let i = 0, n = companies.length; i < n; i++) {
        if (companies[i].name === name) {
            result = companies[i];
            break;
        }
    }
    return result;
}

export default companies;
export {findCompany};