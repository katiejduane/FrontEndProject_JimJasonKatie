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
        nativeTo: "North America",
        latinName: "Vaccinium corymbosum",
        historicalFact: "Blueberries are one of only three berries native to North America. The continent’s earliest inhabitants were first to use the tiny berries, both fresh and dried, for their flavor, nutrition and healing qualities.",
        medicinal: "Blueberries have the highest antioxidant capacity of all the popular fruits and vegetables. They contain anthocyanins, other polyphenols and various phytochemicals under preliminary research for their potential role in the human body. ",
        myth: "Native North Americans believed the Wild Blueberry had magical powers. Atop each Wild Blueberry is the base of its earlier flower, a calyx in the shape of a five-pointed star. Legend has it that during a time of starvation, the Great Spirit sent these “star berries” down from the heavens to relieve the hunger of his children. These early inhabitants were the first to burn their Wild Blueberry barrens to encourage the growth of new plants. ",
        symbolism: "Protection",
        georgia: "The blueberry industry is concentrated in the flatwoods of southeast Georgia.. In 2014, Georgia produced more bueberries than any other state."
    },

    {
        crop: "Peaches",
        nativeTo: "Northwest China",
        latinName: "Prunus persica",
        historicalFact: "The name persica refers to its widespread cultivation in Persia (modern-day Iran), from where it was transplanted to Europe.",
        medicinal: "According to a study from Texas A&M, stone fruit like peaches, plums, and nectarines have been shown to ward off obesity-related diseases such as diabetes, metabolic syndrome, and cardiovascular disease.",
        myth: "In Chinese mythology, 'Peaches of Immoirtality' are consumed by people to make them importal. They also frequently appear as symbols of longevity in Chinese paintings, fables, and sculpture.",
        symbolism: "Peaches are often symbols of rebirth, fertility, and immortality; in ancient Greece, a happy marriage. ",
        georgia: "Georgia ranks third, in the US, for peach production, but China wins for the world.",

    },

    {
        crop: "Honey",
        latinName: "Apis mellifera (though, that's the honey bee.)",
        nativeTo: "Anywhere that has flowers or trees",
        historicalFact: "Humans have been cultivating honey since ancient times. A cave painting of a honey-seeker in Valencia Spain dates back 8,000 years.",
        medicinal: "Honey can be used to treat mild burns, chronic and acute coughs, and can also be useful for controlling the side effects of radiation and chemotherapy. Its antibiotic porperites are currently being researched.",
        myth: "In ancient Greece, the food of Zeus and the Twelve Gods of Olympus was honey in the form of nectar and ambrosia--conferring immortality and longevity.",
        symbolism: "Sweetness, Prosperity",
        georgia: "Decatur is Georgia's first officially 'Bee-Friendly city. Georgia also has a State Prison Beekeeping Program. Types of honey commonly sold in Georgia are Orange Blossom, Sourwood, Tupelo, Tulip Poplar, Clover, Gallberry, and Wildflower Honey."
    },

    {
        crop: "Collards",
        nativeTo: "Greece",
        latinName: "Brassica oleracea",
        historicalFact: "They've been eaten for at least 2000 years, with evidence pointing to Ancient Greeks cultivating several varities.",
        medicinal: "Collards are tastier and more nutritious when cultivated in the colder months. Collard greens have been associated with cancer prevention, detox support, anti-inflammatory properties, heart health, and digestive support.",
        myth: "Eating collards greens on New Years Day is said to bring one good luck.",
        symbolism: "Collard greens are iconic of the American South",
        georgia: "A popular cultivar of collard greens includes the 'Georgia Southern'."

    },
]

