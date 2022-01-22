const holesArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

let counterDead = document.getElementById('dead');
let counterLost = document.getElementById('lost');
let count1 = counterDead.textContent;
let count2 = counterLost.textContent;


getHole = index => document.getElementById(`hole${index}`);

holesArr.forEach((index) => 
    getHole(index).onclick = function() {
        if(this.className.includes('hole_has-mole')) {
            counterDead.textContent = count1++;
                if (counterDead.textContent === '10') {
                    alert('Win!');
                    window.location.reload();
                }
        } else {
            counterLost.textContent = count2++;
                if (counterLost.textContent === '5') {
                    alert('Lose!');
                    window.location.reload();
                }
        }
    }
)