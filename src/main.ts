import './style.scss';
import createHtml from './generatePodcastHtml.mts';
import toggleLightMode from './toggleDarkmode.mts';

function init(): void {
    toggleLightMode();
    createHtml();
}

init ();




