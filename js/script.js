'use strict'
// prendo elemento bottone dall'DOM 
const btnPlay = document.getElementById('btn-play');
// evento bottone che crea caselle con le bombe ed evento click casella 
btnPlay.addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.innerHTML = ''
    // se la difficolta è difficile 
    if(livDifficolta.value == 'difficile'){
        generatoreBombe(49);
        for (let i = 1; i <= 49; i++){
            // aggiungo elementi ('')
            let element = document.createElement('div');
            element.classList.add('casella');
            element.classList.add('casella7')
            element.innerHTML = i;
            container.append(element);
            element.addEventListener('click', function(){
                for(let j = 0; j < bombeList.length; j++){
                    if(i == bombeList[j]){
                        element.classList.add('bomba');
                    }else{
                        element.classList.add('cambio-colore');
                    } 
                }
            })
        }
        // se la difficolta è normale 
    }else if(livDifficolta.value == 'normale'){
        generatoreBombe(81)
        for (let i = 1; i <= 81; i++){
            // aggiungo elementi ('')
            let element = document.createElement('div');
            element.classList.add('casella');
            element.classList.add('casella9');
            element.innerHTML = i;
            container.append(element);
            element.addEventListener('click', function(){
                for(let j = 0; j < bombeList.length; j++){
                    if(i == bombeList[j]){
                        element.classList.add('bomba');
                    }else{
                        element.classList.add('cambio-colore');
                    } 
                }
            })
        }
        // se la difficolta è facile
    }else{
        generatoreBombe(100)
        for (let i = 1; i <= 100; i++){
            // aggiungo elementi ('')
            let element = document.createElement('div');
            element.classList.add('casella');
            element.classList.add('casella10');
            element.innerHTML = i;
            container.append(element);
            element.addEventListener('click', function(){
                for(let j = 0; j < bombeList.length; j++){
                    if(i == bombeList[j]){
                        element.classList.add('bomba');
                    }else{
                        element.classList.add('cambio-colore');
                    } 
                }
            })
        }
    }
    container.classList.add('show')
})
// generatore bombe 
function generatoreBombe(max){
    bombeList = [];
    while(bombeList.length < 16){
    let randomNumber = Math.floor(Math.random() * max);
    if(!bombeList.includes(randomNumber)){
        bombeList.push(randomNumber);
    }
    }
}
const livDifficolta = document.getElementById('difficoltà');
let bombeList; 
