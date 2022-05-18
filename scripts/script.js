/* Music Button Achtergrond Geluid - Tom heeft me hiermee geholpen - Bron:https://www.w3schools.com/jsref/met_audio_play.asp */
var music = document.querySelector("#music")
var musicButton = document.querySelector(".musicButton")

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
var musicCoin1 = document.querySelector("#music1")
var musicButton1 = document.querySelector("#musicButton1")

var isPlaying1 = false

musicButton1.addEventListener("click", () => {
    if (isPlaying1) {
        musicCoin1.pause()
        isPlaying1 = false
    } else {
        musicCoin1.play()
        isPlaying1 = true
    }
})

var musicCoin2 = document.querySelector("#music2")
var musicButton1 = document.querySelector("#musicButton2")

var isPlaying2 = false

musicButton2.addEventListener("click", () => {
    if (isPlaying2) {
        musicCoin2.pause()
        isPlaying2 = false
    } else {
        musicCoin2.play()
        isPlaying2 = true
    }
})

var musicCoin3 = document.querySelector("#music3")
var musicButton3 = document.querySelector("#musicButton3")

var isPlaying3 = false

musicButton3.addEventListener("click", () => {
    if (isPlaying3) {
        musicCoin3.pause()
        isPlaying3 = false
    } else {
        musicCoin3.play()
        isPlaying3 = true
    }
})

var musicCoin4 = document.querySelector("#music4")
var musicButton4 = document.querySelector("#musicButton4")

var isPlaying4 = false

musicButton4.addEventListener("click", () => {
    if (isPlaying4) {
        musicCoin4.pause()
        isPlaying4 = false
    } else {
        musicCoin4.play()
        isPlaying4 = true
    }
})

/* Buttons voor het activeren van beweging met hulp van Renzo */
var deSonic = document.querySelector(".sonic1")
var deButton = document.querySelector(".button1")

var deSonic2 = document.querySelector(".sonic2")
var deButton2 = document.querySelector(".button2")

var deSonic3 = document.querySelector(".sonic3")
var deButton3 = document.querySelector(".button3")

var deSonic4 = document.querySelector(".sonic4")
var deButton4 = document.querySelector(".button4")

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
