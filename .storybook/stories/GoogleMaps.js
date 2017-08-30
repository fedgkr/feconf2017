import React from 'react';
import {storiesOf} from '@storybook/react';
import data from '../../data';
import GoogleMaps from '../../components/GoogleMaps';

const {location} = data;

storiesOf('GoogleMaps', module)
    .addWithInfo('Default', '', () =>  (
        <GoogleMaps lat={location.position[0]} lng={location.position[1]}/>
    ));
