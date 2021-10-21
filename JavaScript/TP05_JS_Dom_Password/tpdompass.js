var img = document.querySelector('img');

function clique(event) {

    if (event.type == 'mousedown') {

        event.target.src = 'images/oeil_ferme.jpg';
        password.type = 'text';

    } else {
        img.src = 'images/oeil_ouvert.jpg';
        password.type = 'password';
    }
}

img.onmousedown = clique;
img.onmouseup = clique;




var oeil = document.querySelector('.image1');

function press() {
    // alert(oeil.src);
    if (confirm1.type == 'password')  {
        oeil.src = 'images/oeil_ferme.jpg';
        confirm1.type = 'text';
    } else {
        oeil.src = 'images/oeil_ouvert.jpg';
        confirm1.type = 'password';

    }
}

oeil.onclick = press;



// var val = document.querySelector(button);

function Valider(){
    if(password.value == confirm1.value && password.value !=='' ) {
        alert('votre mdp est bon');
        


} else{
    if(password.value ==''){
       alert('sasie vide');
    }
    alert('veuillez ressaisir votre mdp');
}
}

boutton.onclick = Valider;





/* correction

function init(){

}
window.onload = init ==> permet de mettre le js en header et laissé la page se charger  et surtout ne pas mettre les parenthese
tout ce qui sera dans la fonction se chargera apres la page html


___________________________________________________
initialisation des variables globales 
    let    ouvert = true;

function init(){
    let image=document.queryselector('img.image');
    image.onmousedown = voir; ==> on lui affect la fonction voir
    image.onmouseup = cacher;

    let image=document.queryselector('img.image1');
    image.onclick = change; ==> on lui affect la fonction change fais en bas
    document.queryselector('button').onclick = verif
                    =queryselector permet de chercher le premiere balise quon ecrit dans la parenthése 
}
window.onload = init

function voir(){
    let image=document.queryselector('img.image');
    image.src = 'images/oeil_ferme.jpg'; 
    
    document.getelementbyid('password').type = 'text'

}
function cacher(evt){ ===> event.target permet directement de cibler levennement sur lequel on clique  
    let image = evt.target;
    image.src = 'images/oeil_ouvert.jpg';
    
        
    document.getelementbyid('password').type = 'password'
}


function change(evt) {

    let image = evt.target;
    let input = document.getelementbyid('confirm1');

    if (ouvert) { (etant donné que ouvert = true donc pas besion de rajouter le true)
    image.src = 'images/oeil_ferme.jpg';  
    input.type = 'text'
} else {
    image.src = 'images/oeil_ouvert.jpg';
    input.type = 'password'
    
}
    
 ouvert = !ouvert

}

function verif() {

    let psw = document.getelementbyid('password').value;
    let conf = document.getelementbyid('confirm1').value;

    
    if (psw === conf) {
    
        alert('les mdp saisie sont identique)
} else {

         alert('les mdp saisie ne sont pas identique)
}

    
}*/
