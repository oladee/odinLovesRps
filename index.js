let btn = document.querySelector('#buttons');
let pscore = document.querySelector('#pscore')
let cscore = document.querySelector('#cscore')
let winner = document.querySelector('#winner')
let com = document.querySelector('#com')
let player = document.querySelector('#player')

const getComputerChoice = ()=>{
    const arrayChoice = ["Rock", "Scissors", "Paper"]
    let choice = arrayChoice[Math.floor(Math.random()*3)]
    return choice

}

let playerscore = 0;
let computerscore = 0;

function checkAndAddScore(){
    if (playerscore == 5 || computerscore == 5){
        if (playerscore == 5){
            winner.textContent = `Player wins!!`
            playerscore = 0;
            computerscore = 0;
        }else {
            winner.textContent = `computer wins!!`
            playerscore = 0;
            computerscore = 0;
        }
    }
}

let computerChoice = getComputerChoice()

const gameRound = (playerChoice, computersChoice)=> {
    playerChoice = playerChoice.toLowerCase()
    computersChoice = computersChoice.toLowerCase()
    
    if (playerChoice == computersChoice){
        winner.textContent = "Wow, this was a tie no score was added, please continue"
    }else if (playerChoice == "paper" && computersChoice == "rock"){
        playerscore += 1
    }else if (playerChoice == "scissors" && computersChoice == "paper"){
        playerscore += 1
    }else if (playerChoice == "rock" && computersChoice == "scissors"){
        playerscore += 1
    }else{
        computerscore += 1
    }
    player.textContent = `You played: ${playerChoice}`
    com.textContent = `Computer played: ${computersChoice}`
    pscore.textContent = `Player Score: ${playerscore}`
    cscore.textContent = `Computer Score: ${computerscore}`
}

function playGame(playersChoice){
    if (winner.textContent){
        winner.textContent = ""
    }
    let computerChoice = getComputerChoice()
    gameRound(playersChoice, computerChoice)
    checkAndAddScore()
}

btn.addEventListener('click', (e)=>{
    let target = e.target

    switch (target) {
        case rock:
            playGame('rock')
            break;
        case scissors:
            playGame('scissors')
            break;
        case paper:
            playGame('paper')
            break;
    }
    // console.log(target.id)
})