//animals
let critterInfo = [
    {
        critter: "Hogs",
        latinName: "Latin: sus scrofa (domesticus) or sus indicus",
        produce: "Tattoo artists use their skin for practice and doctors use their organs for preclinical study because they are so close to those of humans.",
        historicalFact: "While mankind domesticated the beast, they are the only species known that can revert to a feral animal in under one generation. When left alone and uncared for, their hide regrows, teeth grow to tusks, and disposition becomes far less amenable.",
        medicinal: "Pig insulin can be used for diabetes treatment, gelatin for pills, porcine burn dressings, even their hearts can be used for xenotransplantation.",
        myth: "In their Asian origin, the year of the pig is important. They historically represent a beautiful personality and are blessed with good fortune in life.",
        symbolism: "In Yin and Yang, the pig is the yin; soft, cool, and yielding. In Asian cultures, they symbolize wealth. In Western cultures, they symbolize excess, laziness, awkwardness, and obesity.",
        georgia: "Feral pigs in Georgia, especially the south, are wreaking havoc in local farms. Domesticated pigs are farmed as typical (inhumanely, mostly) to other states.",
        weirdFact: "Pigs can tell when they have done something a person likes, and can duplicate it. They also can make enjoyable pets.",
        funFact: "Their intelligence level is inferior only to some apes, dolphins, and elephants. They can play certain concentration games with higher success and focus than a chimpanzee."
    },

    {
        critter: "Cows",
        latinName: `a`,
        historicalFact: "b",
        medicinal: "c",
        myth: "d",
        symbolism: "e",
        georgia: "f",
        weirdFact: `g`,
        funFact: `h`,
        trivia: "i",
    },

    {
        critter: "Chickens",
        latinName: "Latin: gallus gallus (domesticus)",
        produce: "Eggs and Poultry(Broilers)",
        historicalFact: "Descended fom the Red Junglefowl, Chickens were first domesticated around 3,000 B.C. they helped keep pests (grubs, bugs, beetles, worms, etc...) out of owner's crops and fields, and their excrement was good for fertilizer.",
        myth: "Chickens are used in some (predominantly Voodoo or Voodoo derivatives) religions for ritual sacrifice. Fortune-tellers have also read their entrails for milennia. They were the sacred bird of the Goddess Athens, the Goddess of wisdom and warfare. Chickens were so sacred in Ancient Greece that they were kept for eggs and religious purposes only.",
        medicinal: "Chicken meat has a high protein/fat ratio, which is helpful in weight management and bodybuilding. Eggs are low in sugar and high in protein as well. They are very healthy alternatives to other foods, but it's worth noting also high in cholesterol.",
        symbolism: "In Roman times, chickens were related to the Sun God, and their clucking was related to Eros (erotic love). They were a symbol of commerce and productivity as well.",
        georgia: "Many homes in Georgia raise chickens independently, but they are also farmed in large numbers for large scale consumption. Different breeds are used for meat or eggs.",
        weirdFact: `Chickens have been used for thousands of years for man's entertaiment in cockfighting. Male chickens, or cocks, have spurs on their legs and can be very aggressive.`,
        funFact: `The humble chicken is arguably the closest living relative to the Tyrannosaurus Rex.`,

    },

    {
        critter: "Goat",
        latinName: `a`,
        historicalFact: "b",
        medicinal: "c",
        myth: "d",
        symbolism: "e",
        georgia: "f",
        weirdFact: `g`,
        funFact: `h`,
        trivia: "i",
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
                    `<div class="names">${critterInfo[i].critter}, ${critterInfo[i].latinName}</div>
            <div class="facts1"> ${critterInfo[i].produce}, ${critterInfo[i].historicalFact}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function () {
                    modal1HTML = `<div class="facts2">${critterInfo[i].medicinal}</div>
                <div class="myths"> ${critterInfo[i].myth}, ${critterInfo[i].symbolism}</div> <div class="orb-2"></div>`
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
                    `<div class="names">${cropInfo[i].crop}, ${cropInfo[i].latinName}, ${cropInfo[i].nativeTo}</div>
            <div class="facts1"> ${cropInfo[i].historicalFact}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function () {
                    modal1HTML = `<div class="facts2">${cropInfo[i].medicinal}</div>
                <div class="myths"> ${cropInfo[i].myth}, ${cropInfo[i].symbolism}</div> <div class="orb-2"></div>`
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
    $(card4).css('background', 'rgb(241, 221, 152) url(images/goat.png) center center no-repeat');
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