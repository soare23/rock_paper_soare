const compChoices = ["rock_choice", "paper_choice", "scissors_choice"];
const message = document.querySelector(".message");
const user_score = document.getElementById("user-score");
const comp_score = document.getElementById("computer-score");
let playerChoice;
let comp;
let playerChoiceID;
let user_count = 0;
let comp_count = 0;

// Computer picks a random choice

function compRandomChoice() {
  return compChoices[Math.floor(Math.random() * compChoices.length)];
}

// Player choice

function playerChoiceFunction() {
  const game_options = document.querySelectorAll(".choices");
  for (let i = 0; i < game_options.length; i++) {
    playerChoice = game_options[i];
    playerChoice.addEventListener("click", function (e) {
      playerChoiceID = game_options[i].id;
      comp = compRandomChoice();
      let images = $(".chosen_option");
      images.effect("shake", { direction: "up", times: 4, distance: 10 }, 1000);
      setTimeout(function () {
        document.getElementById("user_image").src =
          "images/" + playerChoiceID + ".png";
      }, 1100);
      setTimeout(function () {
        document.getElementById("comp_image").src = "images/" + comp + ".png";
      }, 1100);
      setTimeout(compareChoices, 1200);
      setTimeout(win, 1300);
    });
  }
}

// Compare choices

function compareChoices() {
  if (playerChoiceID === "rock_choice" && comp === "scissors_choice") {
    message.innerHTML = "You win!";
    user_count += 1;
    user_score.innerHTML = user_count;
  } else if (playerChoiceID === "rock_choice" && comp === "paper_choice") {
    message.innerHTML = "You lose!";
    comp_count += 1;
    comp_score.innerHTML = comp_count;
  } else if (playerChoiceID === "rock_choice" && comp === "rock_choice") {
    message.innerHTML = "Its a draw!";
  }
  if (playerChoiceID === "paper_choice" && comp === "scissors_choice") {
    message.innerHTML = "You lose!";
    comp_count += 1;
    comp_score.innerHTML = comp_count;
  } else if (playerChoiceID === "paper_choice" && comp === "paper_choice") {
    message.innerHTML = "Its a draw!";
  } else if (playerChoiceID === "paper_choice" && comp === "rock_choice") {
    message.innerHTML = "You win!";
    user_count += 1;
    user_score.innerHTML = user_count;
  }
  if (playerChoiceID === "scissors_choice" && comp === "scissors_choice") {
    message.innerHTML = "Its a draw!";
  } else if (playerChoiceID === "scissors_choice" && comp === "paper_choice") {
    message.innerHTML = "You win!";
    user_count += 1;
    user_score.innerHTML = user_count;
  } else if (playerChoiceID === "scissors_choice" && comp === "rock_choice") {
    message.innerHTML = "You lose!";
    comp_count += 1;
    comp_score.innerHTML = comp_count;
  }
}

// Win function

function win() {
  if (user_score.innerHTML === "5") {
    alert("User Wins");
    user_score.innerHTML = 0;
    comp_score.innerHTML = 0;
    document.getElementById("user_image").src = "images/rock_choice.png";
    document.getElementById("comp_image").src = "images/rock_choice.png";
  } else if (comp_score.innerHTML === "5") {
    alert("Computer Wins");
    user_score.innerHTML = 0;
    comp_score.innerHTML = 0;
    document.getElementById("user_image").src = "images/rock_choice.png";
    document.getElementById("comp_image").src = "images/rock_choice.png";
  }
}

// document.addEventListener("keypress", function () {
//   function initGame() {
//     compRandomChoice();
//     playerChoiceFunction();
//     compareChoices();
//     console.log(playerChoice);
//     console.log(comp);
//   }
// });

playerChoiceFunction();
