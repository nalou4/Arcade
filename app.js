const grid = document.getElementById("grid");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");

const rowContainer = document.getElementById("grid")
const squareContainer = document.getElementById("rows");
const coordinates = document.getElementById("square")


let running = false;
let snake = {
    body: [],
    nextDirection: []
}
let gameState = {
    snake: snake
}
let xVelocity = 25;
let yVelocity = 0;
let score = 0;
let appleX;
let appleY;
let apple = [];

window.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame);
initializeGame();

function initializeGame(){
    running = true;
    scoreText.textContent = `Score: ${score}`;
    createApple();
    nextTick();
}

function renderRows (){
    for (let i = 0; i < 20; i++){
        const rows = document.createElement("div");
        rows.setAttribute('id', 'rows');
        rows.className = "squareContainer"
        document.getElementById("grid").appendChild(rows)
    };
};

function renderSquares (){
    for (let i = 0; i < 20; i++){
        let square = document.createElement("div");
        square.setAttribute('id','square');
        square.className = "coordinates";
        document.getElementById("rows").appendChild(square);
    }
} 

function createApple(){
    function randomFood (min, max){
        const randomNum = Math.round((Math.random() * (max - min) + min) / 25)
        return randomNum;
    }
    appleX = randomFood(0, (500 - 25));
    apple.push(appleX);
    appleY = randomFood(0, (500 - 25));
    apple.push(appleY);
    gameState.apple = ""
};
console.log(apple)



function nextTick(){

};

function changeDirection(){};
function resetGame(){};








// function renderGrid(){
//     for (let i = 0; i < 20; i++){
//         let rows = document.createElement("div")
//         rows.className = "rows";
//         rowContainer.appendChild(rows)
//     }
//     renderSquares()
// }





