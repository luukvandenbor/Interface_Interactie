/* Music Button Achtergrond Geluid - Tom heeft me hiermee geholpen - Bron:https://www.w3schools.com/jsref/met_audio_play.asp*/
var music = document.querySelector("header section:nth-of-type(2) audio")
var musicButton = document.querySelector("header section:nth-of-type(2) button")

var isPlaying = false

musicButton.addEventListener("click", () => {
    if (isPlaying) {
        music.pause()
        isPlaying = false
    } else {
        music.play()
        isPlaying = true
    }
})


/* Sonic Buttons geluiden - Tom heeft me hiermee geholpen */
//var musicCoin1 = document.querySelector("header section:first-of-type ol li:first-of-type audio");
//var musicCoin2 = document.querySelector("main section:nth-of-type(2) ol li:nth-of-type(2) audio");
//var musicCoin3 = document.querySelector("main section:nth-of-type(2) ol li:nth-of-type(3) audio");
//var musicCoin4 = document.querySelector("main section:nth-of-type(2) ol li:nth-of-type(4) audio");
//
//var musicButton1 = document.querySelector("main section:nth-of-type(2) ol li:first-of-type button");
//var musicButton2 = document.querySelector("main section:nth-of-type(2) ol li:nth-of-type(2) button");
//var musicButton3 = document.querySelector("main section:nth-of-type(2) ol li:nth-of-type(3) button");
//var musicButton4 = document.querySelector("main section:nth-of-type(2) ol li:nth-of-type(4) button");

var musicCoin1 = document.querySelector("header section:first-of-type ol li:first-of-type audio");
var musicCoin2 = document.querySelector("header section:first-of-type ol li:nth-of-type(2) audio");
var musicCoin3 = document.querySelector("header section:first-of-type ol li:nth-of-type(3) audio");
var musicCoin4 = document.querySelector("header section:first-of-type ol li:nth-of-type(4) audio");

var deButton = document.querySelector("header section:first-of-type ol li:first-of-type button");
var deButton2 = document.querySelector("header section:first-of-type ol li:nth-of-type(2) button");
var deButton3 = document.querySelector("header section:first-of-type ol li:nth-of-type(3) button");
var deButton4 = document.querySelector("header section:first-of-type ol li:nth-of-type(4) button");


var isPlaying1 = false
var isPlaying2 = false
var isPlaying3 = false
var isPlaying4 = false


deButton.addEventListener("click", () => {
    if (isPlaying1) {
        musicCoin1.pause()
        isPlaying1 = false
    } else {
        musicCoin1.play()
        isPlaying1 = true
    }
})

deButton2.addEventListener("click", () => {
    if (isPlaying2) {
        musicCoin2.pause()
        isPlaying2 = false
    } else {
        musicCoin2.play()
        isPlaying2 = true
    }
})

deButton3.addEventListener("click", () => {
    if (isPlaying3) {
        musicCoin3.pause()
        isPlaying3 = false
    } else {
        musicCoin3.play()
        isPlaying3 = true
    }
})

deButton4.addEventListener("click", () => {
    if (isPlaying4) {
        musicCoin4.pause()
        isPlaying4 = false
    } else {
        musicCoin4.play()
        isPlaying4 = true
    }
})


/* Buttons voor het activeren van beweging met hulp van Renzo */
var deSonic = document.querySelector("main button:first-of-type img");
var deSonic2 = document.querySelector("main button:nth-of-type(2) img");
var deSonic3 = document.querySelector("main button:nth-of-type(3) img");
var deSonic4 = document.querySelector("main button:nth-of-type(4) img");

var deButton = document.querySelector("header section:first-of-type ol li:first-of-type button");
var deButton2 = document.querySelector("header section:first-of-type ol li:nth-of-type(2) button");
var deButton3 = document.querySelector("header section:first-of-type ol li:nth-of-type(3) button");
var deButton4 = document.querySelector("header section:first-of-type ol li:nth-of-type(4) button");

var background1 = document.querySelector(".gif1");
var background2 = document.querySelector(".achtergrond2");
var background3 = document.querySelector(".achtergrond3");
var background4 = document.querySelector(".achtergrond4");

deButton.addEventListener("click", ikRen)
deButton2.addEventListener("click", ikSpring)
deButton3.addEventListener("click", looping)
deButton4.addEventListener("click", ikSpringweer)

function ikRen() {
    deSonic.classList.add("rennen")
}

function ikSpring() {
    deSonic2.classList.add("springen")
}

function looping() {
    deSonic3.classList.add("looping")
}

function ikSpringweer() {
    deSonic4.classList.add("springenweer")
}

deButton.addEventListener("click", function () {
    deSonic.classList.remove("verdwijnen")
    deSonic2.classList.add("verdwijnen")
    deSonic3.classList.add("verdwijnen")
    deSonic4.classList.add("verdwijnen")

    document.body.classList.add("j1991")
    document.body.classList.remove("j1992")
    document.body.classList.remove("j1994")
    document.body.classList.remove("j2010")

    deSonic.style.opacity = "1"
})

deButton2.addEventListener("click", function () {
    deSonic.classList.add("verdwijnen")
    deSonic2.classList.remove("verdwijnen")
    deSonic3.classList.add("verdwijnen")
    deSonic4.classList.add("verdwijnen")

    document.body.classList.remove("j1991")
    document.body.classList.add("j1992")
    document.body.classList.remove("j1994")
    document.body.classList.remove("j2010")

    deSonic2.style.opacity = "1"
})

deButton3.addEventListener("click", function () {
    deSonic.classList.add("verdwijnen")
    deSonic2.classList.add("verdwijnen")
    deSonic3.classList.remove("verdwijnen")
    deSonic4.classList.add("verdwijnen")

    document.body.classList.remove("j1991")
    document.body.classList.remove("j1992")
    document.body.classList.add("j1994")
    document.body.classList.remove("j2010")

    deSonic3.style.opacity = "1"
})

deButton4.addEventListener("click", function () {
    deSonic.classList.add("verdwijnen")
    deSonic2.classList.add("verdwijnen")
    deSonic3.classList.add("verdwijnen")
    deSonic4.classList.remove("verdwijnen")

    document.body.classList.remove("j1991")
    document.body.classList.remove("j1992")
    document.body.classList.remove("j1994")
    document.body.classList.add("j2010")

    deSonic4.style.opacity = "1"
})


var pressStart = document.querySelector("footer button");
var tekstH = document.querySelector("header h1");
var tekstP = document.querySelector("header p");

pressStart.addEventListener("click", verwijderAchtergrond);

function verwijderAchtergrond() {
    document.body.style.backgroundImage =
        ""

    tekstH.style.opacity = "1"
    tekstP.style.opacity = "1"
    musicButton.style.opacity = "1"
    pressStart.style.opacity = "0"
    deButton.style.opacity = "1"
    deButton2.style.opacity = "1"
    deButton3.style.opacity = "1"
    deButton4.style.opacity = "1"

}


document.body.style.backgroundImage = "url('images/startachtergrond.png')";

musicButton.style.opacity = "0"
deButton.style.opacity = "0"
deButton2.style.opacity = "0"
deButton3.style.opacity = "0"
deButton4.style.opacity = "0"
tekstH.style.opacity = "0"
tekstP.style.opacity = "0"
deSonic.style.opacity = "0"
deSonic2.style.opacity = "0"
deSonic3.style.opacity = "0"
deSonic4.style.opacity = "0"
