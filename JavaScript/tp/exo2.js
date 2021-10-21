function press (baliseImg) {
    // idImage.src = 'shadow-proof.jpg'; 
    idDivPreuve.style.display = 'block';
    baliseImg.src = 'shadow-proof.jpg'; 

}

function depress(baliseImg){
    // idImage.src = 'shadow-illusion.jpg';

    baliseImg.src = 'shadow-illusion.jpg';

    idDivPreuve.style.display = 'none';
}

/*  CORRECTION

function press(){


    let image = document.getelementbyid('idImage');
    image.src= 'shadow-proof.jpg';
    let divPreuve = document.getelementbyid('idDivPreuv');
    idDivPreuv.style.display = 'block';
}

function depress(){

    
    let image = document.getelementbyid('idImage')
    image.src= 'shadow-illusion.jpg'
    let divPreuve = document.getelementbyid('idDivPreuv')
    idDivPreuv.style.display = 'none'

    // le"this" represente la balise dans laquelle se passe l'evenement en mettant "this" nous avons mis (baliseIMG dans la fonction) et cela nous permet de ne plus utiliser l'ID de limage 
}*/

// faire en 1 seule fonction 
// let isPress = false;
/* function toggle(baliseImg){
    if (isPress){
        baliseImg.src = 'shadow-illusion.jpg';

    idDivPreuve.style.display = 'none';
    isPress= false

    }else{
            baliseImg.src = 'shadow-illusion.jpg';

    idDivPreuve.style.display = 'none';
    isPress = true;

    }

    on peut mettre iPress = !ispress et enlever les isPress = true et false dans le if et else
} dans le html on remplacera press par toggle





    si on veut supprimer les onmousse sur la page html il suffit de faire 

    function toggle () {
    // idImage.src = 'shadow-proof.jpg'; 
    idDivPreuve.style.display = 'block';
    baliseImg.src = 'shadow-proof.jpg'; 

}

function toggle(){
    // idImage.src = 'shadow-illusion.jpg';

    baliseImg.src = 'shadow-illusion.jpg';

    idDivPreuve.style.display = 'none';
}iPress = !ispress
    




    image = document.queryselector ('img') (il s'agit de la balise img)
    image.onmousedown = toggle; il faut enlever la baliseImg et laissé toggle ()
    image.onmouseup = toggle;

    on peut mettre iPress = !ispress et enlever les isPress = true et false dans le if et else
} dans le html on remplacera press par toggle*/


// pour pouvoir mettre la balise script dans le header il faut faire ca :
// function init () {    image = document.queryselector ('img') (il s'agit de la balise img)
//   image.onmousedown = toggle; il faut enlever la baliseImg et laissé toggle ()
// image.onmouseup = toggle; } mettre la fonction de chargement de page dans une fonction 
// enduite faire : window.onload = init; (onload permet de laisser la balise script sur le header et permet de charger la page body dabbord et ensuite le js de la function)   
