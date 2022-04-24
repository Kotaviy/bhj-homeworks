const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('progress', () => {
    const loader = document.getElementById('loader');
    let items = document.getElementById('items');
    const response = JSON.parse(xhr.responseText).response;
    const valute = Object.values(response.Valute);
        if(xhr.status === 200) {
            loader.classList.toggle('loader_active');
            valute.forEach((elem) => {
                items.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">
                        ${elem.CharCode}
                    </div>
                    <div class="item__value">
                        ${elem.Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
              </div>
                `)  
            })
    }
})