const toggleLightModeButton: HTMLElement | null = document.querySelector('.toggle-btn');
if (toggleLightModeButton) {
    toggleLightModeButton.addEventListener('click', toggleLightMode);
    console.log(toggleLightModeButton);
} else {
    console.error('Knappen med klassen "toggle-btn" hittades inte!');
}

export function toggleLightMode(): void {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        if (toggleLightModeButton) {
            toggleLightModeButton.innerHTML = 'Välj mörkt läge';
        }
        console.log('ljust läge');
    } else {
        if (toggleLightModeButton) {
            toggleLightModeButton.innerHTML = 'Välj ljust läge';
        }
        console.log('mörkt läge');
    }
}

export default toggleLightMode;
