import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import Placard from '../../components/Placard';

storiesOf('Placard', module)
    .addWithInfo('Default', '', () =>  (
            <Placard style={{marginTop: '50px'}} title={data.speakers.title} subTitle={data.speakers.subTitle}>
                개발의 가능성을 최대한 이끌어 내려면, 언어의 한계를 알아야만 한다.<br/><br/>
                자바스크립트 구루이자 노련한 저자인 니콜라스 자카스는 이 책에서,<br/>
                자바스크립트의 기초부터 DOM, Ajax, HTML5까지를 설명한다.<br/><br/>
            </Placard>
    ));
