let container = document.createElement("div");
container.classList.add("container");

let button = document.createElement("button");
button.textContent = "Size";
button.addEventListener("click", () => {
    let number = +prompt("number of squares per side");
});



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

let header = document.querySelector("header");
header.appendChild(button);

let main = document.querySelector(".main");
main.appendChild(container);