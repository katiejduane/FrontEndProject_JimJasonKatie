$(document).ready(()=>{
    console.log ("sanity check")
    const queryForm = document.querySelector('.google-query-form')
    let mapPic = ``
    console.log(queryForm)
    $('.google-query-form').submit((event)=>{
        event.preventDefault()
        const symbol = encodeURI($('#symbol').val())
            $('.submit-button').append(`
            <iframe width="600" height="450" frameborder="0" style="border:0" src="https:/
            /www.google.com/maps/embed/v1/search?q=${symbol}&key=${apiKey}" allowfullscreen></iframe>
        `)
    })// end query form
})//end ready form

