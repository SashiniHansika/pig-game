/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, acttivePlayer, dice, isGamePlaying, preScore , currentScore , scoreStore , winScore ,diceOne, diceTwo;
diceOne = document.getElementById('dice-1');
diceTwo = document.getElementById('dice-2');

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if (isGamePlaying)
    {
    dice1 = Math.floor(Math.random()*6)+1;
    dice2 = Math.floor(Math.random()*6)+1;

    // console.log(dice);
    // scoreStore.push(dice);
    // console.log(scoreStore);

    // if(scoreStore.length === 1){
    //     preScore = scoreStore[0];
    //     currentScore = scoreStore [0];
    //     console.log("pre1" , preScore);
    //     console.log("cur1" , currentScore);
    // }else{
    //     currentScore = scoreStore[scoreStore.length-1];
    //     preScore = scoreStore[scoreStore.length-2];
        
        
    // }
    // console.log("pre" , preScore);
    // console.log("cur" , currentScore);

    
    diceOne.style.display = 'block';
    diceTwo.style.display = 'block';

    diceOne.src = "dice-"+dice1+".png";
    diceTwo.src = "dice-"+dice2+".png";
    // document.querySelector("#current-"+acttivePlayer).textContent = dice;
    if(dice1 !== 1  || dice2 !== 1){
        roundScore += dice1 + dice2;
        
        document.getElementById("current-"+acttivePlayer).textContent = roundScore;
    }else{
        setNextPlayer();
    }
}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if (isGamePlaying){
    scores[acttivePlayer] += roundScore;
    document.getElementById("score-"+acttivePlayer).textContent = scores[acttivePlayer];
    }
    if (scores[acttivePlayer] >= winScore){
        //winner
        diceOne.style.display = 'none';
        diceTwo.style.display = 'none';
      
        document.querySelector("#name-"+acttivePlayer).textContent = "Winner!";
        document.querySelector(".player-"+acttivePlayer+"-panel").classList.add('winner');
        document.querySelector(".player-"+acttivePlayer+"-panel").classList.remove('active');
        isGamePlaying = false
    }else{
        setNextPlayer();
    }
})


function setNextPlayer(){
    document.getElementById("current-"+acttivePlayer).textContent = 0;
        scoreStore = []
        acttivePlayer === 0? acttivePlayer =1 :acttivePlayer=0;
        roundScore = 0;
        diceOne.style.display = 'none';
        diceTwo.style.display = 'none';
        document.querySelector(".player-0-panel").classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle('active');
}

document.querySelector(".btn-new").addEventListener('click',init);

function init(){

winScore = prompt("Enter Win Score")
isGamePlaying = true
scores = [0,0];
roundScore = 0;
acttivePlayer = 0;
preScore = 0;
currentScore = 0;
scoreStore = []
diceOne.style.display = 'none';
diceTwo.style.display = 'none';
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

document.querySelector(".player-0-panel").classList.remove('winner');
document.querySelector(".player-1-panel").classList.remove('winner');
document.querySelector("#name-0").textContent = "PLAYER 1";
document.querySelector("#name-1").textContent = "PLAYER 2";
document.querySelector(".player-0-panel").classList.add('active');



}
