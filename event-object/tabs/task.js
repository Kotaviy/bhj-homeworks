const navigation = document.querySelectorAll('.tab');
const navigationArr = Array.from(navigation);
const tabContent = document.querySelectorAll('.tab__content');
const tabContentArr = Array.from(tabContent);

navigationArr.forEach((elem) => {
    elem.addEventListener('click', () => {
       let elemIndex = navigationArr.indexOf(elem);
       tabContentArr.forEach((element, index) => {
        if(index === elemIndex) {
            element.className = 'tab__content_active'
        } else element.className = 'tab__content'
       })
       navigationArr.forEach((element, index) => {
           if(index === elemIndex) {
               element.className = 'tab tab_active'
           } else element.className = 'tab'
       })
    })
})