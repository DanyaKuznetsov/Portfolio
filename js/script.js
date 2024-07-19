const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const navLinksAll = document.querySelectorAll('.nav__links a');
const navLogo = document.querySelector('.nav__logo')
const iFrame = document.querySelector('iframe');
const formWrapper = document.querySelector('.form__wrapper');
console.log(navLinksAll)
hamburger.onclick = function () {
    hamburger.classList.toggle('hamburger_active');
    navLinks.classList.toggle('nav__links_active');
}
for (let i = 0; i < 4; i++) {
    navLinksAll[i].onclick = function () {
        hamburger.classList.remove('hamburger_active');
        navLinks.classList.remove('nav__links_active');
    }
}
navLogo.onclick = function () {
    hamburger.classList.remove('hamburger_active');
    navLinks.classList.remove('nav__links_active');

}
iFrame.onload = function () {
    formWrapper.classList.add('form__wrapper_active');
    setTimeout(() => {
        document.querySelector('form').reset();
        formWrapper.classList.remove('form__wrapper_active')
    }, 3000);

    const chatToken = '7485089557:AAEpDTccvdc16n2l3atDsRTavIfO5jHEbPU';
    const chatId = '5510865264';

    const Name = document.querySelector('#name').value;
    const Email = document.querySelector('#email').value;
    const Commit = document.querySelector('#comment').value;
    const messageText = `Новая заявка с сайта\n Имя -  ${ Name } \n Почта - ${ Email } \n Комментарий - ${ Commit }`;

    const url = `https://api.telegram.org/bot${chatToken}/sendMessage`;
    const params = {
        chat_id: chatId,
        text: messageText,
    };
    axios.post(url, params)
        .then(response => {
            console.log('Сообщение успешно отправлено:', response.data);
        })
        .catch(error => {
            console.error('Ошибка при отправке сообщения:', error);
        });
    return false
}