import React from 'react';
import {storiesOf} from '@storybook/react';
import moment from 'moment';
import Countdown from '../../components/Countdown';

storiesOf('Countdown', module)
    .addWithInfo('Default', '', () =>  (
        <div style={{padding: '100px 0', background: '#1c204f'}}>
            <div style={{maxWidth: '690px', margin: '0 auto'}}>
                <Countdown eventTime={moment('2017-10-21 10:00:00').unix()}/>
            </div>
        </div>
    ));
