        let playerScore = 0;
        let computerScore = 0;
        let winner;
        
        function playRound(playerSelection) {

            function getComputerChoice() {
            let computerChoice = Math.random();
            let result
            if (computerChoice < 0.35) {
                    result = "Rock"
                    return result;
                } else if (computerChoice > 0.35 && computerChoice < 0.65) {
                    result = "Paper"
                    return result;
                } else if (computerChoice > 0.65 && computerChoice < 1) {
                    result = "Scissors"
                    return result;
                }
            }

            let stringFirstLetter = playerSelection.charAt(0).toUpperCase()
            let stringSlice = playerSelection.slice(1).toLowerCase()
            let playerResult = stringFirstLetter + stringSlice;
            let finalResult = playerResult + " " + getComputerChoice()
            // First word represents the player choice, second one computer choice.
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
        const divResults = document.querySelector('.winner')
        divResults.textContent = 'Get Ready!'
        const score = document.querySelector('.score')
        score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`

        btns.forEach(btn => btn.addEventListener('click', function() {
            let playerChoice = this.classList.value;
            game(playRound(playerChoice));
        }))

        function game(roundWinner) {
            if (roundWinner === "You win! Rock beats Scissors" || 
            roundWinner === "You win! Scissors beats Paper" || 
            roundWinner === "You win! Paper beats Rock") {

                playerScore++
                divResults.textContent = winner;
                score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`

            } else if (roundWinner === "You lose! Rock beats Scissors" || 
            roundWinner === "You lose! Paper beats Rock" || 
            roundWinner === "You lose! Scissors beats Paper") {

                computerScore++
                divResults.textContent = winner;
                score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`

            } else if (roundWinner === "Draw") {

                score.textContent = `Player: ${playerScore} - Computer: ${computerScore}`
                divResults.textContent = 'Draw!';
            }

            if ((playerScore === 5 && computerScore === 4) || (playerScore === 5 && computerScore === 3) || 
                (playerScore === 5 && computerScore === 2) || (playerScore === 5 && computerScore === 1) || 
                (playerScore === 5 && computerScore === 0)) {

                divResults.textContent = "Player beats Computer!";
                playerScore = 0;
                computerScore = 0;

            } else if ((computerScore === 5 && playerScore === 4) || (computerScore === 5 && playerScore === 3) || 
                (computerScore === 5 && playerScore === 2 || (computerScore === 5 && playerScore === 1) || 
                (computerScore === 5 && playerScore === 0))) {

                divResults.textContent = "Computer beats Player!";
                playerScore = 0;
                computerScore = 0;

            }
        }