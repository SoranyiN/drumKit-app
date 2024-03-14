function removePlayingClass(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyDiv = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!audio) {
        return;
    }

    keyDiv.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
}