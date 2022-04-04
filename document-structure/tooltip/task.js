const link = document.getElementsByTagName('a');
const linkArr = Array.from(link);
const tooltip = document.querySelector('.tooltip');

linkArr.forEach((elem) => {
    elem.addEventListener('click', () => {
        
        if(elem.title !== tooltip.innerText) {
            let coordinates = elem.getBoundingClientRect();
            tooltip.classList.add('tooltip_active');
            tooltip.style.left = `${coordinates.left}px`;
            tooltip.style.top = `${coordinates.bottom}px`;
            tooltip.innerText = elem.title;
        } else tooltip.classList.toggle('tooltip_active');

        event.preventDefault();
    })
})