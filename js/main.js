// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const CELLS_NUMBER = 100;
const gridContainer = document.querySelector(".ms_grid-container")

for(let i = 1; i<= CELLS_NUMBER; i++){
    const gridElement = document.createElement("div");
    gridElement.classList.add("ms_grid-element");
    gridContainer.append(gridElement);
}