const container = document.querySelector("#container");
const button = document.querySelector("button");
const blackButton = document.querySelector("#black");
const colorButton = document.querySelector("#random");
const darkenButton = document.querySelector("#darken");
let mode = 1;

function createGrid(squares){
    for (let i = 0; i < squares; i++){
        const grid = document.createElement("div");
        grid.id = "grid-element";
        container.appendChild(grid);
        grid.addEventListener("mouseover", ()=>{
            if(mode === 1){
                grid.style.opacity = '90%';
                grid.style.background = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            }
            else if(mode === 2){
                if(window.getComputedStyle(grid).getPropertyValue("opacity") == 0.9){
                    grid.style.opacity = '10%';
                }
                else{
                    let opacity = window.getComputedStyle(grid).getPropertyValue("opacity");
                    opacity *= 100;
                    opacity += 11;
                    grid.style.opacity = `${opacity}%`;
                }
            }
            else {
                grid.style.opacity = '90%';
                grid.style.background = 'black';
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

blackButton.addEventListener("click", ()=>{
    mode = 0;
})
colorButton.addEventListener("click", ()=>{
    mode = 1;
})
darkenButton.addEventListener("click", ()=>{
    mode = 2;
})

createGrid(256);