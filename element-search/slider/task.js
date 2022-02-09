const nextBtn = document.querySelector('.slider__arrow_next');
const prevBtn = document.querySelector('.slider__arrow_prev');
const sliders = document.querySelectorAll('.slider__item');
const slidersArr = Array.from(sliders);
let activeSlideIndex = 0;


let getNextIndex = function (index) {
    if(index < slidersArr.length-1) {
        return activeSlideIndex + 1;
    } else {
        return 0;
    }
}

let getPrevIndex = function (index) {
    if(index > 0) {
        activeSlideIndex -= 1;
    } else {
        activeSlideIndex = slidersArr.length-1;
    }
}

nextBtn.onclick = function() {
    slidersArr[activeSlideIndex].className = 'slider__item';
    activeSlideIndex = getNextIndex(activeSlideIndex);
    slidersArr[activeSlideIndex].className = 'slider__item slider__item_active';
}

prevBtn.onclick = function() {
    slidersArr[activeSlideIndex].className = 'slider__item';
    getPrevIndex(activeSlideIndex);
    slidersArr[activeSlideIndex].className = 'slider__item slider__item_active'
}