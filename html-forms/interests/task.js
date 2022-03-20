const interest = document.querySelectorAll('div.interests_main > ul > li.interest > label input.interest__check');
const interestArr = Array.from(interest);
const firstSubInterest = document.querySelectorAll('div.interests_main > ul > li.interest:first-child > ul.interests_active > li.interest > label > input.interest__check');
const secondSubInterest = document.querySelectorAll('div.interests_main > ul > li.interest:last-child > ul.interests_active > li.interest > label > input.interest__check');
const subInterestArr = [
    Array.from(firstSubInterest),
    Array.from(secondSubInterest),
]

interestArr.forEach((elem, index) => {
    elem.addEventListener('change', () => {
        if(interestArr[index].checked === true) {
            subInterestArr[index].forEach((elem) => {
                elem.checked = true;
            })
        } else subInterestArr[index].forEach((elem) => {
            elem.checked = false;
        })
    })
})