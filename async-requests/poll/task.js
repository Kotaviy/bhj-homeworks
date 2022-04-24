const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    let pollTitle = document.querySelector('.poll__title');
    let pollAnswers = document.querySelector('.poll__answers');

    if(xhr.responseText === "") {
        return
    } 
    
    response = JSON.parse(xhr.responseText);
    const responseAnswers = response.data.answers;

    if (xhr.readyState === 4 && xhr.status === 200) {
        pollTitle.insertAdjacentHTML('beforeend', `
            <div class="poll__title" id="poll__title">
            ${response.data.title}
            </div>
            `,
        responseAnswers.forEach((elem) => {
            pollAnswers.insertAdjacentHTML('beforeend', `
            <div class="poll__answers poll__answers_active" id="poll__answers">
            <button class="poll__answer">
              ${elem}
            </button>
          </div>
            `)
        })
        )
        const answers = document.querySelectorAll('.poll__answer');
        const answersArr = Array.from(answers);
        answersArr.forEach((elem) => {
            elem.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        })
    }
})