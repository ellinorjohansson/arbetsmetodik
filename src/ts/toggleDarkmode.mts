import { customError, customLog } from '../log/logger.ts';

const toggleLightModeButton: HTMLElement | null = document.querySelector('.toggle-btn');
if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
    customLog(toggleLightModeButton);
} else {
    customError('Knappen med klassen "toggle-btn" hittades inte!');
}

export function toggleLightMode(): void {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        if (toggleLightModeButton) {
            toggleLightModeButton.innerHTML = 'Välj mörkt läge';
        }
        customLog('ljust läge');
    } else {
        if (toggleLightModeButton) {
            toggleLightModeButton.innerHTML = 'Välj ljust läge';
        }
        customLog('mörkt läge');
    }
}

export default toggleLightMode;
