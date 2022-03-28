const input = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

const resetInput = function() {
    input.value = '';
}

addBtn.addEventListener('click', () => {
    if(input.value !== '') {
    tasksList.insertAdjacentHTML("beforeend", `
        <div class="task">
          <div class="task__title">
            ${input.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>`)
    }
    resetInput();
})

tasksList.addEventListener('click', (event) => {
    if(event.target.className === 'task__remove') {
        event.target.parentElement.remove();
    }
})