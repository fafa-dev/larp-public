
// déclaration des variables 


var nbrEssai = 0;  //max 7

var nbr = 0;
var prop = document.getElementById('propose');
var sol = document.getElementById('solu');
var essai = document.getElementById('essai');
var propo = document.getElementById('propo');
var nouveau = document.getElementById('nouveau');

sol.onclick = showAlert;
prop.onclick= proposition;
nouveau.onclick=debut;
debut();
//

//function init(){
	
//}

//window.onload = init;
// fonction  -------------------detablissement du chiffre aleatoire------------

function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var  nbr = entierAleatoire(1, 100);
//alert(nbr)
function showAlert(){
	alert('le chiffre à trouvé était  ' + nbr);
  prop.disabled = true;
  sol.disabled =true;
  nouveau.disabled = false;

}
  
// fonction ------------- debut -------
function debut(){
  nbrEssai = 0;
  document.getElementById('msg').value ='';
  nbr = entierAleatoire(1, 100);
  
  essai.value ='0';
  reponse.value ='';
  propo.value ='';
  nouveau.disabled = true;
  sol.disabled = false;
  prop.disabled = false;
  
  
}

// fonction proposition ---------------------

function proposition(){
  
  var reponse = document.getElementById('reponse');
	var mess = document.getElementById('msg');
 
  valeur = propo.value;
  
        
		if (valeur >nbr) {
			essai.value = parseInt(essai.value) + 1;
      //alert(essai.value);
      mess.value = 'trop grand';
			reponse.value += valeur+ ' ';
    } else if (valeur < nbr) {
      mess.value ='trop petit';
      essai.value = parseInt(essai.value) + 1;
			reponse.value += valeur + ' ';
    } else {
      mess.value ='parfait';
      sol.disabled = true;
      prop.disabled = true;
      nouveau.disabled = false;
    }


 
                        
    if (essai.value == 7) {
     showAlert();
	}
}


// --------------------- mettre un chorno-----

const temps = 30000; // 30 seconde
let chrono ;



