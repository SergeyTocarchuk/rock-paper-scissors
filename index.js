//function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
  let random = Math.floor(Math.random() * 3);
  if( random === 0 ){
    return 'Rock';
  } else if( random === 1 ){
    return 'Paper';
  } else {
    return 'Scissors';
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
  if( playerSelection === 'rock' && computerSelection === 'scissors' ){
    console.log(`You Won Round! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if ( playerSelection === 'paper' && computerSelection === 'rock' ){
    console.log(`You Won Round! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){
    console.log(`You Won Round! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if ( playerSelection === computerSelection ){
    console.log(`TIE! ${playerSelection} equals ${computerSelection}`);
    return 0;
  } else {
    console.log(`Computer Won Round! ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
};

// make function’s playRound parameters case-insensitive
const playerSelection = prompt("Make your choice: Rock, Paper or Scissors").toLowerCase();
const computerSelection = computerPlay().toLowerCase();

