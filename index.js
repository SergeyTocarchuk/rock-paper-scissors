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
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else if ( playerSelection === 'paper' && computerSelection === 'rock' ){
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  } else if ( playerSelection === computerSelection ){
    return `TIE! ${playerSelection} equals ${computerSelection}`;
} else {
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}