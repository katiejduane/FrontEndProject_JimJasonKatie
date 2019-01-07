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
        historicalFact: "Blueberries are one of only three berries native to North America. The continent’s earliest inhabitants were first to use the tiny berries, both fresh and dried, for their flavor, nutrition, and healing qualities.",
        medicinal: "Blueberries have the highest antioxidant capacity of all the popular fruits and vegetables. Research suggests that the antioxidants in blueberries may inhibit tumor growth, decrease inflammation in the body, and help ward off certain cancers. ",
        myth: "Native North Americans believed the Wild Blueberry had magical powers. Atop each Wild Blueberry is the base of its earlier flower, a calyx in the shape of a five-pointed star. Legend has it that during a time of starvation, the Great Spirit sent these “star berries” down from the heavens to relieve the hunger of his children.",
        georgia: "The blueberry industry is concentrated in the flatwoods of southeast Georgia. In 2014, Georgia produced more bueberries than any other state."
    },

    {
        crop: "Peaches",
        nativeTo: "Origin: Northwest China",
        latin: "Latin: Prunus persica",
        historicalFact: "The name 'persica' refers to its widespread cultivation in Persia (modern-day Iran), from where it was transplanted to Europe.",
        medicinal: "Peaches are a great source of zinc, which also has anti-aging properties. Either eaten or put on the skin, they've been shown to be a great natural moisturizer. Eating peaches also may decrease neurodegenerative risk of disorders, such as Alzheimer's disease.",
        myth: "In Chinese mythology, 'Peaches of Immoirtality' are consumed by people to make them importal. They also frequently appear as symbols of longevity in Chinese paintings, fables, and sculpture.",
        georgia: "Georgia ranks third, in the US, for peach production, but China wins for the world.",

    },

    {
        crop: "Honey",
        nativeTo: "Origin: Anywhere that has flowers or trees",
        latin: "Latin: apis mellifera (though, that's the honey bee)",
        historicalFact: "Humans have been cultivating honey since ancient times. A cave painting of a honey-seeker in Valencia Spain dates back 8,000 years.",
        medicinal: "Honey can be used to treat mild burns, chronic and acute coughs, and can also be useful for controlling the side effects of radiation and chemotherapy. Its antibiotic properites are currently being researched.",
        myth: "In Greek mythology, bees were considered messengers of the gods and honey to be a source of wisdom and poetry. The gods of Olympus lived on honey (nectar) and honey wine (ambrosia). In Greek, the word 'nectar' means 'victory over death'. ",
        georgia: "Decatur is Georgia's first officially 'Bee-Friendly city. Georgia also has a State Prison Beekeeping Program. Types of honey commonly sold in Georgia are Orange Blossom, Sourwood, Tupelo, Tulip Poplar, Clover, Gallberry, and Wildflower Honey."
    },

    {
        crop: "Collard Greens",
        nativeTo: "Origin: Greece",
        latin: "Latin: brassica oleracea",
        historicalFact: "They've been eaten for at least 2000 years, with evidence pointing to Ancient Greeks cultivating several varities.",
        medicinal: "Collard greens are tastier and more nutritious when cultivated in the colder months. They've have been associated with cancer prevention, detoxification, anti-inflammatory properties, heart health, and digestive support.",
        myth: "Eating collard greens on New Years Day is said to bring one good luck.",
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
        myth: "'Gullinbursti' was a pig in Norse Mythology made by two dwarves from a pig-skin and thousands of pieces of gold wire. He shone like the sun and could speed through the sky, making plants grow. He also used his tusks to rake the earth and show men how to plow the land.",
        symbolism: "In Yin and Yang, the pig is the yin; soft, cool, and yielding. In Asian cultures, they symbolize wealth. In Western cultures, they symbolize excess, laziness, awkwardness, and obesity.",
       
    },

    {
        critter: "Cattle",
        latin: "Latin: Bos taurus",
        fact1: "Calves can discriminate between humans based on previous experience; they'll approach those who handled them positively and avoid those who handled them aversively.",
        fact2: "Cattle are very gregarious and even short-term isolation is considered to cause severe psychological stress; mirrors are sometimes used to calm cows that are isolated.",
        myth: "The cow-headed Egyption goddess Hathor was originally a personification of the Milky Way, which was considered to be the milk that flowed from the udders of a heavenly cow.",
        symbolism: "Cattle are considered sacred in world religions such as Hinduism, Jainism, and Buddhism, symbolizing patience, abundance, gentleness, and holiness.",
       
    },

    {
        critter: "Chickens",
        latin: "Latin: gallus gallus (domesticus)",
        fact1: "The humble chicken is arguably the closest living relative to the Tyrannosaurus Rex.",
        fact2: "While Chickens have been domesticated for 5,000 years, they descended fom the Red Junglefowl in southeast Asia. The male Junglefowl's tail is composed of long, arching feathers that initially look black, but shimmer with blue, purple, and green in bright light.",
        myth: "They are used in some (predominantly Voodoo or Voodoo derivatives) religions for ritual sacrifice. Fortune-tellers have also read their entrails for milennia. They were the sacred bird of the Goddess Athena, the Goddess of wisdom and warfare.",
        symbolism: "In Roman times, chickens were related to the Sun God, and their clucking was related to Eros. They were also symbolic of commerce and productivity. The chicken figures as a symbol of parental and spiritual love in the literature of the West. ",

    },

    {
        critter: "Goat",
        latin: "Latin: capra aegagrus hircus",
        fact1: "Goats are naturally curious, exploring anything new or unfamiliar in their surroundings. They are also agile and known for their ability to balance in precarious places; they frequently climb trees.",
        fact2: "Goats, similar to dogs, will look to a human for assistance when faced with a challenge that they'd previously been mastered, but was then modified.",
        myth: "Popular Christian folk tradition in Europe associated Satan with imagery of goats. A common superstition in the Middle Ages was that goats whispered lewd sentences in the ears of the saints.",
        symbolism: "The faun is a mythological half human–half goat creature appearing in Ancient Rome. They were a symbol of fertility, and were said to inspire fear in men traveling in lonely, remote, or wild places.",
    
    }
]

