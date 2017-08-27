import React from 'react';
import {storiesOf} from '@storybook/react';
import SpeakerCardList from '../../components/SpeakerCardList';
import SpeakerCard from '../../components/SpeakerCard';

storiesOf('SpeakerCardList', module)
    .addWithInfo('Default', '', () =>  (
        <SpeakerCardList style={{margin: '100px 0'}}>
            <SpeakerCard
                picture='https://avatars2.githubusercontent.com/u/6267393?v=4&s=400'
                name="조은"
                company="우아한형제"
                desc="눈먼 손으로 나는 삶을 만져보았네 그건 가시 투성이였어 가시투성이 삶의 온몸을 만지면서 나는 미소지었지 이토록 가시가 많으니 곧 장미꽃이 피겠구나라고."
            />
            <SpeakerCard
                picture='https://avatars2.githubusercontent.com/u/1321707?v=4&s=460'
                name="주우영"
                company="레진엔터테인먼트"
                desc="깊이 앓으십시오 앓음답도록 아름답도록"
            />
            <SpeakerCard
                picture="https://avatars0.githubusercontent.com/u/19799263?v=4&s=460"
                name="이두용"
                company="레진엔터테인먼트"
                desc="한때는 모든 것이 여기에 있었다 그렇다, 나는 삶을 불태우고 싶었다 다른 모든 것이 하찮은 것이 되어 버릴 때까지 다만 그것들은 얼마나 빨리 내게서 멀어졌는가"
            />
            <SpeakerCard
                picture="https://avatars1.githubusercontent.com/u/13197080?v=4&s=460"
                name="김태훈"
                company="네이버"
                desc="우리 살아가는 일 속에 파도치는 날 바람 부는 날이 어디 한두 번 이랴 그런 날은 조용히 닻을 내리고 오늘 일을 잠시라도 낮은 곳에 묻어두어야 한다"
            />
            <SpeakerCard
                picture="https://avatars1.githubusercontent.com/u/13933210?v=4&s=460"
                name="문주영"
                company="NC소프트"
                desc="오늘 밤 주인공은 나야 나 너만을 기다려 온 나야 나 네 마음을 훔칠 사람 나야 나 마지막 단 한 사람 나야 나 오늘 밤 주인공은 나야 나 너만을 기다려 온 나야 나 네 마음을 훔칠 사람 나야 나 마지막 단 한 사람 나야 나"
            />
        </SpeakerCardList>
    ));
