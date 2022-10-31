let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Return random integer between 0-9
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
}
// Determines which player wins
const compareGuesses = (userGuess, cpuGuess, target) => {
    // Local Variables
    const userTargetDiff = target - userGuess;
    const cpuTargetDiff = target - cpuGuess;

    // Determine Outcome
    if(userTargetDiff < cpuTargetDiff){
        return true;
    } else if(cpuTargetDiff < userTargetDiff){
        return false;
    } else if (userTargetDiff == cpuTargetDiff){
        return true
    } else {
        return false;
    }
}
// Updates the score
const updateScore = (victor) => {
    if (victor === 'human') humanScore++;
    if (victor === 'computer') computerScore++;
}
// Progresses the Game
const advanceRound = () => {
    currentRoundNumber++;
}