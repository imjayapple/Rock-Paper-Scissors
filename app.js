//Create a function that captures the users choice and saves it to a lowercase value so that ex. "RocK" = "rock"
//Add an if/else to process the user input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
      }
      else {
        console.log('Error, invalid input');
      }
}

//Test function by calling it
// let myTest = getUserChoice("ROck");
// let myTest2 = getUserChoice("ahh");
// console.log(myTest);
// console.log(myTest2);

//A function to generate the computer's choice, rock, paper, or scissors using switch statement and three random
//numerical values between 0-2 (0, 1, 2)
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

//Test the function by calling it multiple times and printing the results to the console
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

//Compare the results of the human versus the computer, human win, computer win & tie scenario
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Sorry, computer won!';
        }
        else {
            return 'Congratulations, you won!';
        } 
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Sorry, computer won!';
        }
        else {
            return 'Congratulations, you won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Sorry, computer won!';
        }
        else {
            return 'Congratulations, you won!';
        }
    }
};

//Test a tie scenario, a win scenario and a lose scenario
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));

//Create a function to start the game and log the results
const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  };
  

playGame();