import React from 'react';
import data from '../../data';
import {storiesOf} from '@storybook/react';
import SpeakerCardList from '../../components/SpeakerCardList';
import SpeakerCard from '../../components/SpeakerCard';

storiesOf('SpeakerCardList', module)
    .addWithInfo('Default', '', () =>  (
        <SpeakerCardList style={{margin: '100px 0'}}>
            {data.speakers.list.map((speaker, index) =>
                <SpeakerCard
                    key={index}
                    picture={speaker.picture}
                    name={speaker.name}
                    company={speaker.company}
                    desc={speaker.desc}
                />
            )}
        </SpeakerCardList>
    ));
