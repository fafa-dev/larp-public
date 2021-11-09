const affichage = document.querySelector(".number");

window.onload = calcul;


function calcul() {
    let a = prompt("choisir un chiffre");
    let b =0;
    
    for (i= 0; i<=a; i++){
            b = b+i;

            affichage.innerHTML = b + '+' + i + '=' + b;
        }
    }
