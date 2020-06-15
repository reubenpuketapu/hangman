var express = require('express');
var router = express.Router();
var Game = require('../game');

var game = new Game();

router.get('/game', function(req, res, next) {
  res.json({ 
    state: {
      lives: game.getLivesLeft(),
      guess: game.getPlayerState(),
      lettersGuessed: game.getLettersGuessed(),
      isWon: game.isWon(),
      isLost: game.isLost()
    } 
  });
});

router.post('/game', function(req, res, next) {
  const guess = req.body.letter;
  game.addGuess(guess);

  res.json({ 
    state: {
      lives: game.getLivesLeft(),
      guess: game.getPlayerState(),
      lettersGuessed: game.getLettersGuessed(),
      isWon: game.isWon(),
      isLost: game.isLost()
    } 
  });
});

router.put('/reset', function(req, res, next) {
  game.resetGame();
  res.json({ 
    state: {
      lives: game.getLivesLeft(),
      guess: game.getPlayerState(),
      lettersGuessed: game.getLettersGuessed(),
      isWon: game.isWon(),
      isLost: game.isLost()
    } 
  });
});

module.exports = router;
