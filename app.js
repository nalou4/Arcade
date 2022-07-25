const grid = document.getElementById("grid");
const scoreText = document.querySelector("#scoreText");
const resetButton = document.querySelector("#resetButton");

// const rowContainer = document.getElementById("grid")
// const squareContainer = document.getElementById("rows");
// const coordinates = document.getElementById("square")


let running = false;
let snake = {
    body: [],
    nextDirection: []
}
let gameState = {
    appleArr: [],
    snake: snake
}

let xVelocity = 25;
let yVelocity = 0;
let score = 0;
let appleX;
let appleY;
let apple = [];
var matrix = [];

window.addEventListener('keydown', changeDirection);
resetButton.addEventListener('click', resetGame);
initializeGame();

function initializeGame() {
    running = true;
    scoreText.textContent = `Score: ${score}`;
    createApple();
    nextTick();
}


function createApple() {
    function randomFood(min, max) {
        const randomNum = Math.round((Math.random() * (max - min) + min) / 25)
        return randomNum;
    }
    appleX = randomFood(0, (500 - 25));
    apple.push(appleX);
    appleY = randomFood(0, (500 - 25));
    apple.push(appleY);
    gameState.appleArr.push(apple);
};



function nextTick() {

};

function changeDirection() { };
function resetGame() { };





function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
    console.log(table)
}

