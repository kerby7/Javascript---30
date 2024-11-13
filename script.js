let computerMove = " ";
let result = {
  "win" : 0,
  "loss" : 0,
  "tie"  : 1
};

function playerPick(){
  computerMovePick();
  if(computerMove === "rock" ){
    result = "tie";
  }
  else if(computerMove === "paper"){
    result = "You win"
  }
  else{
    result = "You lost";
  }
}

function computerMovePick(){
  const index = Math.random();
  if(index >= 0 && index < 1 / 3){
    computerMove = "rock"
  }
  else if(index >= 1 / 3 && index < 2 / 3){
    computerMove = "paper";
  }
  else{
    computerMove = "scissors";
  }
}

