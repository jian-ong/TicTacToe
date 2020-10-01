var turnCounter = 1
var turnMessage = document.querySelector('.turnMessage');
var tiles = document.querySelectorAll('.tiles div');
var board = ['', '', '', '', '', '', '', '', ''];
var resultMessage = document.querySelector('.resultMessage');
var winBear1 = document.querySelector('.celebratory-bear1');
var winBear2 = document.querySelector('.celebratory-bear2');
var drawBears = document.querySelector('.drawbears')
var soundBear = document.querySelector('.bottom-left-bear');
var audioElement = new Audio('05-the-yaschas-massif.mp3');
var pauseBtn = document.querySelector('.pause');
var resetBtn = document.querySelector('.reset')




//when clicked, 
// 1) if else to determine whose turn
// 2) turn the class of div clicked into a position in the blank board array
// 3) assign pOne or pTwo class
// 4) change turn message to the opponent
// 5) check win/draw condition
// 6) turn counter +1

function handleClick(event) {
    if (turnCounter % 2 !== 0) {
        board[Number(event.target.className)] = 'Player 1'
        event.target.classList.add('pOne');
        turnMessage.textContent = "Player 2's turn"
    } else {
        board[Number(event.target.className)] = 'Player 2'
        event.target.classList.add('pTwo');
        turnMessage.textContent = "Player 1's turn"
    }

    winOrDraw();

    turnCounter++
}


//draw function
function draw() {
    if (document.querySelectorAll('.pOne').length + document.querySelectorAll('.pTwo').length == tiles.length) {
        resultMessage.textContent = `It's a draw!`;
        drawBears.classList = "drawbears";
        turnMessage.textContent = "";
    }
}


//winning function
function winOrDraw() {
    if ((board[0] === board[1] && board[1] === board[2] && board[0].length !== 0) ||
    (board[0] === board[3] && board[3] === board[6] && board[0].length !== 0) ||
    (board[0] === board[4] && board[4] === board[8] && board[0].length !== 0)) {
        resultMessage.textContent = `${board[0]} wins!`;
        //celebratorybearchoice
        if (board[0] === "Player 1") {
            winBear1.classList = "celebratory-bear1";
        } else {
            winBear2.classList = "celebratory-bear2";
        }
        turnMessage.textContent = "";
    } else if ((board[3] === board[4] && board[4] === board[5] && board[4].length !== 0) ||
    (board[1] === board[4] && board[4] === board[7] && board[4].length !== 0) ||
    (board[2] === board[4] && board[4] === board[6] && board[4].length !== 0)) {
        resultMessage.textContent = `${board[4]} wins!`;
        if (board[4] === "Player 1") {
            winBear1.classList = "celebratory-bear1";
        } else {
            winBear2.classList = "celebratory-bear2";
        }
        turnMessage.textContent = "";
    } else if ((board[6] === board[7] && board[7] === board[8] && board[8].length !== 0) ||
    (board[2] === board[5] && board[5] === board[8] && board[8].length !== 0)) {
        resultMessage.textContent = `${board[8]} wins!`
        if (board[8] === "Player 1") {
            winBear1.classList = "celebratory-bear1";
        } else {
            winBear2.classList = "celebratory-bear2";
        }
        turnMessage.textContent = "";
    } else {
        draw();
    }
    
}

//reset function
function reset() {
    console.log('hello')
    for (i = 0; i < tiles.length; i++) {
        tiles[i].className = `${i}`   
    }
    board = ['', '', '', '', '', '', '', '', ''];
    turnMessage.textContent = "Player 1's turn";
    resultMessage.textContent = "";
    winBear2.classList = "hidden";
    winBear1.classList = "hidden";
    drawBears.classList = "hidden";
    turnCounter = 1;
}

//play music
function playAudio(){
    audioElement.play();
    audioElement.volume = 0.2;
}
//pause music
function pauseAudio(){
    audioElement.pause();
}

//event listeners
//all tiles
for (i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', handleClick);
}
resetBtn.addEventListener('click', reset);
soundBear.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);

