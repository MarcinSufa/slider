import emailIcon from './assets/mail.png';

export default function () {
    const emailContainer = document.createElement('div');
    const emailImg = document.createElement('img');
    emailContainer.className = 'email__container';
    emailImg.className = 'email__img';
    emailImg.src = emailIcon;
    emailContainer.appendChild(emailImg);
    return emailContainer;
}
