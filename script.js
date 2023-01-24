const play = document.getElementById('play button')

const container = document.querySelector('.container')
const squares = document.querySelectorAll('.square')

const restartButton = document.getElementById('restart')
const winnerMessage = document.getElementById('winner-message')

let score = document.querySelector('.score')
let duration = document.querySelector('.duration')
let moves = document.querySelector('.moves')

let startGame = false
let gameEnd = false
let winningMessage = null
let closedCard = true
let openCard = false

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
const sesameTheme = document.querySelector('.sesame')
const pokemonTheme = document.querySelector('.pokemon')

const start = () => {
  shuffledCards = []
  for (let i = 0; i < 2; i++) {
    userChoice.forEach((item) => {
      shuffledCards.push(item.url)
    })
  }

  const shuffledArray = shuffledCards.sort((a, b) => 0.5 - Math.random())
  squares.forEach((square, index) => {
    square.addEventListener('click', () => {
      square.style.backgroundImage = `url(${shuffledArray[index]})`
      square.style.backgroundSize = 'cover'
      square.innerText = ''
    })
  })
}
sesameTheme.addEventListener('click', () => {
  userChoice = sesameList
  sesameTheme.disabled = true
  pokemonTheme.disabled = true
  start()
})
pokemonTheme.addEventListener('click', () => {
  userChoice = pokemonList
  sesameTheme.disabled = true
  pokemonTheme.disabled = true
  start()
})

//squares.forEach((square) => {
//square.addEventListener('click', () => {
//let shuffledCards = []
//for (let i = 0; i < 2; i++) {
//pokemonList.forEach((pokemonItem, index) => {
//shuffledCards.push(pokemonItem[index])
//})
//}
//})
//})
//let sesameList = document.querySelectorAll('.square').style.backgroundImage
//sesameTheme.addEventListener('click', () => {
//play.addEventListener('click', () => {
//document.querySelector('.square').style.backgroundImage = sesameList[0].url
//document.querySelector('.square').style.backgroundImage = sesameList[1].url
//document.querySelector('.square').style.backgroundImage = sesameList[2].url
//document.querySelector('.square').style.backgroundImage = sesameList[3].url
//document.querySelector('.square').style.backgroundImage = sesameList[4].url
//document.querySelector('.square').style.backgroundImage = sesameList[5].url
//document.querySelector('.square').style.backgroundImage = sesameList[6].url
//document.querySelector('.square').style.backgroundImage = sesameList[7].url

//document.querySelector('.square').style.backgroundImage = pokemonList[0].url
//document.querySelector('.square').style.backgroundImage = pokemonList[1].url
//document.querySelector('.square').style.backgroundImage = pokemonList[2].url
//document.querySelector('.square').style.backgroundImage = pokemonList[3].url
//document.querySelector('.square').style.backgroundImage = pokemonList[4].url
//document.querySelector('.square').style.backgroundImage = pokemonList[5].url
//document.querySelector('.square').style.backgroundImage = pokemonList[6].url
//document.querySelector('.square').style.backgroundImage = pokemonList[7].url

//Adding some event listeners

//winningMessage.innerText = `Congratulations!`
//score = score + 1
//duration = 20 //will change to a function
//moves = 20 //will change to a function
//Should be add gameEnd, score, move, duration
