let boxes = document.querySelectorAll(".box");
let display = document.getElementById("display");
let restart = document.getElementById("restart");

const playerCreator = (symbol, score, name) => {
    return {symbol, score, name};
} 

const controller = (() => {

    let currentRound = 0;
    
    const playerOne = playerCreator('x', 0, "Player One");
    const playerTwo = playerCreator('o', 0, "Player Two");

    const updateDisplay = () => {

        if (currentRound %2 == 0) {
            
            display.innerHTML = `${playerTwo.name} please choose`;
        } else {
            
            display.innerHTML = `${playerOne.name} please choose`
        } 
        currentRound++;

    }

    return {updateDisplay}

})();

const gameBoard = (() => {

    let board = ["a","b","c","d","e","f","g","h","i"];
    let currentRound = 1;

    const updateArr = (position) => {

        if (currentRound %2 == 0){
            board.splice(position, 1, "o")
        } else {
            board.splice(position, 1, "x")
        }
        currentRound++;
    };

    const updateBoard = (num) => {
        boxes.forEach(box => {
            if (box.id == num){
                box.innerHTML = board[num];
            }})}

    const checkWinner = () => {

        if (board[0] == board[1] && board[0] == board[2] && board[1] == board[2]){
            display.innerHTML = `${board[0]} wins!`;
        } else if (board[0] == board[4] && board[0] == board[8] && board[4] == board[8]){
            display.innerHTML = `${board[0]} wins!`;
        } else if (board[0] == board[3] && board[0] == board[6] && board[3] == board[6]){
            display.innerHTML = `${board[0]} wins!`;
        } else if (board[3] == board[4] && board[3] == board[5] && board[4] == board[5]){
            display.innerHTML = `${board[3]} wins!`;
        } else if (board[6] == board[7] && board[6] == board[8] && board[7] == board[8]){
            display.innerHTML = `${board[6]} wins!`;
        } else if (board[1] == board[4] && board[1] == board[7] && board[4] == board[7]){
            display.innerHTML = `${board[1]} wins!`;
        } else if (board[2] == board[4] && board[2] == board[6] && board[4] == board[6]){
            display.innerHTML = `${board[2]} wins!`;
        } else if (board[2] == board[5] && board[2] == board[8] && board[5] == board[8]){
            display.innerHTML = `${board[2]} wins!`;
        } else {
            if (currentRound == 10){
                display.innerHTML = 'Oops, tie game!'
            } else {
                return
            }
        }
    }

    return {
        updateArr,
        updateBoard,
        checkWinner,
    };

})();

boxes.forEach(box => {
    box.addEventListener('click', function(){
        if (box.innerHTML == ""){

        gameBoard.updateArr(this.id); // Updates game board array
        controller.updateDisplay(); // Updates display of current player
        gameBoard.updateBoard(this.id); // updates div IDs
        gameBoard.checkWinner();
        box.id = "nopointer";

        } else {
            return
        }

    })
})

restart.addEventListener('click', function(){
    window.location.reload();
})