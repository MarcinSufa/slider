import addPicture from './script';
import './styles/style.scss';
import ourTeam from './data/data';
import portret_1 from './assets/portrait-1.jpg';
import portret_2 from './assets/portrait-2.jpg';
import portret_3 from './assets/portrait-3.jpg';
import portret_4 from './assets/portrait-4.jpg';
import portret_5 from './assets/portrait-5.jpg';
import bcg from './assets/bg.png';

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function () {
    addPicture();
    // console.log(ourTeam);

    // const portraitsImages = {
    //     1: portret_1,
    //     2: portret_2,
    //     3: portret_3,
    //     4: portret_4,
    //     5: portret_5,
    // };

    let activeSlider = null;

    const portraitWrapper = document.querySelector('.team__portraits--wrapper');
    console.log(bcg);
    portraitWrapper.style.backgroundImage = `url(${bcg})`;

    ourTeam.forEach(function (item, index) {
        const portraitContainer = document.querySelector('.team__portraits--container');
        const personPortrait = document.createElement('div');
        const title = document.createElement('h3');
        const img = document.createElement('img');
        const position = document.createElement('p');
        const city = document.createElement('p');

        personPortrait.classList.add('team__portraits--portrait');
        title.classList.add('team__portraits--title');
        position.classList.add('team__portraits--position');
        city.classList.add('team__portraits--city');

        title.innerText = item.name;
        position.innerText = item.position;
        city.innerText = item.city;
        img.src = item.photo;
        img.className = 'team__portraits--photo';

        personPortrait.appendChild(img);
        personPortrait.appendChild(title);
        personPortrait.appendChild(position);
        personPortrait.appendChild(city);

        portraitContainer.appendChild(personPortrait);
        portraitWrapper;
    });

    const galleryTop = new Swiper('.gallery-top', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'slide',
    });

    const portrait = document.querySelectorAll('.team__portraits--photo');

    portrait.forEach((icon, index) => {
        icon.addEventListener('click', function (e) {
            e.preventDefault();

            portrait.forEach((el) => (el.className = 'team__portraits--photo'));
            e.target.classList.add('active');

            galleryTop.slideTo(index, 600, true);
            activeSlider = galleryTop.activeIndex;
        });
    });

    galleryTop.on('slideChange', () => {
        activeSlider = galleryTop.activeIndex;
        portrait.forEach((icon, index) => {
            index === activeSlider ? icon.classList.add('active') : (icon.className = 'team__portraits--photo');
        });
    });
});
