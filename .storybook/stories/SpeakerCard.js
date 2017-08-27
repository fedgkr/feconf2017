import React from 'react';
import {storiesOf} from '@storybook/react';
import SpeakerCard from '../../components/SpeakerCard';

storiesOf('SpeakerCard', module)
    .addWithInfo('Default', '', () =>  (
        <SpeakerCard
            style={{width: '360px', margin: '100px auto'}}
            picture="https://avatars2.githubusercontent.com/u/6267393?v=4&s=400"
            name="조은"
            company="우아한형제"
            desc="우아한형제들에서 프론트엔드 개발을 하고있는 조은입니다. 치킨도 좋아하고 맥주도 좋아하는 데 먹는 걸 다 좋아합니다."
        />
    ));
