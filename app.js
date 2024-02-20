
let gamePattern = []
const buttonColors = ['red', 'blue', 'green', 'yellow']

const nextSequence = () => {
    return Math.floor(Math.random() * 4)
}
// ez többször lefut ezért hibásan menti a 'gamePattern'-be a színeket, valszeg egy függvényen belül kekkene lekezelni az animációt és a hangokat
const randomChosenColor = () => {
    gamePattern.push(buttonColors[nextSequence()])
    return (buttonColors[nextSequence()])
}

const chosenColorAnimation = () => {
    const button = $(`#${randomChosenColor()}`)
    button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
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
    handleClick(buttonId)
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

// - - - - - - - - Play song according to click - SWITCH

const handleClick = (key) => {
    switch (key) {
        case 'blue':
            const blue = new Audio('sounds/blue.mp3')
            blue.play()
            break;

        case 'green':
            const green = new Audio('sounds/green.mp3')
            green.play()
            break;

        case 'red':
            const red = new Audio('sounds/red.mp3')
            red.play()
            break;

        case 'yellow':
            const yellow = new Audio('sounds/yellow.mp3')
            yellow.play()
            break;

        default: console.log(key)
            break;
    }
}