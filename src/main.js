import './styles/style.scss';
import ourTeam from './data/data';
import bcg from './assets/bg.png';
import sliderBcg from './assets/slider-bcg.jpg';
import Swiper from 'swiper';
import emailContainer from './email';
import addNavigation from './slide';

document.addEventListener('DOMContentLoaded', function () {
    let activeSlider = null;

    const portraitWrapper = document.querySelector('.team__portraits--wrapper');
    console.log(bcg);
    portraitWrapper.style.backgroundImage = `url(${bcg})`;

    // creating our team portraits
    ourTeam.forEach(function (item, index) {
        const portraitContainer = document.querySelector('.team__portraits--container');
        const personPortrait = document.createElement('div');
        const photoWrapper = document.createElement('div');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const position = document.createElement('p');
        const city = document.createElement('p');

        const sliderContainer = document.querySelector('.swiper-wrapper');
        const sliderText = document.createElement('div');
        const sliderInner = document.createElement('div');

        photoWrapper.classList.add('team__portraits--photo--wrap');
        personPortrait.classList.add('team__portraits--portrait');
        title.classList.add('team__portraits--title');
        position.classList.add('team__portraits--position');
        city.classList.add('team__portraits--city');

        title.innerText = item.name;
        position.innerText = item.position;
        city.innerText = item.city;
        img.src = item.photo;
        img.className = 'team__portraits--photo';

        index === 0 ? img.classList.add('active') : null; // activate first portrait img on start

        photoWrapper.appendChild(img);
        photoWrapper.appendChild(emailContainer()); /* add email icon  */
        personPortrait.appendChild(photoWrapper);
        personPortrait.appendChild(title);
        personPortrait.appendChild(position);
        personPortrait.appendChild(city);

        portraitContainer.appendChild(personPortrait);

        // creating slides

        const positionSlide = position.cloneNode(true);
        const titleSlide = title.cloneNode(true);
        sliderInner.className = 'swiper-slide';
        sliderInner.style.background = `linear-gradient(rgba(60, 196, 222, 0.8), rgba(75, 110, 117, 0.4) ),url(${sliderBcg})`;
        positionSlide.className = 'slider__inner--position';
        titleSlide.className = 'slider__inner--title';
        sliderText.className = 'slider__inner';

        sliderText.appendChild(positionSlide);
        sliderText.appendChild(titleSlide);
        sliderInner.appendChild(sliderText);
        sliderContainer.appendChild(sliderInner);
    });

    // creating slider
    ourTeam.forEach(function (item, index) {});

    const galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
    });

    addNavigation();

    const portrait = document.querySelectorAll('.team__portraits--photo');
    const slideContainer = document.querySelector('.swiper-container');
    portrait.forEach((icon, index) => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();

            slideContainer.classList.add('swiper-container-opened'); // open slider container
            portrait.forEach((el) => (el.className = 'team__portraits--photo'));
            e.target.classList.add('active');

            galleryTop.slideTo(index, 600, true);
            activeSlider = galleryTop.activeIndex;
            document.querySelector('.swiper-container').scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    galleryTop.on('slideChange', () => {
        activeSlider = galleryTop.activeIndex;
        portrait.forEach((icon, index) => {
            index === activeSlider ? icon.classList.add('active') : (icon.className = 'team__portraits--photo');
        });
    });
});
