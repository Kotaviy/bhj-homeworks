const incArr = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const decArr = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
let quantityArr = Array.from(document.querySelectorAll('.product__quantity-value'));
const addBtns = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.querySelector('.cart__products');

incArr.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        const currentQuantity = quantityArr[index].innerText;
        quantityArr[index].innerText = parseInt(currentQuantity) + 1;
    })
})

decArr.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        const currentQuantity = quantityArr[index].innerText;
        const currentQuantityInt = parseInt(currentQuantity);
        if(currentQuantityInt === 1) {
            return
        }
        quantityArr[index].innerText = currentQuantityInt - 1;
    })
})

addBtns.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        const product = elem.closest('.product')
        const id = product.dataset.id;
        const cartElement = document.querySelector(`.cart__product[data-id='${id}']`)
        if(cartElement) {
            const cartCountElement = cartElement.querySelector('.cart__product-count');
            const currentCartQuantity = parseInt(cartCountElement.innerText);
            const currentQuantity = parseInt(quantityArr[index].innerText);
            cartCountElement.innerText = currentCartQuantity + currentQuantity;
        } else {
            const imgSrc = product.querySelector('img').getAttribute('src');
            const currentQuantity = quantityArr[index].innerText
            cartProducts.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src='${imgSrc}'>
                    <div class="cart__product-count">${currentQuantity}</div>
                </div>
        `) 
        }
    })
})