let aboutInfo = [
    {
        name: "Katie",
        meaning: "The name Kathryn is: pure, clear. From the Latin Katharina",
    },
    {
        name: "Jason",
        meaning: "The name Jason: healing. The name was borne in Greek mythology. Var: Jayson", 
    },
    {
        name: "Jeremy",
        meaning: "From the given name Jeremiah. The weeping prophet",
    },
    {
        name: "Pithos",
        meaning: "The Greek name for a container or vessel. A farm is a kind of container. So is a website",
    }
]

//========================= *** farmData END! *** ==========================//


// variables for HTML elements that need to be changed with JS
let backdrop = document.querySelector('.backdrop');
let cardButtons = document.querySelectorAll('.card');
let modal1 = document.querySelector('.modal-1');
let orb1 = document.querySelector('.orb-1');
let animalButton = document.querySelector('#animals');
let plantButton = document.querySelector('#plants');
let aboutButton = document.querySelector('#about');
let main = document.querySelector('.main')

//booleans for page START (they change when clicking the nav buttons!)
let animals = true;
let plants = false;
let about = false;

// so clicking thebackdrop closes the modal
$('.backdrop').on('click', function () {
    backdrop.style.display = 'none';
    modal1.style.display = 'none';
})

//looping through both plant and animal objects!
function farmData() {
    let modal1HTML = "";
    let card1 = document.querySelector('#card1');
    let card2 = document.querySelector('#card2');
    let card3 = document.querySelector('#card3');
    let card4 = document.querySelector('#card4');
    let animalCards = [card1, card2, card3, card4];
    if (animals == true) {
        for (let i = 0; i < critterInfo.length; i++) {
            $(animalCards[i]).on('click', function () {
                modal1.style.display = 'flex';
                backdrop.style.display = 'block';
                modal1HTML =
                    `<h3 class="name">${critterInfo[i].critter}</h3> <div class="latin"> ${critterInfo[i].latin}</div>
            <div class="facts1"> ${critterInfo[i].fact1}</div> <div class="facts2"> ${critterInfo[i].fact2}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function () {
                    modal1HTML = `<div class="myths"> ${critterInfo[i].myth}</div> <div class="symbols">${critterInfo[i].symbolism}</div> <div class="orb-1"></div>`
                    $(modal1).html(modal1HTML)
                    $('.orb-1').on('click', function () {
                        modal1.style.display = 'none';
                        backdrop.style.display = 'none';
                    })
                })
            })
        }
    } else if (plants == true) {
        let modal1HTML = "";
        let plantCards = [card1, card2, card3, card4]
        console.log("plant")
        for (let i = 0; i < cropInfo.length; i++) {
            console.log('plant2')
            $(plantCards[i]).on('click', function () {
                console.log('boo')
                modal1.style.display = 'flex';
                backdrop.style.display = 'block';
                modal1HTML =
                    `<h3 class="name">${cropInfo[i].crop}</h3> <div class="latin"> ${cropInfo[i].latin}</div>  <div class="origin">${cropInfo[i].nativeTo}</div>
            <div class="facts1"> ${cropInfo[i].historicalFact}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function () {
                    modal1HTML = `<div class="facts2">${cropInfo[i].medicinal}</div>
                <div class="myths"> ${cropInfo[i].myth}</div> <div class="orb-1"></div>`
                    $(modal1).html(modal1HTML)
                    $('.orb-1').on('click', function () {
                        modal1.style.display = 'none';
                        backdrop.style.display = 'none';
                    })
                })
            })
        }
    } else if (about == true){
        let modal1HTML = "";
        let aboutCards = [card1, card2, card3, card4]
        for (let i = 0; i < aboutInfo.length; i++) {
            $(aboutCards[i]).on('click', function (){
                modal1.style.display = 'flex';
                backdrop.style.display = 'block';
                modal1HTML = 
                    `<h3 class="name">${aboutInfo[i].name}</h3> <div class="meaning">${aboutInfo[i].meaning}</div> <div class="orb-1"></div>`
                $(modal1).html(modal1HTML)
                $('.orb-1').on('click', function(){
                    modal1.style.display = 'none';
                    backdrop.style.display = 'none';
                })
            })
        }
    }
}

