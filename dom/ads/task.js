const rotators = document.querySelectorAll('.rotator__case');
const rotatorsArr = Array.from(rotators);
let activeIndex = 1;

const changeClass = function() {
    rotatorsArr[activeIndex].classList.toggle('rotator__case_active');
    rotatorsArr[activeIndex === 0 ? rotatorsArr.length -1 : activeIndex - 1].classList.remove('rotator__case_active');
        if (activeIndex < rotatorsArr.length -1) {
            activeIndex ++;
        } else activeIndex = 0;
}

const changeRotators = setInterval(changeClass,1000);