import React from 'react';
import data from '../../data';
import {storiesOf} from '@storybook/react';
import SpeakerCard from '../../components/SpeakerCard';

const {list} = data.speakers;

storiesOf('SpeakerCard', module)
    .addWithInfo('Default', '', () =>  (
        <SpeakerCard
            style={{width: '360px', margin: '100px auto'}}
            picture={list[0].picture}
            name={list[0].name}
            company={list[0].company}
            desc={list[0].desc}
        />
    ));
