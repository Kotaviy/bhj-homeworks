const xhr = new XMLHttpRequest();
const form = document.getElementById('form');

xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

xhr.upload.addEventListener('progress', (event) => {
    let progress = document.getElementById('progress');
    progress.value = event.loaded / event.total;
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    xhr.send(formData);
})
