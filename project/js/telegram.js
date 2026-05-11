const tg = window.Telegram.WebApp;

tg.ready();

function sendTelegramData(data) {

    tg.sendData(
        JSON.stringify(data)
    );

}
