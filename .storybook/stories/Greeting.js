import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Greeting from '../../components/Greeting';

storiesOf('Greeting', module)
    .addWithInfo(
        'missing props',
        '',
        () =>  (
            <Greeting onClick={action('clicked')}/>
        ),
        {inline: true, header:false, maxPropsIntoLine: 1}
    )
    .addWithInfo(
        'define props',
        '',
        () =>  (
            <Greeting
                title="UIFramework"
                desc="React Components that Implement UI Framework."
                onClick={action('clicked')}
            />
        ),
        {inline: true, header:false, maxPropsIntoLine: 1}
    );
