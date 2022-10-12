//* STATE - What do we want to keep track of?

var playAgain;
var userChoice = "R, P, S";
var cpuChoice = "R, P, S";
var wins = 0;
var losses = 0;
var ties = 0;
var score = 0;



var OPTIONS = ["R", "P", "S"];
array = [0,1,2 ];



//* ACTIONS - What are the steps?

/*
1. Prompt user to play 
2. User makes choice  (rock, paper, scissors)
3. Store value for cpus response and for future data recall
4. Computer makes choice
5. Computers choice is displayed to user and stored for future data recall
6. Compare user choice to computer choice
7. Display results
   - if user picks "Rock":
     - if cpu picks "Rock": tie
        - if cpu picks "Paper": loss
        - if cpu picks "Scissors": win

    - if user picks "Paper":
        - if cpu picks "Rock": wins
        - if cpu picks "Paper": tie
        - if cpu picks "Scissors": loss

    - if user picks "Scissors":
        - if cpu picks "Rock": loss
        - if cpu picks "Paper": win
        - if cpu picks "Scissors": tie
8. Display score
9. Prompt user to play again
10. If user chooses to play again, repeat steps 2-9


*/



function funtime () {
    var userChoice = window.prompt("Choose R, P, or S!!");

    if (userChoice === "R") {
        window.alert("You chose Rock!");
    } else if (userChoice === "P") {
        window.alert("You chose Paper!");
    } else if (userChoice === "S") {
        window.alert("You chose Scissors!");
    } else {
        window.alert("You didn't choose anything!");
    }

    var cpuChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    if (cpuChoice === "R") {
        window.alert("The computer chose Rock!");
    } else if (cpuChoice === "P") {
        window.alert("The computer chose Paper!");
    } else if (cpuChoice === "S") {
        window.alert("The computer chose Scissors!");
    } else {
        window.alert("The computer didn't choose anything!");
    }

    if (userChoice === "R" && cpuChoice === "R") {
        window.alert("You tied!");
        ties++;
    } else if (userChoice === "R" && cpuChoice === "P") {
        window.alert("You lost!");
        losses++;
    } else if (userChoice === "R" && cpuChoice === "S") {
        window.alert("You won!");
        wins++;
    } else if (userChoice === "P" && cpuChoice === "R") {
        window.alert("You won!");
        wins++;
    } else if (userChoice === "P" && cpuChoice === "P") {
        window.alert("You tied!");
        ties++;
    } else if (userChoice === "P" && cpuChoice === "S") {
        window.alert("You lost!");
        losses++;
    } else if (userChoice === "S" && cpuChoice === "R") {
        window.alert("You lost!");
        losses++;
    } else if (userChoice === "S" && cpuChoice === "P") {
        window.alert("You won!");
        wins++;
    } else if (userChoice === "S" && cpuChoice === "S") {
        window.alert("You tied!");
        ties++;
    } else {
        window.alert("You didn't choose anything!");
    }

    window.alert("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);

    playAgain = window.prompt("Would you like to play again?");



Math.floor(Math.random()* OPTIONS.length);
var playAgain = Math.floor(Math.random()* OPTIONS.length);
