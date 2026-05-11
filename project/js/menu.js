const buyCurrencyBtn = document.getElementById('buyCurrencyBtn');
const buyAccountBtn = document.getElementById('buyAccountBtn');
const reviewsBtn = document.getElementById('reviewsBtn');
const supportBtn = document.getElementById('supportBtn');

buyCurrencyBtn.addEventListener('click', () => {
    playSound('buy');

    console.log('Покупка валюты');
});

buyAccountBtn.addEventListener('click', () => {
    playSound('account');

    console.log('Покупка аккаунта');
});

reviewsBtn.addEventListener('click', () => {
    playSound('reviews');

    console.log('Отзывы');
});

supportBtn.addEventListener('click', () => {
    playSound('support');

    console.log('Поддержка');
});
