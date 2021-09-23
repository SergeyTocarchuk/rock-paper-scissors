const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');

const announcer = document.querySelector('.announcer');

const YOU_WON = "YOU_WON";
const COMPUTER_WON = "COMPUTER_WON";
const TIE = "TIE";

rockButton.addEventListener('click', () => playRound('rock', computerSelection));
paperButton.addEventListener('click', () => playRound('paper', computerSelection));
scissorsButton.addEventListener('click', () => playRound('scissors', computerSelection));

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
  let computerSelection = computerPlay();
  if( playerSelection === 'rock' && computerSelection === 'scissors' ){
    announce(YOU_WON);
    return 1;
  } else if ( playerSelection === 'paper' && computerSelection === 'rock' ){
    announce(YOU_WON);
    return 1;
  } else if ( playerSelection === 'scissors' && computerSelection === 'paper' ){
    announce(YOU_WON);
    return 1;
  } else if ( playerSelection === computerSelection ){
    announce(TIE);
    return 0;
  } else {
    announce(COMPUTER_WON);
    return -1;
  }
};

const announce = (type) => {
  switch(type){
    case YOU_WON:
      announcer.innerHTML = '<span class="player">You</span> Won';
      break;
    case COMPUTER_WON:
      announcer.innerHTML = '<span class="computer">Computer</span> Won';
      break;
    case TIE:
      announcer.innerText = 'Tie';        
  }
  announcer.classList.remove('hide');
};

// game function
// function game(){
//   let playerScore = 0;
//   let compScore = 0;
//   let i = 0;
  
//   let computerSelection = computerPlay().toLowerCase();
//   let result = playRound(playerSelection, computerSelection);

//     if( result === 1 ){
//       playerScore++;
//     } else if( result === -1 ){
//       compScore++;
//     }
//     i++;
//   }
//   if( playerScore > compScore ){
//   console.log(`You Won Game: Final score is You: ${playerScore} vs Computer: ${compScore}`);
//   } else {
//     console.log(`Computer Won Game: Final score is You: ${playerScore} vs Computer: ${compScore}`);
//   }
// };