let toggle = `visible`

$('.submit-button').click((event) => {
    event.preventDefault()
    if (toggle === `visible`){
        $('#map').css(`visibility`, toggle)
        toggle = `hidden`
    } else{
        $('#map').css(`visibility`, toggle)
        toggle = `visible`
    }  
})

farmInfo.forEach(element => {
    let mapURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${element.farmName}&key=${apiKey}`
    // console.log(element)
    $.getJSON(mapURL, (info)=>{
        let address = info.results[0].formatted_address
        let latLong = info.results[0].geometry.location
        element.address = address
        element.latLong = latLong
        
    })

})
function initMap() {
    var gaMiddle = {lat: 32.838131, lng: -83.634705}
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: gaMiddle})
    map.setMapTypeId(`hybrid`)
    farmInfo.forEach(element => {
        let marker = new google.maps.Marker({
            position: element.latLong,
            map:map,
            icon: `./images/map_icon.png`,
            animation: google.maps.Animation.BOUNCE
        })
        marker.setMap(map)
    })
}

