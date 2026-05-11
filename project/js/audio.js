const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

const sounds = {
    buy: new Audio('assets/audio/buy.mp3'),
    account: new Audio('assets/audio/account.mp3'),
    reviews: new Audio('assets/audio/reviews.mp3'),
    support: new Audio('assets/audio/support.mp3')
};

bgMusic.volume = 0.8;

let musicEnabled = false;

function playSound(name) {
    const sound = sounds[name];

    if (!sound) return;

    sound.currentTime = 0;
    sound.volume = 1;

    sound.play().catch(() => {});
}

musicToggle.addEventListener('click', () => {

    musicEnabled = !musicEnabled;

    if (musicEnabled) {
        bgMusic.play();
        musicToggle.classList.add('active');
    }
    else {
        bgMusic.pause();
        musicToggle.classList.remove('active');
    }

});
