let user = 0;
let cpu = 0;


let array = ["rock", "paper", "scissors"];
    function getComputerChoice() {
       return random
    }
const rockchoice = document.querySelector('#rock2');
const paperchoice = document.querySelector('#paper2');
const scissorschoice = document.querySelector('#scissors2');
let playerScore = document.querySelector('.playerScores')
let computerScore = document.querySelector('.computerScores')
    
    rock2.addEventListener('click', () => {
        console.log(round('rock'))
    })

    paper2.addEventListener('click', () => {
        console.log(round('paper'))
    })

    scissors2.addEventListener('click', () => {
        console.log(round('scissors'))
    })
    function round(playerSelection) {
        let random = array[Math.floor(Math.random()*array.length)];
        random = random.toLowerCase()
        
        if (playerSelection == "rock" && random == "scissors" || playerSelection == "scissors" && random == "paper" || playerSelection == "paper" && random == "rock"){
            playerSelection = playerSelection.toUpperCase()
            random = random.toUpperCase()
            console.log("You win!" + " " + playerSelection + " beats" +" " + random + "!")
            user++
            console.log(`${user}:${cpu}`)
            
            
            
        }
        else if(random == "rock" && playerSelection == "scissors" || random == "scissors" && playerSelection == "paper" || random == "paper" && playerSelection == "rock") {
            playerSelection = playerSelection.toUpperCase()
            random = random.toUpperCase()
            console.log("You lose!" + " " + random + " beats" +" " + playerSelection + "!")
            cpu++
            console.log(`${user}:${cpu}`)
            
            
        }
        else if(random == playerSelection){
            return("It's a draw!")
        }
        else {
            return("Not an option!")
        }
    }