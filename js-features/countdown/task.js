let timer = document.getElementById ('timer');
let count = timer.textContent;

let interval = setInterval(()=>{
    timer.textContent = count--
    if (timer.textContent <= 0) {
        clearInterval(interval);
        alert('Вы победили в конкурсе!')
    }
}, 1000)