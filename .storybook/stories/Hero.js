import React from 'react';
import {storiesOf} from '@storybook/react';
import Hero from '../../components/Hero';

storiesOf('Hero', module)
    .addWithInfo('Default', '', () =>  (
        <Hero/>
    ));
