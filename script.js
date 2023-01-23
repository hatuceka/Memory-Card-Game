const sesameTheme = document.querySelector('.sesame')
const pokemonTheme = document.querySelector('.pokemon')

const squares = document.querySelector('.squares')
const square = document.querySelectorAll('.square')

const restartButton = document.getElementById('restart')
const winnerMessage = document.getElementById('winner-message')

let themeChoice = null
let startGame = false
let gameEnd = false
let score = 0
let duration = 0
let winningMessage = null

let squareList = () => {
  for (let i = 0; i < 16; i++) {
    console.log(squareList)
  }
}
squareList()
