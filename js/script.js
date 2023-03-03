'use strict';
// funziona che crea la cella 
function creaCasella(tagElement, className, number) {
    const element = document.createElement(tagElement);
    element.classList.add(className);
    element.innerText = number;
    element.addEventListener(
        'click',
        function () {
            console.log(number);
            element.classList.add('cambio-colore');
        }
    )
    return element;
}

// funzione che crea il tabellone di gioco 
function Tabellone() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    let selDifficolta = livDifficolta.value
    console.log(selDifficolta);
    // condizione che comprende la creazione del tabellone di gioco in base alla difficolta 
    if (selDifficolta === 'difficile') {
        cellNumber = 49;
        for (let i = 1; i <= cellNumber; i++) {
            const creaTabellone = creaCasella('div', 'casella7', i);
            container.append(creaTabellone);
        }
    } else if (selDifficolta === 'normale') {
        cellNumber = 81;
        for (let i = 1; i <= cellNumber; i++) {
            const creaTabellone = creaCasella('div', 'casella9', i);
            container.append(creaTabellone);
        }
    } else {
        cellNumber = 100;
        for (let i = 1; i <= cellNumber; i++) {
            const creaTabellone = creaCasella('div', 'casella', i);
            container.append(creaTabellone);
        }
    }
    container.classList.add('show')
}
// generatore di bombe 
function generatoreBombe(cellNumber) {
    let listaBombe = [];
    while (listaBombe.length < 16) {
        let bomb = Math.floor(Math.random() * 16) + 1;
        if (!listaBombe.includes(bomb)) {
            listaBombe.push(bomb);
        }
    }console.log(listaBombe)
}
generatoreBombe()

let cellNumber = 0;
const livDifficolta = document.getElementById('difficoltà');


const btnPlay = document.getElementById('btn-play');

btnPlay.addEventListener('click', Tabellone);