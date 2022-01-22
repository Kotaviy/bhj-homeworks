let counter = document.getElementById ('clicker__counter');
let count = counter.textContent;
let image = document.getElementById ('cookie')

image.onclick = function() {
    counter.textContent = count++;
    changeSize();
}

function changeSize() {
        if (count % 2) {
            image.width = 200;
        } else {
            image.width = 230;
        }
}