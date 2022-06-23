const CELLS_NUMBER = 100;
const gridContainer = document.querySelector(".ms_grid-container");
const playButton = document.getElementById("play-button");


playButton.addEventListener("click", function(){
    gridContainer.innerHTML = createGrid();
    for (let i = 0; i < gridContainer.children.length; i++){
        onClickToggleColor(gridContainer.children[i]);
        onClicklogInnerHtml(gridContainer.children[i]);
    }
})


// Create a grid (according to the CELLS_NUMBER) with ordered numbers from 1 to CELLS_NUMBER
function createGrid(){

    const temporaryDiv = document.createElement("div");

    for(let i = 1; i<= CELLS_NUMBER; i++){
        const gridElement = document.createElement("div");
        gridElement.classList.add("ms_grid-element", "viewport-text");
        gridElement.innerHTML = i;
        temporaryDiv.append(gridElement);
    }

    return temporaryDiv.innerHTML;
}


// On click, toggle change of cell color
function onClickToggleColor (htmlElement){
    htmlElement.addEventListener("click", function(){
        htmlElement.classList.toggle("ms_active-element");
    });
}

// On click, if the cell is turned active, log the value in the console
function onClicklogInnerHtml (htmlElement){
    htmlElement.addEventListener("click", function(){
        if(htmlElement.classList.contains("ms_active-element")){
            console.log(htmlElement.innerHTML);
        }
    })
}