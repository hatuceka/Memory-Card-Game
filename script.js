const winningImage = document.getElementById('h1')

const container = document.querySelector('.container')
const squares = document.querySelectorAll('.square')

const winnerMessage = document.getElementById('winner-message')

let startGame = false
let gameEnd = false

const sesameList = [
  {
    name: 'big bird',
    url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-big-bird-sesame-street.jpg'
  },
  {
    name: 'cookie monster',
    url: 'https://images.homedepot-static.com/catalog/productImages/1000/f3/f3e27562-f051-4db6-9d34-b04b890972e4_1000.jpg'
  },
  {
    name: 'elmo',
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F143-1432776_sesame-street-elmo-png-transparent-png.png&f=1&nofb=1&ipt=7a365df24abdebe88fda172795c4b20716de4c0b1b635076b8101d1bb61b907e&ipo=images'
  },
  {
    name: 'oscar',
    url: 'https://i5.walmartimages.com/asr/04d0f924-bcf7-40b9-987c-f6473c26e49b_1.133000dfcc224f9fe22dd2e1c0fcb977.jpeg'
  },
  {
    name: 'grover',
    url: 'http://media.gq.com/photos/5707f1094cfa20ec099b18eb/master/w_800/Grover.jpg'
  },
  {
    name: 'julia',
    url: 'https://www.jing.fm/clipimg/detail/141-1410533_free-download-julia-sesame-street-clipart-julia-elmo.png'
  },
  {
    name: 'ernie',
    url: 'https://www.seekpng.com/png/detail/64-649046_at-the-movies-ernie-sesame-street.png'
  },
  {
    name: 'bert',
    url: 'https://www.clipartkey.com/mpngs/m/266-2669354_sesame-street-bert-frowning-sesame-street-bert.png'
  }
]
const pokemonList = [
  {
    name: 'bulbasaur',
    url: 'https://www.kindpng.com/picc/m/695-6959690_bulbasaur-transparent-image-pokemon-bulbasaur-hd-png-download.png'
  },
  {
    name: 'squirtle',
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14729e81-f98c-4a2c-83c3-12c75264fd6d/d4708gi-08fad89b-0ce4-4c11-9db0-6d114d9e1168.png/v1/fill/w_900,h_939,q_75,strp/hi_res_squirtle_by_elektro_omega-d4708gi.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xNDcyOWU4MS1mOThjLTRhMmMtODNjMy0xMmM3NTI2NGZkNmQvZDQ3MDhnaS0wOGZhZDg5Yi0wY2U0LTRjMTEtOWRiMC02ZDExNGQ5ZTExNjgucG5nIiwid2lkdGgiOiI8PTkwMCIsImhlaWdodCI6Ijw9OTM5In1dXX0.z4zSGn4mi4faqlQJqMXJ4fx8JAm5D-gghAcnBn6reB8'
  },
  {
    name: 'charmander',
    url: 'https://wallpapercave.com/wp/spnAnXH.jpg'
  },
  {
    name: 'eevee',
    url: 'https://images.saymedia-content.com/.image/t_share/MTc0NDU3NDY3OTkxMTcyNzQy/pokemon-ultra-sun-and-ultra-moon-eevee-evolution-guide.jpg'
  },
  {
    name: 'snorlax',
    url: 'https://clipground.com/images/snorlax-clipart-4.png'
  },
  {
    name: 'jigglypuff',
    url: 'https://www.kindpng.com/picc/m/1-11187_jigglypuff-pokemon-jigglypuff-hd-png-download.png'
  },
  {
    name: 'piplup',
    url: 'https://www.clipartkey.com/mpngs/m/51-511703_image-pokemon-piplup.png'
  },
  {
    name: 'pikachu',
    url: 'https://www.kindpng.com/picc/m/9-96764_pokemon-pikachu-png-photo-pokemon-pikachu-png-transparent.png'
  }
]
let userChoice = []
let shuffledCards = []

