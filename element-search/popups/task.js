const modalMain = document.getElementById('modal_main');
const closeElements = document.getElementsByClassName('modal__close');
const successBtn = document.getElementsByClassName('show-success')
const modalSuccess = document.getElementById('modal_success')

modalMain.className = 'modal modal_active';

closeElements[0].closest('.modal_active').onclick = function() {
    modalMain.className = 'modal'
}

successBtn[0].onclick = function() {
    modalSuccess.className = 'modal modal_active'
}

closeElements[2].onclick = function() {
    modalSuccess.className = 'modal'
}