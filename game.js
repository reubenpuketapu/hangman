var fs = require('fs');

const startingLives = 10;
const filename = "./data.txt"

class Game {
  constructor(){
    this.word = readWord();
    this.lettersGuessed = [];
    this.livesLeft = startingLives;
  }

  addGuess(letter){
    if(!this.lettersGuessed.includes(letter)){
      this.lettersGuessed.push(letter);
      if(!this.word.split('').includes(letter)){
        this.livesLeft--;
      }
    }
  }

  getLettersGuessed(){
    return this.lettersGuessed.filter( x => !this.word.includes(x));
  }

  getPlayerState(){
    return this.word.split('').map( x => this.lettersGuessed.includes(x) ? x : '-' )
  }

  getLivesLeft(){
    return this.livesLeft;
  }

  isWon(){
    return !this.getPlayerState().includes('-');
  }

  isLost(){
    return this.getLivesLeft() === 0;
  }

  resetGame(){
    this.word = readWord();
    this.lettersGuessed = [];
    this.livesLeft = startingLives;
  }
}

function bufferFile(path) {
  return fs.readFileSync(path,{ encoding: 'utf8' }).split(/\r?\n/);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function readWord(){
  var BUFFER = bufferFile(filename);
  var cleaned = [];
  BUFFER.forEach(element => {
    if(element.length > 3){
      cleaned.push(element)
    }
  });

  return cleaned[getRandomInt(cleaned.length)]
}

module.exports = Game