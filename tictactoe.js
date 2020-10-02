var turnCounter = 1
var turnMessage = document.querySelector('.turnMessage');
var tiles = document.querySelectorAll('.tiles div');
var board = ['', '', '', '', '', '', '', '', ''];
var resultMessage = document.querySelector('.resultMessage');
var soundBear = document.querySelector('.bottom-left-bear');
var audioElement = new Audio('05-the-yaschas-massif.mp3');
var pauseBtn = document.querySelector('.pause');
var resetBtn = document.querySelector('.reset')
var sgModeBtn = document.querySelector('.sgmode')
var rkModeBtn = document.querySelector('.rkmode')
var rkLogo = document.querySelector('.rk-logo');
var sgLogo = document.querySelector('.sg-logo');
var rkTitle = document.querySelector('.rk-title-font');
var sgTitle = document.querySelector('.sg-title-font');
var resultImage = document.querySelector('.resultImage');

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
        resultImage.classList = "resultImage draw";
        turnMessage.textContent = "";
    }
}


//winning function
function winOrDraw() {
    if ((board[0] === board[1] && board[1] === board[2] && board[0].length !== 0) ||
    (board[0] === board[3] && board[3] === board[6] && board[0].length !== 0) ||
    (board[0] === board[4] && board[4] === board[8] && board[0].length !== 0)) {
        resultMessage.textContent = `${board[0]} wins!`;
        resultImage.classList.remove("hidden");
        //celebratorybearchoice
        if (board[0] === "Player 1") {
            resultImage.classList.add("win1");
        
        } else {
            resultImage.classList.add("win2");
        }
        turnMessage.textContent = "";
    } else if ((board[3] === board[4] && board[4] === board[5] && board[4].length !== 0) ||
    (board[1] === board[4] && board[4] === board[7] && board[4].length !== 0) ||
    (board[2] === board[4] && board[4] === board[6] && board[4].length !== 0)) {
        resultMessage.textContent = `${board[4]} wins!`;
        resultImage.classList.remove("hidden");
        if (board[4] === "Player 1") {
            resultImage.classList.add("win1");
        } else {
            resultImage.classList.add("win2");
        }
        turnMessage.textContent = "";
    } else if ((board[6] === board[7] && board[7] === board[8] && board[8].length !== 0) ||
    (board[2] === board[5] && board[5] === board[8] && board[8].length !== 0)) {
        resultMessage.textContent = `${board[8]} wins!`
        resultImage.classList.remove("hidden");
        if (board[8] === "Player 1") {
            resultImage.classList.add("win1");
        } else {
            resultImage.classList.add("win2");
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
    resultImage.classList = "resultImage hidden";
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

function changeToSg () {
    document.body.className = 'sgtheme';
    rkLogo.classList = 'rk-logo hidden';
    sgLogo.classList = 'sg-logo';
    rkTitle.classList = 'rk-title-font hidden';
    sgTitle.classList = 'sg-title-font';
    sgModeBtn.classList = 'sgmode hidden';
    rkModeBtn.classList = 'rkmode';
    resultImage.classList = 'resultImage hidden';
}

function restoreToRk() {
    document.body.className = 'rktheme';
    rkLogo.classList = 'rk-logo';
    sgLogo.classList = 'sg-logo hidden';
    rkTitle.classList = 'rk-title-font';
    sgTitle.classList = 'sg-title-font hidden';
    sgModeBtn.classList = 'sgmode';
    rkModeBtn.classList = 'rkmode hidden';
    resultImage.classList = 'resultImage rk hidden';
}

//event listeners
//all tiles
for (i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', handleClick);
}
resetBtn.addEventListener('click', reset);
soundBear.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
sgModeBtn.addEventListener('click', changeToSg);
rkModeBtn.addEventListener('click', restoreToRk);
