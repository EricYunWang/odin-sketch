const container = document.querySelector("#container");

function createGrid(squares){
    for (let i = 0; i < squares; i++){
        const grid = document.createElement("div");
        grid.id = "grid-element";
        container.appendChild(grid);
        grid.addEventListener("mouseover", ()=>{
            grid.style.background = "lightblue";
        })
    }
}

createGrid(2500);