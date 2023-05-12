const roundText = document.querySelector("#round-text");
const playerText = document.querySelector("#player-text");
const computerText = document.querySelector("#computer-text");
const resultText = document.querySelector("#result-text");
const overallWinner = document.querySelector("#overall-winner-text");
const choiceBtns = document.querySelectorAll(".choice-button");
let player;
let computer;
let result;

let round = 1;
let computerScoreOutOf5 = 0;
let userScoreOutOf5 = 0;
console.log("user", userScoreOutOf5);
console.log("computer", computerScoreOutOf5);

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    roundText.textContent = `Round: ${round}`;
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    overallWinner.textContent = "Best Out of Five: ";
    if (resultText.textContent === "You win!") {
        userScoreOutOf5 ++;
        console.log("user", userScoreOutOf5);
        if (userScoreOutOf5 === 3) {
            round ++;
            overallWinner.textContent = "Best Out of Five: Player!";
            userScoreOutOf5 = 0;
            computerScoreOutOf5 = 0;
            console.log("user", userScoreOutOf5);
            console.log("computer", computerScoreOutOf5);
        }
    } else if (resultText.textContent == "You Lose!") {
        computerScoreOutOf5 ++;
        console.log("computer", computerScoreOutOf5);
        if (computerScoreOutOf5 === 3) {
            overallWinner.textContent = "Best Out of Five: Computer!";
            userScoreOutOf5 = 0;
            computerScoreOutOf5 = 0;
            round ++;
            console.log("user", userScoreOutOf5);
            console.log("computer", computerScoreOutOf5);
        }
    }
    
} ));


function computerTurn() {
    const randNum = Math.floor(Math.random() * 3 ) + 1;

    switch(randNum) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
    }
}

function checkWinner() {
    if(player == computer) {
        return "Draw!";
    } else if (computer == "Rock") {
        return (player == "Paper") ? "You win!" : "You Lose!"
    } else if (computer == "Paper") {
        return (player == "Scissors") ? "You win!" : "You Lose!"
    } else if (computer == "Scissors") {
        return (player == "Rock") ? "You win!" : "You Lose!"
    }
}

// function keepScore() {
//     if (resultText.textcontent == "You win!") {
//         userScoreOutOf5 = userScoreOutOf5 + 1;
//         console.log(userScoreOutOf5);
//     }
// }
// keepScore();

// function keepScore() {
//     if (document.querySelector("#result-text").innerHTML === "You win!") {
//         userScoreOutOf5 ++
//         overallWinner.textContent = userScoreOutOf5;
//     }
// }

// keepScore();

// function keepScore() {
//     if (checkWinner() == "You win!") {
//         userScoreOutOf5 = userScoreOutOf5 + 1;
//         console.log(userScoreOutOf5);
//     }
// }

// keepScore();

// function keepScore() {
//     if (resultText.textContent === "You win!") {
//         userScoreOutOf5 = userScoreOutOf5 + 1;
//     } else if (resultText.textContent === "You Lose!") {
//         computerScoreOutOf5 = computerScoreOutOf5 + 1;
//     }
//         console.log(userScoreOutOf5);
//         console.log(computerScoreOutOf5);
    
// }

// keepScore();