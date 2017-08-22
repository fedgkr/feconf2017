import {configure, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import '../scss/styles.scss';

setDefaults({inline: true, header: false, maxPropsIntoLine: 1});
setAddon(infoAddon);

function loadStories() {
    require('./stories/SpeakerCard');
    require('./stories/SpeakerCardList');
}

configure(loadStories, module);
