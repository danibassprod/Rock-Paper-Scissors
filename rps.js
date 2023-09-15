        let playerScore = 0;
        let computerScore = 0;
        let winner;
        
        function playRound(playerSelection) {

            function getComputerChoice() {
            let computerChoice = Math.random();
            let result
            if (computerChoice < 0.3) {
                    result = "Rock"
                    return result;
                } else if (computerChoice > 0.3 && computerChoice < 0.6) {
                    result = "Paper"
                    return result;
                } else if (computerChoice > 0.6 && computerChoice < 1) {
                    result = "Scissors"
                    return result;
                }
            }

            let stringFirstLetter = playerSelection.charAt(0)
            let stringSlice = playerSelection.slice(1)
            let stringUpperCase = stringFirstLetter.toUpperCase()
            let stringLowerCase = stringSlice.toLowerCase()
            let playerResult = stringUpperCase + stringLowerCase
            let finalResult = playerResult + " " + getComputerChoice()
            // First word is the player Choice, second one is computer choice
            if (finalResult === "Rock Scissors") {
                winner = "You win! Rock beats Scissors";
                return winner;  
            } else if (finalResult === "Scissors Rock") {
                winner = "You lose! Rock beats Scissors";
                return winner;;
            } else if (finalResult === "Rock Paper") {
                winner = "You lose! Paper beats Rock";
                return winner;
            } else if (finalResult === "Paper Rock") {
                winner = "You win! Paper beats Rock"
                return winner;
            } else if (finalResult === "Scissors Paper") {
                winner = "You win! Scissors beats Paper";
                return winner;  
            } else if (finalResult === "Paper Scissors") {
                winner = "You lose! Scissors beats Paper"
                return winner;
            } else {
                winner = "Draw";
                return winner;
            }
        } 

        const btns = document.querySelectorAll('button')
        btns.forEach(btn => btn.addEventListener('click', function() {
            let playerChoice = this.classList.value
            console.log(playRound(playerChoice))
        }))

        function game(roundWinner) {
            if (roundWinner === "You win! Rock beats Scissors" || 
            roundWinner === "You win! Scissors beats Paper" || 
            roundWinner === "You win! Paper beats Rock") {

                playerScore++
                console.log(winner)
                console.log(playerScore, computerScore)

            } else if (roundWinner === "You lose! Rock beats Scissors" || 
            roundWinner === "You lose! Paper beats Rock" || 
            roundWinner === "You lose! Scissors beats Paper") {

                computerScore++
                console.log(winner)
                console.log(playerScore, computerScore)

            } else if (roundWinner === "Draw") {

                console.log("Draw!")
            }

            if ((playerScore === 5 && computerScore === 4) || (playerScore === 5 && computerScore === 3) || 
                (playerScore === 5 && computerScore === 2) || (playerScore === 5 && computerScore === 1) || 
                (playerScore === 5 && computerScore === 0)) {

                console.log("Player beats Computer!")
                playerScore = 0;
                computerScore = 0;

            } else if ((computerScore === 5 && playerScore === 4) || (computerScore === 5 && playerScore === 3) || 
                (computerScore === 5 && playerScore === 2 || (computerScore === 5 && playerScore === 1) || 
                (computerScore === 5 && playerScore === 0))) {

                console.log("Computer beats Player!")
                playerScore = 0;
                computerScore = 0;

            }
        }