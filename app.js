const buttonColors = ['red', 'blue', 'green', 'yellow']

let gamePattern = []
let userClickedPattern = []

let started = false
let level = 0


const nextSequence = () => {

    userClickedPattern = []

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


// - - - - - - - - Game start keydown

$(document).keypress((e) => {

    if (!started) {

        $('#level-title').text(`Level ${level - 1}`)
        nextSequence()
        started = true

    }

});


// - - - - - - - - Start over

const startOver = () => {
    level = 0
    gamePattern = []
    started = false
}


// - - - - - - - - Check Answer

const checkAnswer = (currentLevel) => {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }

    } else {
        const wrongAudio = new Audio('sounds/wrong.mp3')
        wrongAudio.play()

        $('body').addClass('game-over')

        setTimeout(() => {
            $('body').removeClass('game-over')
        }, 200);

        $('#level-title').text('Game Over, Press Any Key to Restart')

        startOver()
    }
}


// - - - - - - - - User click pattern

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
    checkAnswer(userClickedPattern.length - 1)
})


// - - - - - - - - Button click animation 

const clickAnimation = (button) => {
    button.addClass('pressed')

    setTimeout(() => {
        button.removeClass('pressed')
    }, 200);
}