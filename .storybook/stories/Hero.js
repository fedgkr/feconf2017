import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import Hero from '../../components/Hero';

storiesOf('Hero', module)
    .addWithInfo('Default', '', () =>  (
        <Hero title={data.event.title} eventTime={data.event.time}/>
    ));
