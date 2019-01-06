$(document).ready(() => {
    // console.log ("sanity check")

    // const queryForm = document.querySelector('.google-query-form')
    // let mapPic = ``
    // console.log(queryForm)
    $('.google-query-form').submit((event) => {
        event.preventDefault()
        // const symbol = encodeURI($('#symbol').val())
        $('.compass').html(`
            <iframe width="300px" height="300px" frameborder="0" style="border:0" 
            src="https://www.google.com/maps/embed/v1/search?q=farms%20within%2015%20miles%20of%20my%20location&key=${apiKey}" 
            allowfullscreen></iframe>
        `)
    })// end query form
})//end ready form


//=========================== *** farmData! *** ============================//

//plants
let cropInfo = [
    {
        crop: "Blueberries",
        nativeTo: "Origin: North America,",
        latin: "Latin: Vaccinium corymbosum",
        historicalFact: "Blueberries are one of only three berries native to North America. The continent’s earliest inhabitants were first to use the tiny berries, both fresh and dried, for their flavor, nutrition and healing qualities.",
        medicinal: "Blueberries have the highest antioxidant capacity of all the popular fruits and vegetables. They contain anthocyanins, other polyphenols and various phytochemicals under preliminary research for their potential role in the human body. ",
        myth: "Native North Americans believed the Wild Blueberry had magical powers. Atop each Wild Blueberry is the base of its earlier flower, a calyx in the shape of a five-pointed star. Legend has it that during a time of starvation, the Great Spirit sent these “star berries” down from the heavens to relieve the hunger of his children. These early inhabitants were the first to burn their Wild Blueberry barrens to encourage the growth of new plants. ",
        georgia: "The blueberry industry is concentrated in the flatwoods of southeast Georgia. In 2014, Georgia produced more bueberries than any other state."
    },

    {
        crop: "Peaches",
        nativeTo: "Origin: Northwest China,",
        latin: "Latin: Prunus persica",
        historicalFact: "The name persica refers to its widespread cultivation in Persia (modern-day Iran), from where it was transplanted to Europe.",
        medicinal: "According to a study from Texas A&M, stone fruit like peaches, plums, and nectarines have been shown to ward off obesity-related diseases such as diabetes, metabolic syndrome, and cardiovascular disease.",
        myth: "In Chinese mythology, 'Peaches of Immoirtality' are consumed by people to make them importal. They also frequently appear as symbols of longevity in Chinese paintings, fables, and sculpture.",
        georgia: "Georgia ranks third, in the US, for peach production, but China wins for the world.",

    },

    {
        crop: "Honey",
        nativeTo: "Origin: Anywhere that has flowers or trees,",
        latin: "Latin: apis mellifera (though, that's the honey bee.)",
        historicalFact: "Humans have been cultivating honey since ancient times. A cave painting of a honey-seeker in Valencia Spain dates back 8,000 years.",
        medicinal: "Honey can be used to treat mild burns, chronic and acute coughs, and can also be useful for controlling the side effects of radiation and chemotherapy. Its antibiotic porperites are currently being researched.",
        myth: "In ancient Greece, the food of Zeus and the Twelve Gods of Olympus was honey in the form of nectar and ambrosia--conferring immortality and longevity.",
        georgia: "Decatur is Georgia's first officially 'Bee-Friendly city. Georgia also has a State Prison Beekeeping Program. Types of honey commonly sold in Georgia are Orange Blossom, Sourwood, Tupelo, Tulip Poplar, Clover, Gallberry, and Wildflower Honey."
    },

    {
        crop: "Collard Greens,",
        nativeTo: "Origin: Greece",
        latin: "Latin: brassica oleracea",
        historicalFact: "They've been eaten for at least 2000 years, with evidence pointing to Ancient Greeks cultivating several varities.",
        medicinal: "Collard greens are tastier and more nutritious when cultivated in the colder months. They've have been associated with cancer prevention, detox support, anti-inflammatory properties, heart health, and digestive support.",
        myth: "Eating collards greens on New Years Day is said to bring one good luck.",
        georgia: "A popular cultivar of collard greens includes the 'Georgia Southern'."

    },
]

