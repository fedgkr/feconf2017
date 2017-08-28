import React from 'react';
import {storiesOf} from '@storybook/react';
import backgrounds from "@storybook/addon-backgrounds";
import data from '../../data';
import Schedule from '../../components/Schedule';

storiesOf('Schedule', module)
    .addDecorator(backgrounds([
        {name: "$dark-blue", value: '#16193d', default: true}
    ]))
    .addWithInfo('Default', '', () =>  (
        <Schedule style={{marginTop: '50px'}} schedule={data.schedule.list}/>
    ));
