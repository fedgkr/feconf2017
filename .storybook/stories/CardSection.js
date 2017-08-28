import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import CardSection from '../../components/CardSection';

storiesOf('CardSection', module)
    .addWithInfo('Default', '', () =>  (
        <div style={{padding: '100px'}}>
            <CardSection title={data.speakers.title} subTitle={data.speakers.subTitle}>
                <div dangerouslySetInnerHTML={{__html: data.introduction.message}}/>
            </CardSection>
        </div>
    ));
