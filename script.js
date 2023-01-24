const sesameTheme = document.querySelector('.sesame')
const pokemonTheme = document.querySelector('.pokemon')

const squares = document.querySelector('.squares')
const square = document.querySelectorAll('.square')

const restartButton = document.getElementById('restart')
const winnerMessage = document.getElementById('winner-message')

let score = document.querySelector('.score')
let duration = document.querySelector('.duration')
let moves = document.querySelector('.moves')

let innerCards = {
  sesameList: [
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
      url: 'https://pngimg.com/uploads/elmo/elmo_PNG90489.png'
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
  ],
  pokemonList: [
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
}

document.querySelector('.square').style.backgroundImage =
  'url(https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-big-bird-sesame-street.jpg)'

let themeChoice = null
let startGame = false
let gameEnd = false
let winningMessage = null
let closedCard = true
let openCard = false

if (themeChoice === sesameTheme) {
  let shuffledCards = []
  for (let i = 0; i < 2; i++) {
    sesameList.forEach((sesameList, index) => {
      shuffledCards.push(sesameList[index].url)
    })
  }
} else {
  for (let i = 0; i < 2; i++) {
    pokemonList.forEach((pokemonList, index) => {
      shuffledCards.push(pokemonList[index].url)
    })
  }
}

if (themeChoice === sesameTheme) {
  innerCards.image = sesameList
} else {
  innerCards.image = pokemonList
}

winningMessage.innerText = `Congratulations!`
score = score + 1
duration = 20 //will change to a function
moves = 20 //will change to a function
//Should be add gameEnd, score, move, duration
