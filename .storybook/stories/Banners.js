import path from 'path';
import React from 'react';
import {storiesOf} from '@storybook/react';
import Banners from '../../components/Banners';

const data = [{
    name: '네이버',
    image: require('../../static/img/logo-naver.png'),
    link: 'https://www.naver.com'
}, {
    name: '레진엔터테인먼트',
    image: require('../../static/img/logo-lezhin.png'),
    link: 'https://www.lezhin.com'
}];

storiesOf('Banners', module)
    .addWithInfo('Default', '', () =>  (
        <Banners list={data}/>
    ));
