let gamePattern = []
const buttonColors = ['red', 'blue', 'green', 'yellow']

const nextSequence = () => {
    return Math.floor(Math.random() * 4)
}

const randomChosenColor = () => {
    gamePattern.push(buttonColors[nextSequence()])
    console.log(gamePattern)
}