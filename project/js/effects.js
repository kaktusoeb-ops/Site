function createIceEffect(button) {

    button.classList.add('ice-active');

    setTimeout(() => {

        button.classList.remove('ice-active');

    }, 300);

}
