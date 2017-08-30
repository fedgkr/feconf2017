import 'moment-timezone';
import moment from 'moment';
import {configure, setAddon} from '@storybook/react';
import infoAddon, {setDefaults} from '@storybook/addon-info';
import '../scss/styles.scss';

moment.tz.setDefault('Asia/Seoul');

setDefaults({inline: true, header: false, maxPropsIntoLine: 1});
setAddon(infoAddon);

function loadStories() {
    require('./stories/Countdown');
    require('./stories/Section');
    require('./stories/Placard');
    require('./stories/SpeakerCard');
    require('./stories/SpeakerCardList');
    require('./stories/Schedule');
    require('./stories/GoogleMaps');
}

configure(loadStories, module);