farmData()


// button clicks for NAV (to change from animal to plant to about or whatever the user pleases)
// COULD THIS ALL BE DONE IN A FOR LOOP? ONE FOR EACH BUTTON CLICK? (PLANT/ANIMAL)
$(plantButton).on('click', function () {
    plants = true;
    animals = false;
    about = false;
    let mainHTML = `
    <div class="circle">
        <div class="card-wrapper">
            <div class="card" id="card1"></div>
            <div class="card" id="card2"></div>
            <div class="card" id="card3"></div>
            <div class="card" id="card4"></div>
        </div>
    </div>`
    $(main).html(mainHTML)
    console.log("hi")
    $('#card1').css('background', 'lightgoldenrodyellow url(images/blueberry-sm.png) center center no-repeat');
    $('#card1').css('background-size', '90%');
    $('#card2').css('background', 'lightgoldenrodyellow url(images/peach-sm.png) center center no-repeat');
    $('#card2').css('background-size', '90%');
    $('#card3').css('background', 'lightgoldenrodyellow url(images/honeybee-sm.png) center center no-repeat');
    $('#card3').css('background-size', '90%');
    $('#card4').css('background', 'lightgoldenrodyellow url(images/collard-sm.png) center center no-repeat');
    $('#card4').css('background-size', '90%');
    farmData();
});

$(animalButton).on('click', function () {
    animals = true;
    plants = false;
    about = false;
    let mainHTML = `
    <div class="circle">
        <div class="card-wrapper">
            <div class="card" id="card1"></div>
            <div class="card" id="card2"></div>
            <div class="card" id="card3"></div>
            <div class="card" id="card4"></div>
        </div>
    </div>`
    $(main).html(mainHTML)
    console.log("hi")
    $('#card1').css('background', 'lightgoldenrodyellow url(images/pig-sm.png) center center no-repeat');
    $('#card1').css('background-size', '90%');
    $('#card2').css('background', 'lightgoldenrodyellow url(images/bull-sm.png) center center no-repeat');
    $('#card2').css('background-size', '90%');
    $('#card3').css('background', 'lightgoldenrodyellow url(images/chicken-sm.png) center center no-repeat');
    $('#card3').css('background-size', '90%');
    $('#card4').css('background', 'lightgoldenrodyellow url(images/goat-sm.png) center center no-repeat');
    $('#card4').css('background-size', '90%');
    farmData();
});

