let isPress = false;

function press(baliseImg) {

    //alert(baliseImg.src);
    //let image = document.getElementById('idImage');
    //image.src = 'images/shadow-proof.jpg';
    baliseImg.src = 'images/shadow-proof.jpg';
    let divPreuve = document.getElementById('idDivPreuve');
    divPreuve.style.display = 'block';
    
}

function depress(baliseImg) {

    //let image = document.getElementById('idImage');
    //image.src = 'images/shadow-illusion.jpg';
    baliseImg.src = 'images/shadow-illusion.jpg';

    let divPreuve = document.getElementById('idDivPreuve');
    divPreuve.style.display = 'none';

}

// function toggle(evt) {

//     //alert(evt.type);
//     //alert(evt.target);

//     //let baliseImg = document.querySelector('img');
//     let baliseImg = evt.target;
//     let divPreuve = document.getElementById('idDivPreuve');

//     if (evt.type == 'mouseup') {
//         baliseImg.src = 'images/shadow-illusion.jpg';

//         //let divPreuve = document.getElementById('idDivPreuve');
//         divPreuve.style.display = 'none';
//         //isPress = false;

//     } else {
//         baliseImg.src = 'images/shadow-proof.jpg';

//         //let divPreuve = document.getElementById('idDivPreuve');
//         divPreuve.style.display = 'block';
//         //isPress = true;
//     }

//     isPress = !isPress;
// }

// function init() {
//     let image = document.querySelector('img');
//     image.onmousedown = toggle;
//     image.onmouseup = toggle;
// }

// window.onload = init;


// -----------------------------------refaire la fonction init en jquery------------------------------------------------------------

$(document).ready(function(){
    let $image = $('img');
    $image.mousedown(toggle);
    $image.mouseup(toggle);

    //ou sinon faire $image.mousedown(toggle).mouseup(toggle)

});




// -----------------------------------refaire la fonction toggle en jquery------------------------------------------------------------


function toggle(evt) {

    //alert(evt.type);
    //alert(evt.target);

    //let baliseImg = document.querySelector('img');
    let baliseImg = evt.target;
    let $baliseImg = $(baliseImg);

    //let divPreuve = document.getElementById('idDivPreuve');
    let $divPreuve = $('#idDivPreuve')



    if (evt.type == 'mouseup') {
        //baliseImg.src = 'images/shadow-illusion.jpg';
        $baliseImg.attr('src','images/shadow-illusion.jpg');

        //let divPreuve = document.getElementById('idDivPreuve');
        //divPreuve.style.display = 'none';

        $divPreuve.hide(5000); // permet de cacher le text 

        //isPress = false;

    } else {
        //baliseImg.src = 'images/shadow-proof.jpg';
        $baliseImg.attr('src','images/shadow-proof.jpg');

        //let divPreuve = document.getElementById('idDivPreuve');
        //divPreuve.style.display = 'block';

        $divPreuve.slideDown(); //permet d'afficher le text du haut vers le bas


        //isPress = true;
    }

    isPress = !isPress;
}
