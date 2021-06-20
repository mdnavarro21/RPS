let player_count, computer_count;
const container = document.querySelector('#container');
const start = document.querySelector('#start');
start.addEventListener('click', () => {
    container.removeChild(start);
    game();
});

function game() {
    player_count = 0, computer_count = 0;
    let options = ['Rock','Paper','Scissors'];
    for (let i = 0; i < 3; i++)
    {
        let div = document.createElement('button');
        div.textContent = options[i];
        div.setAttribute('id', options[i]);
        container.appendChild(div);
    }
    
    const buttons = document.querySelectorAll('button');
   
    let score = document.createElement('div');
    container.appendChild(score);
    score.textContent = `Your score: ${player_count} Computer Score: ${computer_count}`;

    let computer = document.createElement('div');
    container.appendChild(computer);
    
    let round_result = document.createElement('div');
    container.appendChild(round_result);
    buttons.forEach(button =>
        {
            button.addEventListener('click', handler);
        });

    function handler() {
        let computerSelection = computerPlay();
        computer.textContent = `The computer chose ${computerSelection}`;
        round_result.textContent = playRound(this.id, computerSelection);
        score.textContent = `Your score: ${player_count} Computer Score: ${computer_count}`;
        if (player_count == 5 || computer_count == 5)
        {   
            buttons.forEach(button =>{button.removeEventListener('click',handler);})
            let final_result = document.createElement('div');
            container.appendChild(final_result);
            if (player_count == 5)
            {
                final_result.textContent = "You have 5 points. You win! :D";
            }
            else 
            {
                final_result.textContent = "The computer has 5 points. You lost :(";
            }
        playAgain(container);
        }
    }

    
}

function playAgain(parentNode,result)
{
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    parentNode.appendChild(playAgain);
    playAgain.addEventListener('click', () => {
        while (parentNode.hasChildNodes()) {  
            parentNode.removeChild(parentNode.firstChild);
        }
        game();
    });
}

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
    if (playerSelection === computerSelection)
    {
        return "Tie game";
    }
    let player_win = true;
    let result;

    switch(playerSelection){
        case "Rock":
            if (computerSelection === "Paper")
            {
                player_win = false;
            }
            break;
        case "Paper":
           if (computerSelection === "Scissors")
           {
               player_win = false;
           }
           break;
        case "Scissors":
            if (computerSelection === "Rock")
            {
                player_win = false;
            }
            break;
    }
    if (player_win == true) {
        player_count += 1;
        result = `You won this round! ${playerSelection} beats ${computerSelection}\n`;
    }
    else
    {
        computer_count += 1;
        result = `You lost this round! ${computerSelection} beats ${playerSelection}\n`;
    } 
    return result;
}
