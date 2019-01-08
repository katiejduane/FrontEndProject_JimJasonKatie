// let backdrop = document.querySelector('.backdrop');
// let modal1 = document.querySelector('.modal-1');
// let orb1 = document.querySelector('.orb-1');
let toggle = 'hidden';
let map = document.querySelector('#map');

$('.backdrop').on('click', function () {
    backdrop.style.display = 'none';
    modal1.style.display = 'none';
    map.style.display = 'none';
    toggle = 'hidden';
})


$('.submit-button').click((event) => {
    event.preventDefault()
    backdrop.style.display = 'block';
    console.log("where am i?")
    if (toggle == 'hidden'){
        console.log("am i here?")
        map.style.display = 'block';
        toggle = 'displayed'
    }else{
        console.log("or here?")
        map.style.display = 'none';
        toggle = 'hidden'
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
    map.setMapTypeId(`terrain`)
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

