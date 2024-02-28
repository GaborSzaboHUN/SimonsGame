
let gamePattern = []
const buttonColors = ['red', 'blue', 'green', 'yellow']

const nextSequence = () => {

    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColor = buttonColors[randomNumber]
    gamePattern.push(randomChosenColor)


    // - - - - - - - - Button flash animation & audio

    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    const audio = new Audio(`sounds/${randomChosenColor}.mp3`)
    audio.play()
}


// - - - - - - - - User click pattern

let userClickedPattern = []

const userChosenColor = (buttonColor) => {
    userClickedPattern.push(buttonColor)
}


// - - - - - - - - Button click event listener 

const buttons = $('[type="button"]')

buttons.click((e) => {
    const buttonId = e.target.id

    const audio = new Audio(`sounds/${buttonId}.mp3`)
    audio.play()

    clickAnimation($(e.target))
    userChosenColor(buttonId)
})


// - - - - - - - - Button click animation 

const clickAnimation = (button) => {
    button.addClass('pressed')

    setTimeout(() => {
        button.removeClass('pressed')
    }, 200);
}