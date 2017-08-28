import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import Section from '../../components/Section';
import SpeakerCard from '../../components/SpeakerCard';
import SpeakerCardList from '../../components/SpeakerCardList';
import Schedule from '../../components/Schedule';

const {speakers, schedule} = data;

storiesOf('Section', module)
    .addWithInfo('Default', '', () =>  (
        <Section title={speakers.title} subTitle={speakers.subTitle}>
            <SpeakerCardList>
                {speakers.list.map((speaker, index) =>
                    <SpeakerCard
                        key={index}
                        picture={speaker.picture}
                        name={speaker.name}
                        company={speaker.company}
                        desc={speaker.desc}
                    />
                )}
            </SpeakerCardList>
        </Section>
    ))
    .addWithInfo('Background - gradient', '', () =>  (
        <Section title={schedule.title} subTitle={schedule.subTitle} bg="gradient">
            <Schedule schedule={schedule.list}/>
        </Section>
    ));
