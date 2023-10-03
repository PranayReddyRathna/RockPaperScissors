const choices=['Rock','Paper','Scissors']
const resultdiv=document.getElementById('result')
let playerscore=document.getElementById('player-score')
let handsdiv=document.getElementById("hands")
function getComputerChoice() {
    const randomchoice=Math.floor(Math.random()*choices.length)
    return choices[randomchoice]
}
function getResult(playerChoice, computerChoice) {
  let score=0
  if((playerChoice==computerChoice)){
    score=0
  }
  else if((playerChoice=='Scissors' && computerChoice=='Paper') || (playerChoice=='Paper' && computerChoice=='Rock') || (playerChoice=='Rock' && computerChoice=='Scissors')){
    score=1
  }
else{
    score=-1
}
  return score
}
function showResult(score, playerChoice, computerChoice) {
  score=getResult(playerChoice, computerChoice)
  if(score==-1){
    resultdiv.innerText='You Lose'
  }
  else if(score==1){
    resultdiv.innerText='You Win'
  }
  else{
    resultdiv.innerText='Match Draw'
  }

  
}
function onClickRPS(playerChoice) {
  const computerchoice=getComputerChoice()
  const gettingresult=getResult(playerChoice, computerchoice)

  playerscore.innerText=`${gettingresult+Number(playerscore.innerText)}`

  showResult(gettingresult, playerChoice, computerchoice)
  
  hands.innerText=`🤖:${computerchoice}  👱:${playerChoice}`
}
function playGame() {
    const rpsbtn=document.querySelectorAll('.rpsButton')
    rpsbtn.forEach(rpsbtn=>{
      rpsbtn.onclick=()=>{
        onClickRPS(rpsbtn.value)
      }
    })
 
  const endgamebtn=document.getElementById('endGameButton')
  endgamebtn.onclick=()=>{
    endGame()
  }
  
}


function endGame() {
  playerscore.innerText=''
  resultdiv.innerText=''
  handsdiv.innerText=''
}

playGame()