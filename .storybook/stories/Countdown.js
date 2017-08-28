import React from 'react';
import {storiesOf} from '@storybook/react';
import backgrounds from "@storybook/addon-backgrounds";
import moment from 'moment';
import data from '../../data';
import Countdown from '../../components/Countdown';

storiesOf('Countdown', module)
    .addDecorator(backgrounds([
        {name: "$dark-blue", value: '#16193d', default: true}
    ]))
    .addWithInfo('Default', '', () =>  (
        <Countdown style={{margin: '50px auto 0'}} eventTime={moment(data.event.time).unix()}/>
    ));
