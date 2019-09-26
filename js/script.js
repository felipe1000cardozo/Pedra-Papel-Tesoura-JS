let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("placar-jogador");
const computerScore_span = document.getElementById("placar-computador");
const result_h2 = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const plays = ["pedra","papel","tesoura"];

function convert (choice){
    if (choice == "r") return plays[0];
    if (choice == "p") return plays[1]; 
    if (choice == "s") return plays[2];  
}

function win(pc, cc){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_h2.innerHTML = `${convert(pc)} ganha de ${convert(cc)}! Você venceu!`;
}
function lose(pc, cc){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_h2.innerHTML = `${convert(cc)} ganha de ${convert(pc)}! Você perdeu!`;
}
function draw(pc, cc){
    result_h2.innerHTML = `${convert(pc)} é igual a ${convert(cc)}! Empatou!`;
}
function randChoice(){
    const options = ["r", "p", "s"];
    return options[(Math.floor(Math.random()*3))]
}

function game(playerChoice){
    let computerChoice = randChoice();
    var pc = playerChoice+computerChoice;

    console.log(pc);
    if (playerChoice == computerChoice){
        draw(playerChoice, computerChoice);
    }else if ( pc== "rs" || pc == "pr" || pc == "sp"){
        win(playerChoice, computerChoice);
    }else{
        lose(playerChoice, computerChoice);
    }
}

rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})
scissor_div.addEventListener('click', function(){
    game("s");
})