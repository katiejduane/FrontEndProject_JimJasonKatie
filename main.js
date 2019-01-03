$(document).ready(()=>{
    console.log ("sanity check")
    const queryForm = document.querySelector('.google-query-form')
    let mapPic = ``
    console.log(queryForm)
    $('.google-query-form').submit((event)=>{
        event.preventDefault()
        console.log(`event is ${event}`)
        const symbol = encodeURI($('#symbol').val())
        // $('#symbol').val(``) 
        const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${symbol}&key=${apiKey}`
        const staticURL = `https://maps.googleapis.com/maps/api/staticmap?center=${symbol}&zoom=8&size=600x600&maptype=roadmap&key=${apiKey}`
        const searchResultsURL = ``
        const directionsURL = ``
        $.getJSON(geocodeURL,function(JSData){
            console.log(geocodeURL)
            console.log("this is the data JS found if any")
            console.log(JSData)
            $('.google-body').append(`
                <tr>--</tr>
            `)
        }) //end getJSON for geocode
            $('.submit-button').html(`
           <img src='https://maps.googleapis.com/maps/api/staticmap?center=atlanta,%20ga&zoom=8&size=600x600&maptype=roadmap&key=AIzaSyBWqoJ35EyWPOEPTryUly1ktzdkY8T8UXU'/>
        `)
        
    })// end query form
})//end ready form