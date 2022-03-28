const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
let time = new Date().toLocaleTimeString().slice(0,-3);

const responsesArr = [
    'Добрый день',
    'Кто здесь?',
    'Вас плохо слышно',
    'Перезвоните позже, какие-то проблемы со связью',
    'До свидания',
]

function botResponse() {
    let random = Math.floor(Math.random() * responsesArr.length);
    return (responsesArr[random]);
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

const clearInput = function() {
    input.value = '';
}

input.addEventListener('keyup', () => {
    if(event.key === 'Enter') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
                <div class="message__text">${input.value}</div>
                    </div>
                    `
                    clearInput();
                    
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">22:10</div>
                <div class="message__text">${botResponse()}</div>
                    </div>  
                    `
    }
})
