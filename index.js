var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
];

var currentWord = '';
var displayedWord = '';
var remainingGuesses = 10;
var incorrectLetters = [];
var wins = 0;
var losses = 0;

var correct = 0;
var incorrect = 0;

document.querySelector('#word-to-guess').textContent = displayedWord;
  correct = 0;
  incorrect = 0;

document.onkeyup = function(bananas) {
  var key = bananas.key;
  console.log(key);
}

document.onkeyup = function(javascript) {
  var key = javascript.key;
  console.log(key);
  previousWord = "bananas";
  lastWord.textContent = previousWord;
}

function initializeGame() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  displayedWord = '_'.repeat(currentWord.length);

  remainingGuesses = 10;
  incorrectLetters = [];

  document.getElementById('word-to-guess').textContent = displayedWord;
  document.getElementById('incorrect-letters').textContent = '';
  document.getElementById('remaining-guesses').textContent = remainingGuesses;
  document.getElementById('previous-word').textContent = '';
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
}

function handleGuess(letter) {
  if (letter.length === 1 && /[a-z]/i.test(letter) && !incorrectLetters.includes(letter)) {
    if (currentWord.includes(letter)) {
      let updatedDisplayedWord = displayedWord.split('');
      for (let i = 0; i < currentWord.length; i++) {
          if (currentWord[i] === letter) {
              updatedDisplayedWord[i] = letter;
          }
      }
      displayedWord = updatedDisplayedWord.join('');
      document.getElementById('word-to-guess').textContent = displayedWord;

      if (incorrectLetters.includes(letter) || displayedWord.includes(letter)) {
        return;
      }

      if (!displayedWord.includes('_')) {
        wins++;
        document.getElementById('wins').textContent = wins;
        document.getElementById('previous-word').textContent = currentWord;
        initializeGame();
      }

    } else {
      incorrectLetters.push(letter);
      remainingGuesses--;
      document.getElementById('incorrect-letters').textContent = incorrectLetters.join(', ');
      document.getElementById('remaining-guesses').textContent = remainingGuesses;

      if (remainingGuesses === 0) {
        losses++;
        document.getElementById('losses').textContent = losses;
        document.getElementById('previous-word').textContent = currentWord;
        initializeGame();
      }
    }
  }
}

document.addEventListener('keydown', function(event) {
  handleGuess(event.key.toLowerCase());
});

initializeGame();