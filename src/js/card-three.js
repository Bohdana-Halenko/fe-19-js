// let playerScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//   const choices = ["камінь", "ножиці", "папір"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function determineWinner(playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) {
//     return "Нічия!";
//   }
//   if (
//     (playerChoice === "камінь" && computerChoice === "ножиці") ||
//     (playerChoice === "ножиці" && computerChoice === "папір") ||
//     (playerChoice === "папір" && computerChoice === "камінь")
//   ) {
//     playerScore++;
//     return "Ви виграли раунд!";
//   } else {
//     computerScore++;
//     return "Комп'ютер виграв раунд!";
//   }
// }

// function playRound(playerChoice) {
//   const computerChoice = getComputerChoice();
//   const result = determineWinner(playerChoice, computerChoice);
//   const message = `
//     Комп'ютер обрав: ${computerChoice}<br>
//     ${result}<br>
//     Рахунок: Ви - ${playerScore}, Комп'ютер - ${computerScore}
//   `;
// }
