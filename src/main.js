import addPicture from './script';
import './styles/style.scss';

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
    addPicture();

    const galleryThumbs = new Swiper('.gallery-thumbs', {
        // spaceBetween: 10,
        // slidesPerView: 4,
        // freeMode: true,
        watchSlidesVisibility: true,
        // watchSlidesProgress: true,
    });
    const galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});