//animals
let critterInfo = [
    {
        critter: "Hogs",
        latin: "Latin: sus scrofa (domesticus) or sus indicus.",
        fact1: "Tattoo artists use their skin for practice and doctors use their organs for preclinical study.",
        fact2: "Pigs can return to a feral state in less than one generation; when left alone and uncared for, their hide regrows, teeth grow into tusks, and disposition becomes far less amenable.",
        myth: "",
        symbolism: "In Yin and Yang, the pig is the yin; soft, cool, and yielding. In Asian cultures, they symbolize wealth. In Western cultures, they symbolize excess, laziness, awkwardness, and obesity.",
       
    },

    {
        critter: "Cattle",
        latin: "Latin: Bos taurus",
        fact1: "Calves can discriminate between humans based on previous experience, as shown by approaching those who handled them positively and avoiding those who handled them aversively. In audio play-back studies, calves prefer their own mother's vocalizations compared to the vocalizations of an unfamiliar mother.",
        fact2: "Cattle are very gregarious and even short-term isolation is considered to cause severe psychological stress; mirrors are sometimes used to calm cows that are isolated.",
        myth: "The cow-headed Egyption goddess Hathor was originally a personification of the Milky Way, which was considered to be the milk that flowed from the udders of a heavenly cow.",
        symbolism: "Cattle are considered sacred in world religions such as Hinduism, Jainism, and Buddhism, symbolizing patience, abundance, gentleness, and holiness.",
       
    },

    {
        critter: "Chickens",
        latin: "Latin: gallus gallus (domesticus)",
        fact1: "The humble chicken is arguably the closest living relative to the Tyrannosaurus Rex.",
        fact2: "While Chickens have been domesticated for 5,000 years, they descended fom the Red Junglefowl in southeast Asia. The male Junglefowl's tail is composed of long, arching feathers that initially look black, but shimmer with blue, purple, and green in bright light.",
        myth: "They are used in some (predominantly Voodoo or Voodoo derivatives) religions for ritual sacrifice. Fortune-tellers have also read their entrails for milennia. They were the sacred bird of the Goddess Athens, the Goddess of wisdom and warfare.",
        symbolism: "In Roman times, chickens were related to the Sun God, and their clucking was related to Eros (erotic love). They were also symbolic of commerce and productivity.",

    },

    {
        critter: "Goat",
        latin: "Latin: capra aegagrus hircus",
        fact1: "Goats are naturally curious, exploring anything new or unfamiliar in their surroundings. They are also agile and known for their ability to balance in precarious places; they frequently climb trees.",
        fact2: "Research conducted to test communication skills found that the goats will look to a human for assistance when faced with a challenge that had previously been mastered, but was then modified",
        myth: "Popular Christian folk tradition in Europe associated Satan with imagery of goats. A common superstition in the Middle Ages was that goats whispered lewd sentences in the ears of the saints.",
        symbolism: "The faun is a mythological half human–half goat creature appearing in Ancient Rome. They were a symbol of fertility, and were said to inspire fear in men traveling in lonely, remote, or wild places.",
    
    }
]

//========================= *** farmData END! *** ==========================//


// variables for HTML elements that need to be changed with JS
let backdrop = document.querySelector('.backdrop');
let cardButtons = document.querySelectorAll('.card');
let modal1 = document.querySelector('.modal-1');
let modal2 = document.querySelector('.modal-2');
let orb1 = document.querySelector('.orb-1');
let orb2 = document.querySelector('.orb-2');
let card1 = document.querySelector('#card1');
let card2 = document.querySelector('#card2');
let card3 = document.querySelector('#card3');
let card4 = document.querySelector('#card4');
let animalButton = document.querySelector('#animals');
let plantButton = document.querySelector('#plants');
let aboutButton = document.querySelector('#about');

//booleans for page START (they change when clicking the nav buttons!)
let animals = true;
let plants = false;

// so clicking thebackdrop closes the modal
$('.backdrop').on('click', function () {
    backdrop.style.display = 'none';
    modal1.style.display = 'none';
    modal2.style.display = 'none';
})

