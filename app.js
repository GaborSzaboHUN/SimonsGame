let gamePattern = []
const buttonColors = ['red', 'blue', 'green', 'yellow']

const nextSequence = () => {
    return Math.floor(Math.random() * 4)
}

const randomChosenColor = () => {
    gamePattern.push(buttonColors[nextSequence()])
    return (buttonColors[nextSequence()])
}

// - - - - - - - - Button click event listener 

const buttons = $('[type="button"]')

buttons.click((e) => {
    const buttonId = e.target.id
    handleClick(buttonId)
    clickAnimation($(e.target))
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