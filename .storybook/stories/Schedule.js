import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import Schedule from '../../components/Schedule';

storiesOf('Schedule', module)
    .addWithInfo('Default', '', () =>  (
        <div style={{padding: '100px 0', background: '#293f7c'}}>
            <Schedule schedule={data.schedule.list}/>
        </div>
    ));
