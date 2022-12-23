const board = document.querySelector(".board");
const erase = document.querySelector(".btn-dark")
const blue_marker = document.querySelector(".btn-primary")
const black_marker = document.querySelector(".btn-light");
let color = "black"; 
function makeBoard(rows, cols) {
    // rows cols initialized to be 1 in styles but changed here in fucntion to be parameters
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    console.log(board);
    for(c = 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
        cell.className = "grid-item";
        // cell.innerText = c+1;
        // cell.addEventListener("mouseover", () =>{
        //     cell.style.backgroundColor = color;
        //     console.log(cell)
        // });
        board.appendChild(cell);
    };
};

function deleteCells(){
    const cells = document.querySelectorAll(".grid-item");
    console.log(cells);
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "white";
    }
    // cells.forEach(cell => cell.styel.backgroundColor = "white");
};
function changeBlue(){
    color = "blue";
}

function changeBlack(){
    color = "black";
}

function drawBoard(){
    console.log(color)
    const cells = document.querySelectorAll(".grid-item");
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", () =>{
            cells[i].style.backgroundColor = color;
            console.log(cells[i])
        });
    }
}
  
makeBoard(16, 16);
erase.addEventListener("click", deleteCells);
blue_marker.addEventListener("click", changeBlue);
black_marker.addEventListener("click", changeBlack);
drawBoard();
