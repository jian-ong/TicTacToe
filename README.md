# Rilakkuma TicTacToe
<b>GA SEi Project 1 </b>

<b>The Project:</b><br/>
This project was done for educational purposes, due 3 weeks after my 1st coding class in GA. The brief was to create the classic game of Tic Tac Toe using knowledge learnt in class(and the help of the internet).


<b>Technologies used: </b> </br>
HTML, CSS, Javascript


<b>Design concept:</b> </br>
Due to my love for all things Japanese and cute, I created a Rilakkuma-themed tictactoe game for this project. The focus of the design was to showcase the cuteness of the cartoon characters, hence I decided to keep the overall background design simplistic. This enables multiple bear heads and images populating the page to not feel too cluttered.

Rilakkuma literally means "Relax Bear" and the relaxed vibe of the character is delightful, which was why I complemented the gameplay with the background music of an instrumental piece called "Yaschas Massif" from Final Fantasy 13, which has a somewhat chilled lounge-music type feel. 


<b>Game mechanics coding approach: </b> </br>
Pseudocode: 
1. Create a counter to keep track of whose turn it is for the game
2. Create an array with 8 empty elements 
3. HTML > div classes for the board is assigned numbers 0-8
4. Call out divs using DOM
5. Create event listeners for divs using for loop
6. Create function for clicks 
    1) if else to determine whose turn (if not divisible by 2, P1's turn, else P2)
    2) using the divclass position of the click, add classname p1 or p2 to the corresponding index in the empty board array
    3) assign pOne or pTwo class to the clicked divs
    4) change turn message to the opponent
    5) check win/draw condition
    6) turn counter +1
 7. win/draw condition
    1) if board array has equal value for elements in the below winning combitions and is not "", it's a win. </br>
      columns:[0,3,6] [1,4,7] [2,5,8] </br>
      rows:[0,1,2] [3,4,5] [6,7,8] </br>
      diagonals: [1,4,8] [2,4,6] </br>
    2) else if divclass filled length = divclass length, it's a draw. 


<b>Unsolved problems:</b> </br>
- Still working on trying to create an endgame function, which absence leads to...... 
- P2 being too generous. Whenever P2 wins, P1 is also allowed to win if its win conditions are met even after the game is over. Both celebratory images will be visible side by side. 
- One of the celebratory gif only moves the 1st time it is loaded. It presents as a static image the next time it's called upon after the reset button is clicked. 

<b>Other things to add:</b> </br>
- Scoreboard
- Toggle button for a different theme

