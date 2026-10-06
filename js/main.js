let container = document.createElement("div");
container.classList.add("container");

function hoverEffect(e) {
    let div = e.target;
    if (div.classList[0] == "square") {
        div.classList.add("black");
    }
}

for(let i = 0; i < 4; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j= 0; j < 4; j++){
        let square = document.createElement("div");
        square.classList.add("square");

        row.appendChild(square);
    }
    container.appendChild(row);
}

container.addEventListener("mouseover", hoverEffect);


document.body.appendChild(container);