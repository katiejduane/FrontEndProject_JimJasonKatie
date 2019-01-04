$(document).ready(()=>{
    // console.log ("sanity check")

    // const queryForm = document.querySelector('.google-query-form')
    // let mapPic = ``
    // console.log(queryForm)
    $('.google-query-form').submit((event)=>{
        event.preventDefault()
        // const symbol = encodeURI($('#symbol').val())
            $('.compass').html(`
            <iframe width="300px" height="300px" frameborder="0" style="border:0" 
            src="https://www.google.com/maps/embed/v1/search?q=farms%20within%2015%20miles%20of%20my%20location&key=${apiKey}" 
            allowfullscreen></iframe>
        `)
    })// end query form
})//end ready form



// button and click functions for modals
let backdrop = document.querySelector('.backdrop');
let cardButtons = document.querySelectorAll('.card');
let modal = document.querySelector('.modal')

for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', function(){
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}

