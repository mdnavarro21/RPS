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
    player_lower = playerSelection.toLowerCase();
    computer_lower = computerSelection.toLowerCase();
    let player_win = true;
    let result;
    if (player_lower === computer_lower)
    {
        return "Tie game";
    }
    switch(player_lower){
        case "rock":
            if (computer_lower === "paper")
            {
                player_win = false;
            }
            break;
        case "paper":
           if (computer_lower === "scissors")
           {
               player_win = false;
           }
           break;
        case "scissors":
            if (computer_lower === "rock")
            {
                player_win = false;
            }
            break;
    }

    if (player_win == true) {
        return `You win! ${player_lower.charAt(0).toUpperCase() + player_lower.slice(1)} beats ${computer_lower.charAt(0).toUpperCase() + computer_lower.slice(1)}\n`;
    }
    else
    {
        return `You lose! ${computer_lower.charAt(0).toUpperCase() + computer_lower.slice(1)} beats ${player_lower.charAt(0).toUpperCase() + player_lower.slice(1)}\n`;
    }

}

function game() {
    let player_choice, computer_choice;
    for (let i = 0; i < 5; i++)
    {
        while(true){
            player_choice = prompt("Type rock,paper or scissors: ");
            x = player_choice.toLowerCase();
            if(x === "rock" || x ==="paper"|| x ==="scissors"){
                break;
            }
            else
            {
                console.log("Invalid Input, please try again.");
            }
        }
        
        console.log(`Your Choice: ${player_choice}`);
        computer_choice = computerPlay();
        console.log(`Computer's Choice: ${computer_choice}`);
        console.log(playRound(player_choice, computer_choice));
    }
}

game();
