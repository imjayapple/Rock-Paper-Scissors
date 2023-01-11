//Create a function that captures the users input and saves it to lowercase so that ex. "rock" = "ROCK"
//Add an if/else to accept the user input
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