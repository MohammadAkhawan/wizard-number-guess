const userInputElement = document.querySelector("#user-input");
const startBtnElement = document.querySelector("#start");
const resetBtnElement = document.querySelector("#reset");
const wizardGuessesElement = document.querySelector(".wizard-guesses");
const lowerBtnElement = document.querySelector("#lower");
const correctBtnElement = document.querySelector("#correct");
const higherBtnElement = document.querySelector("#higher");

let wizardGuesses = [];
let lowerGuessClose = 0;
let higherGuessClose = 100;
let userInput = 0;

const checkUserInput = (number) => {
    if (number < 0 || number > 100) {
        userInputElement.value = "";
        alert("Please Enter A Number Between 1 & 100!");
    } else {
        return true;
    }
};

const lockPlayerChoice = () => {
    userInputElement.disabled = true;
    startBtnElement.disabled = true;
};

const wizardGuessCheck = () => {
    const wizardGuess = Math.floor(Math.random() * 100 + 1);
    wizardGuesses.push(wizardGuess);
    wizardGuessesElement.textContent += `${wizardGuess.toString()} | `;
};

const startTheGame = () => {
    userInput = Number(userInputElement.value);
    if (checkUserInput(userInput)) {
        lockPlayerChoice();
        wizardGuessCheck(100);
    }
};

startBtnElement.addEventListener("click", startTheGame);

const makeWizardGuessLower = () => {
    higherGuessClose = wizardGuesses[wizardGuesses.length - 1];
    let wizardGuessForLower = Math.floor(
        Math.random() * (higherGuessClose - lowerGuessClose) +
            lowerGuessClose +
            1
    );
    wizardGuesses.push(wizardGuessForLower);
    wizardGuessesElement.textContent += `${wizardGuessForLower.toString()} | `;
};

lowerBtnElement.addEventListener("click", makeWizardGuessLower);

const makeWizardGuessHigher = () => {
    lowerGuessClose = wizardGuesses[wizardGuesses.length - 1];
    let wizardGuessForHigher = Math.floor(
        Math.random() * (higherGuessClose - lowerGuessClose) +
            lowerGuessClose +
            1
    );
    if (wizardGuessForHigher === higherGuessClose) {
        wizardGuessForHigher--;
    }
    wizardGuesses.push(wizardGuessForHigher);
    wizardGuessesElement.textContent += `${wizardGuessForHigher.toString()} | `;
};

higherBtnElement.addEventListener("click", makeWizardGuessHigher);

const finishTheGame = () => {
    wizardGuessesElement.textContent = "";
    userInputElement.value = "";
    userInputElement.disabled = false;
    startBtnElement.disabled = false;
    wizardGuesses = [];
    lowerGuessClose = 0;
    higherGuessClose = 100;
    userInput = 0;
    alert("The Wizard Find Your Number!!! Try Again");
};

correctBtnElement.addEventListener("click", finishTheGame);

const resetTheGame = () => {
    wizardGuessesElement.textContent = "";
    userInputElement.value = "";
    userInputElement.disabled = false;
    startBtnElement.disabled = false;
    wizardGuesses = [];
    lowerGuessClose = 0;
    higherGuessClose = 100;
    userInput = 0;
}

resetBtnElement.addEventListener("click", resetTheGame);
