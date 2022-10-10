
let fichas = [0,1,2,3,4,5,6,7,8];
let num_click = 0;
let primerClic = 0;

function selecionar(casilla) {
    num_click++
    
    if (num_click ==1) {
        
        primerClic = casilla

    }

    if(num_click==2){

        let segundoClic = casilla
        let intercambio = fichas[primerClic];
        fichas[primerClic] = fichas[segundoClic];
        fichas[segundoClic] = intercambio;

        num_click= 0 
        moverfichas()

    }
    quitarBorde()
    document.getElementById("img_"+casilla).style.border = "4px solid"
}

function desordenar() {
    fichas = fichas.sort(function(){
        return Math.random() - 0.5
    });
}
function quitarBorde() {
    for (let c = 0; c < 9; c++) {
        document.getElementById("img_" +c).style.border= null       
    }
}


function moverfichas(){
    for (let c = 0; c<9; c++ ){
        let imagenFicha = fichas[c];
        document.getElementById("img_" +c).src = "carpetaimg/i" +(imagenFicha+1)+".jpg"
    }
}

function comprobarPuz(){
    let comprobar = true;
    for (let c = 0; c < 9; c++) {
       if (fichas[c]!= c) {
            comprobar = false
       }
    }
    if (comprobar == true) {
        alert ("PUZZLE COMPLETO")
    }else{
        alert ("PUZZLE INCOMPLETO")
    }
}

let btn = document.querySelector('#btnComprobar');

btn.addEventListener('click',(event) => {
    comprobarPuz();
});

window.onload = function(){
    desordenar()

    moverfichas()
}

