import './style.scss';
import renderPodcasts from './ts/generatePodcastHtml.mjs';
import toggleLightMode from './ts/toggleDarkmode.mts';

function init(): void {
  toggleLightMode();
  renderPodcasts();
}

init();




