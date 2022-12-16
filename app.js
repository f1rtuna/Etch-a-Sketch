const container = document.querySelector(".container");

function makeRows(rows, cols) {
    // rows cols initialized to be 1 in styles but changed here in fucntion to be parameters
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    console.log(container);
    for(c = 0; c < (rows*cols); c++){
        let cell = document.createElement("div");
        cell.innerText = c+1;
        cell.className = "grid_item";
        container.appendChild(cell);
    };
};
  
makeRows(16, 16);