const link = document.getElementsByTagName('a');
const linkArr = Array.from(link);
const tooltip = document.querySelector('.tooltip');

linkArr.forEach((elem) => {
    elem.addEventListener('click', () => {

        let coordinates = elem.getBoundingClientRect();
        tooltip.style.left = coordinates.left + '20px';
        tooltip.style.top = coordinates.bottom + '50px';

        if(tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
        }else{   
            tooltip.classList.add('tooltip_active')
            tooltip.innerHTML = elem.title;
        }

        event.preventDefault();
    })
})
