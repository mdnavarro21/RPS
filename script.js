function computerPlay(){
    let x = Math.floor((Math.random() * 3));
    switch(x){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }

}

function playRound(playerSelection, computerSelection){

    let player_win = true;
    if (playerSelection === computerSelection)
    {
        return "Tie game";
    }
    switch(playerSelection){
        case "rock":
            if (computerSelection === "paper")
            {
                player_win = false;
            }
            break;
        case "paper":
           if (computerSelection === "scissors")
           {
               player_win = false;
           }
           break;
        case "scissors":
            if (computerSelection === "rock")
            {
                player_win = false;
            }
            break;
    }

    if (player_win == true) {
        player_score += 1;
        const score = document.querySelector("#player-score");
        score.textContent = "Score: " + player_score;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}\n`;
    }
    else
    {
        computer_score += 1;
        const score = document.querySelector("#computer-score");
        score.textContent = "Score: " + computer_score;
        return `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}\n`;
    }

}


function displayImage(image_tag,choice) {
    if (choice === "rock")
    {
        image_tag.setAttribute("src", "rock.jpg");
    }
    else if (choice === "paper")
    {
        image_tag.setAttribute("src", "Paper_6.png");
    }
    else {
        image_tag.setAttribute("src", "scissors.png");
    }
}


let player_choice, computer_choice, player_score = 0, computer_score = 0;
const buttons = document.querySelectorAll("div.player-choices > button");
const computer_move = document.querySelector(".computer-choice");
const player_image = document.querySelector("#player > img");
const computer_image = document.querySelector("#computer > img");
const results = document.querySelector(".logs");
buttons.forEach(button => {
    button.addEventListener("click", playerMove);
});

function playerMove() {
        player_choice = this.textContent.toLowerCase();
        computer_choice = computerPlay().toLowerCase();
        displayImage(player_image,player_choice);
        displayImage(computer_image, computer_choice);
        computer_move.textContent = "The Computer chose " + computer_choice;
        const div = document.createElement("div");
        div.textContent = playRound(player_choice, computer_choice);
        results.append(div);
        checkGameOver();
}

function checkGameOver() {
    if (player_score == 5 || computer_score == 5)
    {
        const div = document.createElement("div");
        if (player_score == 5)
        {
            div.textContent = "Congrats, you win the game!";
        }
        else {
            div.textContent = "Oh no! The computer won the game!"
        }
        results.append(document.createElement("br"));
        results.append(div);
        buttons.forEach(button => {
            button.removeEventListener("click", playerMove);
        });

        const play_again = document.createElement("button");
        play_again.textContent = "Play Again";
        play_again.addEventListener("click", resetGame);
        results.append(play_again);
    }
}

function resetGame() {
    player_score = 0;
    computer_score = 0;
    const score1 = document.querySelector("#player-score");
    score1.textContent = "Score: " + player_score;

    const score2 = document.querySelector("#computer-score");
    score2.textContent = "Score: " + computer_score;

    while (results.lastElementChild) {
        results.removeChild(results.lastElementChild);
      }
    computer_move.textContent = "";
    buttons.forEach(button => {
        button.addEventListener("click", playerMove);
    });
    player_image.setAttribute("src"," ");
    computer_image.setAttribute("src"," ");
}


