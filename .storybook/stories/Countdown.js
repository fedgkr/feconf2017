import React from 'react';
import {storiesOf} from '@storybook/react';
import moment from 'moment';
import data from '../../data';
import Countdown from '../../components/Countdown';

storiesOf('Countdown', module)
    .addWithInfo('Default', '', () =>  (
        <div style={{padding: '100px 0', background: '#1c204f'}}>
            <Countdown style={{margin: '0 auto'}} eventTime={moment(data.event.time).unix()}/>
        </div>
    ));
