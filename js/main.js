let container = document.createElement("div");
container.classList.add("container");

function hoverOnSquare (e) {
    e.target.classList.add("black");
}

for(let i = 0; i < 4; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j= 0; j < 4; j++){
        let square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseenter", hoverOnSquare);
        row.appendChild(square);
    }
    container.appendChild(row);
}

document.body.appendChild(container);