const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const announcer = document.querySelector('.announcer');
const score = document.querySelector('.score');
const finalResult = document.querySelector('.finalResult');
const restartButton = document.querySelector('#restart');

const YOU_WON = "YOU_WON";
const COMPUTER_WON = "COMPUTER_WON";
const TIE = "TIE";

let isGameActive = true;

rockButton.addEventListener('click', () => playRound('rock', computerPlay()));
paperButton.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsButton.addEventListener('click', () => playRound('scissors', computerPlay()));
restartButton.addEventListener('click', () => restartGame());

//function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
  let random = Math.floor(Math.random() * 3);
  if( random === 0 ){
    return 'rock';
  } else if( random === 1 ){
    return 'paper';
  } else {
    return 'scissors';
  }
};

// All possible combinations
// rock vs paper
// rock vs scissors
// paper vs rock
// paper vs scissors
// scissors vs rock
// scissors vs paper

// play round function
function playRound(playerSelection, computerSelection){
  if(isGameActive){
    if( playerSelection === 'rock' && computerSelection === 'scissors' ){
      announce(YOU_WON);
      playerScore++;
    } else if ( playerSelection === 'paper' && computerSelection === 'rock' ){
      announce(YOU_WON);
      playerScore++;
    } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){
      announce(YOU_WON);
      playerScore++;
    } else if ( playerSelection === computerSelection ){
      announce(TIE);
    } else {
      announce(COMPUTER_WON);
      compScore++;
    }
    runningScore(playerScore, compScore);
  };
};

const announce = (type) => {
  switch(type){
    case YOU_WON:
      announcer.innerHTML = '<span class="player">You</span> Won Round';
      break;
    case COMPUTER_WON:
      announcer.innerHTML = '<span class="computer">Computer</span> Won Round';
      break;
    case TIE:
      announcer.innerText = 'Tie';        
  }
  announcer.classList.remove('hide');
};

let playerScore = 0;
let compScore = 0;

// function return running score
function runningScore(playerScore, compScore){
  score.innerHTML = `Score is <span class="player">You</span>: ${playerScore} vs <span class="computer">Computer</span>: ${compScore}`;

  let result = playerScore + compScore;
  if( result === 5 ){
    finalScore(playerScore, compScore);
  }
};

// function that reflect current score
function finalScore(playerScore, compScore){
  if( playerScore > compScore ){
  finalResult.innerHTML = `<span class="player">YOU</span> WON GAME!`;
  finalResult.classList.remove('hide');
  restartButton.classList.remove('hide');
  isGameActive = false;
  } else {
    finalResult.innerHTML = `<span class="computer">COMPUTER</span> WON GAME!`;
    finalResult.classList.remove('hide');
    restartButton.classList.remove('hide');
    isGameActive = false;
  }
};

// function will allow to restart game 
function restartGame(){
  playerScore = 0;
  compScore = 0;
  announcer.classList.add('hide');
  finalResult.classList.add('hide');
  isGameActive = true;
  return runningScore(playerScore, compScore);
};