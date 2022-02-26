const dropdownBtn = document.querySelector('.dropdown__value');     // кнопка выпадающего списка
const dropdownList = document.querySelector('.dropdown__list');     // выпадающий список
const dropdownItem = document.querySelectorAll('.dropdown__item'); // коллекция элементов выпадающего списка
const items = Array.from(dropdownItem);                            // массив элементов выпадающего списка
const links = document.querySelectorAll('.dropdown__link');        // коллекция ссылок
const linksArr = Array.from(links);                                // массив ссылок

// свернуть/развернуть меню

dropdownBtn.addEventListener('click', () => {
    if(dropdownList.className === 'dropdown__list') {
        dropdownList.className = 'dropdown__list dropdown__list_active';
        return false;
    }
    if(dropdownList.className === 'dropdown__list dropdown__list_active') {
        dropdownList.className = 'dropdown__list';
        return false;
    }
})

// выбор значения из выпадающего списка

items.forEach((elem) => {
    elem.addEventListener('click', () => {
       dropdownBtn.textContent = elem.textContent;
        if(dropdownList.className === 'dropdown__list dropdown__list_active') {
        dropdownList.className = 'dropdown__list';
        }
       event.preventDefault();
    })
})