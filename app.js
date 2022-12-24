const board = document.querySelector(".board");
const erase = document.querySelector(".btn-dark")
const blue_marker = document.querySelector(".btn-primary")
const black_marker = document.querySelector(".btn-light");

let color = "black"; 
let size = 16;

const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

  
function changeSize(value) {
    size = value;
    updateSizeValue(size)
    reloadGrid()
}
  
function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
    deleteCells()
    makeBoard(size, size)
    drawBoard()
}

function makeBoard(rows, cols) {
    // rows cols initialized to be 1 in styles but changed here in fucntion to be parameters
    board.style.setProperty('--grid-rows', rows);
    board.style.setProperty('--grid-cols', cols);
    for(c = 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
        cell.className = "grid-item";
        board.appendChild(cell);
    };
};

function deleteCells(){
    const cells = document.querySelectorAll(".grid-item");
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
    const cells = document.querySelectorAll(".grid-item");
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseover", () =>{
            cells[i].style.backgroundColor = color;
        });
    }
}

makeBoard(size, size);
erase.addEventListener("click", deleteCells);
blue_marker.addEventListener("click", changeBlue);
black_marker.addEventListener("click", changeBlack);
drawBoard();
