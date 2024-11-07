const button = document.getElementById('button')
const game = document.getElementById('game-container')
const wordDisplay = document.getElementById('word-display')
const inputWord = document.getElementById('input-word')

const wordList = [
    "apple", "banana", "orange", "grape", "melon", "berry", "cherry", "lemon", "peach", "plum",
    "chair", "table", "desk", "sofa", "bed", "lamp", "couch", "rug", "shelf", "stool",
    "sun", "moon", "star", "cloud", "rain", "storm", "wind", "snow", "sky", "thunder",
    "cat", "dog", "bird", "fish", "horse", "cow", "sheep", "duck", "pig", "goat",
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white",
    "jump", "run", "walk", "climb", "crawl", "skip", "dance", "sing", "shout", "whisper",
    "book", "pen", "pencil", "paper", "bag", "map", "globe", "ruler", "scissors", "eraser",
    "car", "bus", "train", "plane", "ship", "bike", "scooter", "truck", "boat", "helicopter",
    "bread", "milk", "cheese", "butter", "egg", "meat", "soup", "cake", "pie", "cookie",
    "king", "queen", "prince", "princess", "knight", "castle", "dragon", "sword", "shield", "crown"
];

let currentPosition = 0

function startGame() {
    button.classList.add('hidden')
    game.classList.remove('hidden')

    wordDisplay.innerHTML = wordList[currentPosition]
    
    
}

function checkEnter(event) {
    if (event.key === "Enter") {
        let typedWord = inputWord.value.trim().toLowerCase()
        let currentWord = wordList[currentPosition].toLowerCase()

        if (typedWord === currentWord) {
            advance()
            inputWord.value = ''
        }
    }
}

function advance() {
    currentPosition += 1
    
    wordDisplay.innerHTML = wordList[currentPosition]
}
