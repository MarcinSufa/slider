import nextIcon from './assets/next.png';
import prevIcon from './assets/back.png';
import closeIcon from './assets/close.png';

export default function () {
    const navIconNext = document.createElement('img');
    const navIconPrev = document.createElement('img');
    const navIconClose = document.createElement('img');

    navIconPrev.src = prevIcon;
    navIconNext.src = nextIcon;
    navIconClose.src = closeIcon;
    navIconClose.className = 'swiper-button-close';

    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');
    const slideContainer = document.querySelector('.swiper-container');

    navIconClose.addEventListener('click', (e) => {
        e.preventDefault;
        slideContainer.classList.remove('swiper-container-opened');
    });
    nextButton.appendChild(navIconNext);
    prevButton.appendChild(navIconPrev);
    slideContainer.appendChild(navIconClose);
}
