const fontSize = document.querySelectorAll('.font-size')
const fontSizeArr = Array.from(fontSize);
const bookContent = document.querySelector('#book');
let activeIndex = 1;

fontSizeArr.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        fontSizeArr[activeIndex].classList.remove('font-size_active');
        elem.classList.add('font-size_active');
        activeIndex = index;
        const className = elem.dataset.size ? ` book_fs-${elem.dataset.size}` : "";
        bookContent.className = `book${className}`;
        
        event.preventDefault()
    })
})