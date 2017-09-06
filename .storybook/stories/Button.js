import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '../../components/Button';

storiesOf('Button', module)
    .addWithInfo('Default', '', () =>  (
        <Button>버튼</Button>
    ))
    .addWithInfo('Light', '', () =>  (
        <Button type="light">버튼</Button>
    ))
    .addWithInfo('Link', '', () =>  (
        <Button tag="a" href="#">링크</Button>
    ));
