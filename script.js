const container = document.querySelector("#container");
const button = document.querySelector("button");
const lightBlueButton = document.querySelector("#lightblue");
const colorButton = document.querySelector("#random");
let mode = 1;

function createGrid(squares){
    for (let i = 0; i < squares; i++){
        const grid = document.createElement("div");
        grid.id = "grid-element";
        container.appendChild(grid);
        grid.addEventListener("mouseover", ()=>{
            if(mode === 1){
                grid.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            }
            else if(mode === 2){

            }
            else {
                grid.style.background = 'lightblue';
            }
        })
        let basis = 1/(Math.sqrt(squares))*100;
        grid.style.flexBasis = `${basis}%`;

    }
}

button.addEventListener("click", ()=>{
    const input = prompt("Enter the number of squares per side (Max 100)");
    if (input <= 100 && input > 0){
        container.replaceChildren();
        let inputSq = input * input;
        createGrid(inputSq);
    }
    else{
        alert("Please enter a valid number 1-100");
    }
})

lightBlueButton.addEventListener("click", ()=>{
    mode = 0;
})
colorButton.addEventListener("click", ()=>{
    mode = 1;
})

createGrid(256);