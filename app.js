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