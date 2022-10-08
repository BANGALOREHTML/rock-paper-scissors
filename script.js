//* STATE - What do we want to keep track of?
/***************************************************/
var playAgain;
var userChoice = "";
var cpuChoice = "";
var wins = 0;
var losses = 0;
var ties = 0;

var OPTIONS = ["Rock", "Paper", "Scissors"];

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
