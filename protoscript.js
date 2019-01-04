// i am working on JS for modals and looping through the object to display info on modals (also corresponding CSS)


// button and click functions for modals
let backdrop = document.querySelector('.backdrop');
let cardButtons = document.querySelectorAll('.card');
let modal = document.querySelector('.modal')

for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}

