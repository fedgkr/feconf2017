import {configure, setAddon} from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import '../scss/styles.scss';

setAddon(infoAddon);

function loadStories() {
    require('./stories/Greeting.js');
}

configure(loadStories, module);
