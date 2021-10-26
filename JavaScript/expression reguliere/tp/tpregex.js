let num = document.getElementById('idNum');
const reg = /^\s*0[1-9](\s*|-*|.*\d{2}){4}$/;


let resultat = document.getElementById('result');


function essai(){
    
    
    
    if(reg.test(num.value)){
        resultat.innerHTML = 'valide';
       return true;

    }else{
        resultat.innerHTML = 'non valide';
        return false;
    }
    
} 

num.onblur = essai;


//----------- secusocial--------
let secu = document.getElementById('idSecu');
const regu = /^\s*[1-4]\s*\d{2}\s*(([1][0-2])|([0][1-9]))\s*\d{2}(\s*\d{3}){2}\s*\/\s*\d{2}\s*$/;



let secur = document.getElementById('ss');
oki = document.getElementById('idBouton');


function securite(){

    
    if(regu.test(secu.value)){
        secur.innerHTML = 'valide';
        return true;
    }else{

        secur.innerHTML = 'non valide';
        return false;
    }
 
    
}
secu.onblur = securite;


 

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var  nbr = entierAleatoire(1, 456);


function valider(){
    if(securite() && essai()){
        alert('parfait bienvenue au squidgame');
        alert('votre numero est   ' + nbr);

}else{
    alert('champs invalide')
}
}
oki.onclick = valider;




