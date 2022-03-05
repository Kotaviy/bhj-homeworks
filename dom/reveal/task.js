const reveal = document.querySelectorAll('.reveal');
const revealArr = Array.from(reveal);

document.addEventListener('scroll', () => {
    revealArr.forEach((elem) => {
        let revealPosition = elem.getBoundingClientRect();
        if (revealPosition.top < window.innerHeight) {
            elem.className = 'reveal reveal_active';
        }
    })
})