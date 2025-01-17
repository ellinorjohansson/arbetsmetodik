import './style.scss';
import createHtml from './src/ts/generatePodcast.mts';
import toggleLightMode from './src/ts/toggleDarkmode.mts';

function init(): void {
    toggleLightMode();
    createHtml();
}

init ();




