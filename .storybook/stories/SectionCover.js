import React from 'react';
import {storiesOf} from '@storybook/react';
import SectionCover from '../../components/SectionCover';

storiesOf('SectionCover', module)
    .addWithInfo('Default', '', () =>  (
        <div style={{padding: '100px 0', background: '#1c204f'}}>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <SectionCover title={<span>프론트엔드<br/>컨퍼런스<br/>코리아</span>} subTitle="LOCATION">
                    개발의 가능성을 최대한 이끌어 내려면, 언어의 한계를 알아야만 한다.<br/><br/>
                    자바스크립트 구루이자 노련한 저자인 니콜라스 자카스는 이 책에서,<br/>
                    자바스크립트의 기초부터 DOM, Ajax, HTML5까지를 설명한다.<br/><br/>
                    상황에 따라 자바스크립트를 어떤 식으로 확장할 수 있는지,<br/>
                    역동적인 사용자 인터페이스는 어떻게 만들 수 있는지를 풍부한<br/>
                    예제를 곁들여 알려준다.<br/><br/>
                    2017.10.21 9:30 ~ 16:30 @Seoul
                </SectionCover>
            </div>
        </div>
    ));
