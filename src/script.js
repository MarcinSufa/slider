import sliderBcgImgUrl from './assets/slider-bcg.jpg';

export default function () {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.src = sliderBcgImgUrl;
    section.appendChild(img);
    document.body.appendChild(section);
}
