const menuLink = document.querySelectorAll('.menu__link');
const linksArray = Array.from(menuLink);

linksArray.forEach((elem) => {
    elem.onclick = function() {
        const subMenuCollection = elem.closest('.menu__item').getElementsByClassName('menu_sub');
           if(subMenuCollection.length > 0) {
            subMenuCollection.item(0).className = 'menu menu_sub menu_active';
            return false;
           }
        }
})