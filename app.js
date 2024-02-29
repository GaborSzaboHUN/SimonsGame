
let gamePattern = []
const buttonColors = ['red', 'blue', 'green', 'yellow']
let level = 0

const nextSequence = () => {

    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)


    // - - - - - - - - Button flash animation & audio

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    const audio = new Audio(`sounds/${randomChosenColor}.mp3`)
    audio.play()


    // - - - - - - - - Increase level number

    $('#level-title').text(`Level ${++level}`)

}


// - - - - - - - - User click pattern

let userClickedPattern = []

const userChosenColor = (buttonColor) => {
    userClickedPattern.push(buttonColor)
}


// - - - - - - - - Check Answer

const checkAnswer = () => {
    userClickedPattern[userClickedPattern.length - 1] === gamePattern[gamePattern.length - 1] ? "király" : 'beszoptad'
}


// - - - - - - - - Button click event listener 

const buttons = $('[type="button"]')

buttons.click((e) => {
    const buttonId = e.target.id

    const audio = new Audio(`sounds/${buttonId}.mp3`)
    audio.play()

    clickAnimation($(e.target))
    userChosenColor(buttonId)
    checkAnswer()
})


// - - - - - - - - Button click animation 

const clickAnimation = (button) => {
    button.addClass('pressed')

    setTimeout(() => {
        button.removeClass('pressed')
    }, 200);
}


// - - - - - - - - Game start keydown

$(document).keypress((e) => {
    $('#level-title').text() === 'Press A Key to Start' ? nextSequence() : ''

    $('#level-title').text(`Level ${level}`)
});