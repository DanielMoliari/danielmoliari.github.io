function getComputerChoice() {
    let options = ['Rock', 'Paper', 'Scissors']
    const computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
  }
  
  function getResult(playerChoice, computerChoice) {
    let score
    if(playerChoice === computerChoice){
      score = 0
    } else if((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')){
      score = 1
    } else {
      score = -1
    }
  
    return score
  }
  
  function showResult(score, playerChoice, computerChoice) {
    let result = document.getElementById('result')
    if (score == 1){
      result.innerText = 'You Win!'
    }else if (score == -1){
      result.innerText = 'You Lose!'
    }else{
      result.innerText = "It's Draw!"
    }
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let text = document.getElementById('text')
    text.innerText = 'Your Score:'
    playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱${playerChoice} vs 🤖${computerChoice}`
  }
  
  function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
  }
  
  function playGame() {
    let buttons = document.querySelectorAll('.rpsButton')
    buttons.forEach(button => {
      button.onclick = () => {
        onClickRPS(button)
      }
    })
    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
  }
  
  function endGame() {
    let result = document.getElementById('result')
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
    text.innerText = ''
  }
  
  playGame()