// looping through the farmFata object
function animalData() {
    let modal1HTML = "";
    let animalCards = [card1, card2, card3, card4];
    if (animals == true) {
        for (let i = 0; i < critterInfo.length; i++) {
            $(animalCards[i]).on('click', function () {
                modal1.style.display = 'block';
                backdrop.style.display = 'block';
                modal1HTML =
                    `<h3 class="animal-name">${critterInfo[i].critter}</h3> <div class="animal-latin"> ${critterInfo[i].latin}</div>
            <div class="facts1"> ${critterInfo[i].fact1} ${critterInfo[i].fact2}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function () {
                    modal1HTML = `<div class="myths"> ${critterInfo[i].myth} ${critterInfo[i].symbolism}</div> <div class="orb-2"></div>`
                    $(modal1).html(modal1HTML)
                    $('.orb-2').on('click', function () {
                        modal1.style.display = 'none';
                        backdrop.style.display = 'none';
                    })
                })
            })
        }
    }
}
animalData();

//function call for plant and animal data!

function plantData() {
    let modal1HTML = "";
    let plantCards = [card1, card2, card3, card4];
    if (plants == true) {
        for (let i = 0; i < cropInfo.length; i++) {
            $(plantCards[i]).on('click', function () {
                modal1.style.display = 'block';
                backdrop.style.display = 'block';
                modal1HTML =
                    `<h3 class="crop-name">${cropInfo[i].crop}</h3> <div class="plant-latin-origin"> ${cropInfo[i].latin} ${cropInfo[i].nativeTo}</div>
            <div class="facts1"> ${cropInfo[i].historicalFact}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function () {
                    modal1HTML = `<div class="facts2">${cropInfo[i].medicinal}</div>
                <div class="myths"> ${cropInfo[i].myth}</div> <div class="orb-2"></div>`
                    $(modal1).html(modal1HTML)
                    $('.orb-2').on('click', function () {
                        modal1.style.display = 'none';
                        backdrop.style.display = 'none';
                    })
                })
            })
        }
    }
}
plantData();

// button clicks for NAV (to change from animal to plant to about or whatever the user pleases)
//animal, plant and about button code!
$(plantButton).on('click', function () {
    plants = true;
    animals = false;
    plantData();
    $(card1).css('background', 'rgb(241, 221, 152) url(images/blueberry-sm.png) center center no-repeat');
    $(card1).css('background-size', '90%');
    $(card2).css('background', 'rgb(241, 221, 152) url(images/peach-sm.png) center center no-repeat');
    $(card2).css('background-size', '90%');
    $(card3).css('background', 'rgb(241, 221, 152) url(images/honeybee-sm.png) center center no-repeat');
    $(card3).css('background-size', '90%');
    $(card4).css('background', 'rgb(241, 221, 152) url(images/collard-sm.png) center center no-repeat');
    $(card4).css('background-size', '90%');
});

$(animalButton).on('click', function () {
    animals = true;
    plants = false;
    animalData();
    $(card1).css('background', 'rgb(241, 221, 152) url(images/pig-sm.png) center center no-repeat');
    $(card1).css('background-size', '90%');
    $(card2).css('background', 'rgb(241, 221, 152) url(images/bull-sm.png) center center no-repeat');
    $(card2).css('background-size', '90%');
    $(card3).css('background', 'rgb(241, 221, 152) url(images/chicken-sm.png) center center no-repeat');
    $(card3).css('background-size', '90%');
    $(card4).css('background', 'rgb(241, 221, 152) url(images/goat-sm.png) center center no-repeat');
    $(card4).css('background-size', '90%');
});

$(aboutButton).on('click', function () {
    animals = false;
    plants = false;
})

//i think we shoudl have separate files for the ABOUT PAGE because we'd have to re-write all the 
//html for the cards after clicking the about button!









// =========================== retired code =============================== //
// retired click functions...
// for (let i = 0; i < cardButtons.length; i++) {
//     cardButtons[i].addEventListener('click', function(){
//         modal1.style.display = 'block';
//         backdrop.style.display = 'block';
//     })
// }

// $('#card1').on('click', function() {
//     modal1.style.display = 'block';
//     backdrop.style.display = 'block';
//     modal1HTML = `<div class="animal-names">${critterInfo[0].critter}, ${critterInfo[0].latinName}</div>
//     <div class="animal-facts1"> ${critterInfo[0].produce}, ${critterInfo[0].historicalFact}</div> <div class="orb-1"></div>`
//     $(modal1).html(modal1HTML)
//     $('.orb-1').on('click', function () {
//         modal1HTML = `<div class="animal-facts2">${critterInfo[0].medicinal}</div>
//         <div class="animal-myths"> ${critterInfo[0].myth}, ${critterInfo[0].symbolism}</div> <div class="orb-2"></div>`
//         $(modal1).html(modal1HTML)
//         $('.orb-2').on('click', function () {
//             modal1.style.display = 'none';
//             backdrop.style.display = 'none';
//         })

//     })
// })