$(aboutButton).on('click', function () {
    animals = false;
    plants = false;
    about = true;
    let mainHTML = `
     <div class="circle">
        <div class="card-wrapper">
            <div class="card" id="card1"></div>
            <div class="card" id="card2"></div>
            <div class="card" id="card3"></div>
            <div class="card" id="card4"></div>
        </div>
    </div>`
    $(main).html(mainHTML)
    console.log("hi")
    $('#card1').css('background', 'lightgoldenrodyellow url(images/animalSymbol-1-copy.png) center center no-repeat');
    $('#card1').css('background-size', '90%');
    $('#card2').css('background', 'lightgoldenrodyellow url(images/animalSymbol-1-copy.png) center center no-repeat');
    $('#card2').css('background-size', '90%');
    $('#card3').css('background', 'lightgoldenrodyellow url(images/animalSymbol-1-copy.png) center center no-repeat');
    $('#card3').css('background-size', '90%');
    $('#card4').css('background', 'lightgoldenrodyellow url(images/animalSymbol-1-copy.png) center center no-repeat');
    $('#card4').css('background-size', '90%');
    farmData();
})






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
// })


// looping through the farmFata object
// function animalData() {
//     let modal1HTML = "";
//     let card1 = document.querySelector('#card1');
//     let card2 = document.querySelector('#card2');
//     let card3 = document.querySelector('#card3');
//     let card4 = document.querySelector('#card4');
//     let animalCards = [card1, card2, card3, card4];
//     if (animals == true) {
//         for (let i = 0; i < critterInfo.length; i++) {
//             $(animalCards[i]).on('click', function () {
//                 modal1.style.display = 'flex';
//                 backdrop.style.display = 'block';
//                 modal1HTML =
//                     `<h3 class="name">${critterInfo[i].critter}</h3> <div class="latin"> ${critterInfo[i].latin}</div>
//             <div class="facts1"> ${critterInfo[i].fact1} ${critterInfo[i].fact2}</div> <div class="orb-1"></div>`
//                 $(modal1).html(modal1HTML)
//                 $('.orb-1').on('click', function () {
//                     modal1HTML = `<div class="myths"> ${critterInfo[i].myth} ${critterInfo[i].symbolism}</div> <div class="orb-1"></div>`
//                     $(modal1).html(modal1HTML)
//                     $('.orb-1').on('click', function () {
//                         modal1.style.display = 'none';
//                         backdrop.style.display = 'none';
//                     })
//                 })
//             })
//         }
//     }
// }
// animalData();

// //function call for plant and animal data!
// // i think i should be able to put this all in one function...?
// function plantData() {
//     let modal1HTML = "";
//     let card1 = document.querySelector('#card1');
//     let card2 = document.querySelector('#card2');
//     let card3 = document.querySelector('#card3');
//     let card4 = document.querySelector('#card4');
//     let plantCards = [card1, card2, card3, card4];
//     if (plants == true) {
//         console.log("plant")
//         for (let i = 0; i < cropInfo.length; i++) {
//             console.log('plant2')
//             $(plantCards[i]).on('click', function () {
//                 console.log('boo')
//                 modal1.style.display = 'flex';
//                 backdrop.style.display = 'block';
//                 modal1HTML =
//                     `<h3 class="name">${cropInfo[i].crop}</h3> <div class="latin"> ${cropInfo[i].latin}</div>  <div class="origin">${cropInfo[i].nativeTo}</div>
//             <div class="facts1"> ${cropInfo[i].historicalFact}</div> <div class="orb-1"></div>`
//                 $(modal1).html(modal1HTML)
//                 $('.orb-1').on('click', function () {
//                     modal1HTML = `<div class="facts2">${cropInfo[i].medicinal}</div>
//                 <div class="myths"> ${cropInfo[i].myth}</div> <div class="orb-1"></div>`
//                     $(modal1).html(modal1HTML)
//                     $('.orb-1').on('click', function () {
//                         modal1.style.display = 'none';
//                         backdrop.style.display = 'none';
//                     })
//                 })
//             })
//         }
//     }
// }
// plantData();

// let card1 = document.querySelector('#card1');
// let card2 = document.querySelector('#card2');
// let card3 = document.querySelector('#card3');
// let card4 = document.querySelector('#card4');