let move = 0
let elapsedTime = 0
let interval
let gameSound = new Audio('./Splashing Around - The Green Orbs.mp3')
gameSound.loop = true
gameSound.volume = 0.1
const start = () => {
  gameSound.play()
  startTime = Date.now()
  interval = setInterval(() => {
    elapsedTime = Date.now() - startTime
    let minutes = Math.floor(elapsedTime / 60000)
    let seconds = ((elapsedTime % 60000) / 1000).toFixed(0)
    document.querySelector('.duration').innerText = `Time: ${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`
  }, 1000)
}

let clicks = []
let clickSound = new Audio('./mixkit-arcade-game-jump-coin-216.wav')
const squareClick = (event) => {
  let squareId = parseInt(event.target.id)

  event.target.style.backgroundImage = `url(${shuffledArray[squareId]})`

  event.target.style.backgroundSize = 'cover'
  event.target.innerText = ''

  move++
  document.querySelector('.moves').innerText = `Moves: ${move}`
  clickSound.play()
  clicks.push(event.target)

  let winningSound = new Audio('./Female Crowd Celebration.mp3')
  const winningConditions = () => {
    let matchedSquares = 0
    squares.forEach((square) => {
      if (square.classList.contains('matched')) {
        matchedSquares++
      }
    })
    if (matchedSquares === squares.length) {
      clearInterval(interval)
      gameSound.pause()
      winningSound.play()
      gameEnd = true
      winningImage.style.backgroundImage = `url(https://i.pinimg.com/originals/e5/27/9f/e5279f5b58c4d921d8439c253bb15362.gif)`
      winningImage.style.backgroundSize = 'cover'
      winnerMessage.innerText = 'WELL DONE!'
      winnerMessage.classList.add('blink')
    }
  }

  if (clicks.length === 2) {
    squares.forEach((square, index) => {
      square.removeEventListener('click', squareClick)
    })
    matchedSound = new Audio('./mixkit-positive-interface-beep-221.wav')
    unmatchedSound = new Audio('./mixkit-negative-tone-interface-tap-2569.wav')
    if (clicks[0].style.backgroundImage === clicks[1].style.backgroundImage) {
      clicks[0].disabled = true
      clicks[1].disabled = true
      clicks[0].classList.add('matched')
      clicks[1].classList.add('matched')
      matchedSound.play()
      clicks = []
      squares.forEach((square, index) => {
        square.addEventListener('click', squareClick)
      })
      winningConditions()
      unmatchedSound = new Audio(
        './mixkit-negative-tone-interface-tap-2569.wav'
      )
    } else {
      unmatchedSound.play()
      const flipCard = () => {
        squares.forEach((square) => {
          console.log(square)
          if (square.classList.contains('matched')) {
            return
          } else {
            square.style.backgroundImage = null
            square.innerText = '?'
            squares.forEach((square, index) => {
              square.addEventListener('click', squareClick)
            })
          }
        })

        clicks = []
      }

      setTimeout(() => flipCard(), 1000)
    }
  }
}
let shuffledArray
//const shuffledArray = shuffledCards.sort((a, b) => 0.5 - Math.random())
squares.forEach((square, index) => {
  square.addEventListener('click', squareClick)
})
const sesameTheme = document.querySelector('.sesame')
console.log(sesameTheme)
sesameTheme.addEventListener('click', () => {
  userChoice = sesameList
  sesameTheme.disabled = true
  pokemonTheme.disabled = true
  for (let i = 0; i < 2; i++) {
    userChoice.forEach((item) => {
      shuffledCards.push(item.url)
    })
  }
  shuffledArray = shuffledCards.sort((a, b) => 0.5 - Math.random())
  start()
})
const pokemonTheme = document.querySelector('.pokemon')
pokemonTheme.addEventListener('click', () => {
  userChoice = pokemonList
  sesameTheme.disabled = true
  pokemonTheme.disabled = true
  for (let i = 0; i < 2; i++) {
    userChoice.forEach((item) => {
      shuffledCards.push(item.url)
    })
  }
  shuffledArray = shuffledCards.sort((a, b) => 0.5 - Math.random())
  start()
})
const restartButton = document.getElementById('restart')
restartButton.addEventListener('click', () => {
  winningSound.pause()
  location.reload()
  winnerMessage.classList.remove('blink')
})
