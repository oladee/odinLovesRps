const getComputerChoice = ()=>{
    const arrayChoice = ["Rock", "Scissors", "Paper"]
    let choice = arrayChoice[Math.floor(Math.random()*3)]
    return choice

}

let computerChoice = getComputerChoice()

const gameRound = (playerChoice, computersChoice)=> {
    playerChoice = playerChoice.toLowerCase()
    computersChoice = computersChoice.toLowerCase()
    console.log("com choice = " + computersChoice)
    
    if (playerChoice == computersChoice){
        return "Wow, this was a tie"
    }else if (playerChoice == "paper" && computersChoice == "rock"){
        return "You Win!"
    }else if (playerChoice == "scissors" && computersChoice == "paper"){
        return "You Win"
    }else if (playerChoice == "rock" && computersChoice == "scissors"){
        return "You Win"
    }else{
        return "Computer Wins !"
    }
}

function playGame(){
    let playersChoice = prompt("Kindly insert your object, Rock Paper or Scissors")
    let computerChoice = getComputerChoice()
    console.log(gameRound(playersChoice, computerChoice))
}

playGame()
playGame()
playGame()
playGame()

