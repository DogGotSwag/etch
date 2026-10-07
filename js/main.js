
function makeGrid(numberPerSide = 4) {
    let main = document.querySelector(".main");
    if(main.firstChild) {
        main.removeChild(main.firstChild);
    }
    let container = document.createElement("div");
    container.classList.add("container");

    main.appendChild(container);
    for(let i = 0; i < numberPerSide; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j= 0; j < numberPerSide; j++){
        let square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    container.appendChild(row);
    }
    container.addEventListener("mouseover", hoverEffect);
    main.appendChild(container);
}

let button = document.createElement("button");
button.textContent = "Size";
button.addEventListener("click", () => {
    let number = +prompt("number of squares per side");
    makeGrid(number);
});


function hoverEffect(e) {
    let div = e.target;
    if (div.classList[0] == "square") {
        div.classList.add("black");
    }
}

makeGrid(4)

let header = document.querySelector("header");
header.appendChild(button);