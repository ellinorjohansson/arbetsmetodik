import './style.scss';
import createHtml from './src/ts/generatePodcastHtml.mts';
import toggleLightMode from './src/ts/toggleDarkmode.mts';

function init(): void {
    toggleLightMode();
    createHtml();
}

init ();




