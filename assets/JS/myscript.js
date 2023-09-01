/*  Consegna:

    -   L'utente clicca su un bottone 
    
    -   Grazie al click sul bottone viene generata una griglia di gioco quadrata
        
    -   Ogni cella ha un numero progressivo, da 1 a 100 (ci saranno quindi 10 caselle per ognuna delle 10 righe, in sintesi 10 righe x 10 colonne)

    -   Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata
*/

// Scrivo i dati
let gridElement = document.getElementById("grid");
let row = 10;
let column = 10;

// AGGANCIO il bottone in modo da poter salvare l'informazione, cioè il "click dell'utente" quando si manifesterà e lo metto in ascolto affinché esso possa reagire ad un determinato evento (in questo caso l'evento è il "click del mouse") e subito dopo creo una funzione CON un nome inventato, il cui unico è quello di fungere da contenitore vuoto per contenere al suo interno qualsiasi blocco di codice JS

// N.B. Scelgo di usare una funzione CON un nome inventato anziché usare una funzione anomima perché così facendo attraverso l'INVOCAZIONE del NOME del nome inventato della funzione posso RIUTILIZZARE lo stesso blocco di codice JS di quella funzione in qualsiasi altro punto del nostro progetto SENZA dover riscrivere istruzioni simili o identiche
document.getElementById("my_button").addEventListener ("click", function () {
    gridElement.innerHTML = '';
    generateGrid(gridElement, row, column);
});

/**
* Indica l'elemento del DOM dove creo la griglia
    @param {object} elementDOM 
 
* Indica la RIGA della griglia
    @param {number} row 

* Indica la COLONNA della griglia   
     @param {number} column
*/

// Creo una funzione e al suo interno impartisco una serie di comandi per creare una griglia, inoltre se si clicca un quadrato esso diventa di colore blu chiaro
function generateGrid(elementDOM, row, column) {

    for (let i = 0; i < row; i++) {
        for (let k = 0; k < column; k++) {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.append((i+1) * (k+1));

            cellElement.addEventListener("click", function () {
                this.classList.toggle("bg_lightskyblue");
                console.log("Hai cliccato la cella numero:" + " " + ((i+1) * (k+1)) );
            })

            elementDOM.append(cellElement);
        }
    }
}