createTable([
    ["row 0, cell 1", "row 0, cell 2", "0, 3", "0, 4", "0, 5", "0, 6", "0, 7", "0, 8", "0, 9", "0, 10", "0, 11", "0, 12", "0, 13", "0, 14", "0, 15", "0, 16", "0, 17", "0, 18", "0, 19", "0, 20"], 
    ["row 1, cell 1", "row 1, cell 2", "1, 3", "1, 4", "1, 5", "1, 6", "1, 7", "1, 8", "1, 9", "1, 10", "1, 11", "1, 12", "1, 13", "1, 14", "1, 15", "1, 16", "1, 17", "1, 18", "1, 19", "1, 20"], 
    ["row 2, cell 1", "row 2, cell 2", "2, 3", "2, 4", "2, 5", "2, 6", "2, 7", "2, 8", "2, 9", "2, 10", "2, 11", "2, 12", "2, 13", "2, 14", "2, 15", "2, 16", "2, 17", "2, 18", "2, 19", "2, 20"], 
    ["row 3, cell 1", "row 3, cell 2", "3, 3", "3, 4", "3, 5", "3, 6", "3, 7", "3, 8", "3, 9", "3, 10", "3, 11", "3, 12", "3, 13", "3, 14", "3, 15", "3, 16", "3, 17", "3, 18", "3, 19", "3, 20"], 
    ["row 4, cell 1", "row 4, cell 2", "4, 3", "4, 4", "4, 5", "4, 6", "4, 7", "4, 8", "4, 9", "4, 10", "4, 11", "4, 12", "4, 13", "4, 14", "4, 15", "4, 16", "4, 17", "4, 18", "4, 19", "4, 20"], 
    ["row 5, cell 1", "row 5, cell 2", "5, 3", "5, 4", "5, 5", "5, 6", "5, 7", "5, 8", "5, 9", "5, 10", "5, 11", "5, 12", "5, 13", "5, 14", "5, 15", "5, 16", "5, 17", "5, 18", "5, 19", "5, 20"], 
    ["row 6, cell 1", "row 6, cell 2", "6, 3", "6, 4", "6, 5", "6, 6", "6, 7", "6, 8", "6, 9", "6, 10", "6, 11", "6, 12", "6, 13", "6, 14", "6, 15", "6, 16", "6, 17", "6, 18", "6, 19", "6, 20"], 
    ["row 7, cell 1", "row 7, cell 2", "7, 3", "7, 4", "7, 5", "7, 6", "7, 7", "7, 8", "7, 9", "7, 10", "7, 11", "7, 12", "7, 13", "7, 14", "7, 15", "7, 16", "7, 17", "7, 18", "7, 19", "7, 20"], 
    ["row 8, cell 1", "row 8, cell 2", "8, 3", "8, 4", "8, 5", "8, 6", "8, 7", "8, 8", "8, 9", "8, 10", "8, 11", "8, 12", "8, 13", "8, 14", "8, 15", "8, 16", "8, 17", "8, 18", "8, 19", "8, 20"], 
    ["row 9, cell 1", "row 9, cell 2", "9, 3", "9, 4", "9, 5", "9, 6", "9, 7", "9, 8", "9, 9", "9, 10", "9, 11", "9, 12", "9, 13", "9, 14", "9, 15", "9, 16", "9, 17", "9, 18", "9, 19", "9, 20"], 
    ["row 10, cell 1", "row 10, cell 2", "10, 3", "10, 4", "10, 5", "10, 6", "10, 7", "10, 8", "10, 9", "10, 10", "10, 11", "10, 12", "10, 13", "10, 14", "10, 15", "10, 16", "10, 17", "10, 18", "10, 19", "10, 20"], 
    ["row 11, cell 1", "row 11, cell 2", "11, 3", "11, 4", "11, 5", "11, 6", "11, 7", "11, 8", "11, 9", "11, 10", "11, 11", "11, 12", "11, 13", "11, 14", "11, 15", "11, 16", "11, 17", "11, 18", "11, 19", "11, 20"], 
    ["row 12, cell 1", "row 12, cell 2", "12, 3", "12, 4", "12, 5", "12, 6", "12, 7", "12, 8", "12, 9", "12, 10", "12, 11", "12, 12", "12, 13", "12, 14", "12, 15", "12, 16", "12, 17", "12, 18", "12, 19", "12, 20"], 
    ["row 13, cell 1", "row 13, cell 2", "13, 3", "13, 4", "13, 5", "13, 6", "13, 7", "13, 8", "13, 9", "13, 10", "13, 11", "13, 12", "13, 13", "13, 14", "13, 15", "13, 16", "13, 17", "13, 18", "13, 19", "13, 20"], 
    ["row 14, cell 1", "row 14, cell 2", "14, 3", "14, 4", "14, 5", "14, 6", "14, 7", "14, 8", "14, 9", "14, 10", "14, 11", "14, 12", "14, 13", "14, 14", "14, 15", "14, 16", "14, 17", "14, 18", "14, 19", "14, 20"], 
    ["row 15, cell 1", "row 15, cell 2", "15, 3", "15, 4", "15, 5", "15, 6", "15, 7", "15, 8", "15, 9", "15, 10", "15, 11", "15, 12", "15, 13", "15, 14", "15, 15", "15, 16", "15, 17", "15, 18", "15, 19", "15, 20"], 
    ["row 16, cell 1", "row 16, cell 2", "16, 3", "16, 4", "16, 5", "16, 6", "16, 7", "16, 8", "16, 9", "16, 10", "16, 11", "16, 12", "16, 13", "16, 14", "16, 15", "16, 16", "16, 17", "16, 18", "16, 19", "16, 20"], 
    ["row 17, cell 1", "row 17, cell 2", "17, 3", "17, 4", "17, 5", "17, 6", "17, 7", "17, 8", "17, 9", "17, 10", "17, 11", "17, 12", "17, 13", "17, 14", "17, 15", "17, 16", "17, 17", "17, 18", "17, 19", "17, 20"], 
    ["row 18, cell 1", "row 18, cell 2", "18, 3", "18, 4", "18, 5", "18, 6", "18, 7", "18, 8", "18, 9", "18, 10", "18, 11", "18, 12", "18, 13", "18, 14", "18, 15", "18, 16", "18, 17", "18, 18", "18, 19", "18, 20"], 
    ["row 19, cell 1", "row 19, cell 2", "19, 3", "19, 4", "19, 5", "19, 6", "19, 7", "19, 8", "19, 9", "19, 10", "19, 11", "19, 12", "19, 13", "19, 14", "19, 15", "19, 16", "19, 17", "19, 18", "19, 19", "19, 20"], 
    ["row 20, cell 1", "row 20, cell 2", "20, 3", "20, 4", "20, 5", "20, 6", "20, 7", "20, 8", "20, 9", "20, 10", "20, 11", "20, 12", "20, 13", "20, 14", "20, 15", "20, 16", "20, 17", "20, 18", "20, 19", "20, 20"]
    ]);








// function renderRows (){
//     for (let i = 0; i < 20; i++){
//         const rows = document.createElement("div");
//         rows.setAttribute('id', 'rows');
//         rows.className = "squareContainer"
//         document.getElementById("grid").appendChild(rows)
//     };
// };

// function renderSquares (){
//     for (let i = 0; i < 20; i++){
//         let square = document.createElement("div");
//         square.setAttribute('id','square');
//         square.className = "coordinates";
//         document.getElementById("rows").appendChild(square);
//     }
// } 


// function renderGrid(){
//     for (let i = 0; i < 20; i++){
//         let rows = document.createElement("div")
//         rows.className = "rows";
//         rowContainer.appendChild(rows)
//     }
//     renderSquares()
// }





