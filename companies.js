const companies = [{
    name: 'Lezhin Entertainment',
    link: 'https://www.lezhin.com',
    image: '../static/img/logo-lezhin.png'
}, {
    name: 'TTCC',
    link: 'https://triple.guide/'
}, {
    name: 'NCsoft',
    link: 'http://kr.ncsoft.com/korean/',
    image: '../static/img/logo-ncsoft.png'
}, {
    name: '공개SW개발자Lab',
    link: 'https://kosslab.kr/'
}, {
    name: 'Google Developer Expert',
    link: 'https://developers.google.com/experts/people/jeado-ko/'
}, {
    name: 'NAVER',
    link: 'http://www.navercorp.com',
    image: '../static/img/logo-naver.png'
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
