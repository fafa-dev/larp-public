let tabSourceImgs = [];
let nbrClick = 0;
let nbrCoup = 0;
let nbrPaire = 0;

function creerTableau() {

    tabSourceImgs = [];

    let choix = document.getElementById('idChoix').value;
    console.log(choix);

    for (let index = 0; index < 8; index++) {
        
        tabSourceImgs.push('images/paires'+choix+'/'+(index+1)+'.jpg');
        tabSourceImgs.push('images/paires'+choix+'/'+(index+1)+'.jpg');

    }
    console.log(tabSourceImgs);
    rejouer();
}

function creerImage() {

    //let $container = $('#container');
    let container = document.querySelector('#container');

    let ul = '<ul>';

    for (let index = 0; index < tabSourceImgs.length; index++) {

        ul += '<li><img src="' + tabSourceImgs[index] + '"></li>';

    };

    ul += '</ul>';

    //$container.html(ul);
    container.innerHTML = ul;

    //$('img').hide();
    tabImg = document.querySelectorAll('img');
    tabImg.forEach(function(elementImg){
        elementImg.style.display = 'none';
    });
}

function clickImage(evt) {
    console.log(evt.target);
    console.log(evt.currentTarget);
    //console.log($(evt.target).children().first());
    // le target est <li> au 1er click et <img> si reclick sur la même image
    //let $img = $(evt.currentTarget).children().first();
    let img = evt.currentTarget.firstElementChild;
    let attrClass = img.getAttribute('class');
    console.log(attrClass);
    // currentTarget est toujours la balise <li>
    //console.log($img.hasClass('retournee'));
    //if (nbrClick < 2 && !$img.hasClass('retournee')) {
    if (nbrClick < 2 && attrClass !== 'retournee') {
        //let $li = $(evt.target);
        //$li.children().show();
        //$img.show();
        img.style.display = 'block';
        //$li.children().attr('class', 'retournee');
        //$img.attr('class', 'retournee');
        //$img.addClass('retournee');
        img.setAttribute('class', 'retournee');
        nbrClick++;
        if (nbrClick == 2) {
            // traitement verifier même image
            verifImage();
        }
    }
}

function verifImage() {
    //let imgs = $('img.retournee');
    let imgs = document.querySelectorAll('img.retournee');
    console.log(imgs[0].src);

    if (imgs[0].src == imgs[1].src) {
        //alert('mêmes images');
        //imgs.removeAttr('class');
        imgs.forEach(function(elementImg){
            elementImg.removeAttribute('class');
            //elementImg.parentElement.removeEventListener('click', clickImage);
            elementImg.parentElement.onclick = null;
        });
        //imgs.parent().off('click');
        nbrClick = 0;
        nbrPaire++;
        //$('#idNbrPaire').val(nbrPaire);
        document.querySelector('#idNbrPaire').value = nbrPaire;
        if (nbrPaire == 8) {
            alert('Gagné !!');
        }
    } else {
        //alert('images différentes');
        //imgs.removeAttr('class');
        imgs.forEach(function(elementImg){
            elementImg.removeAttribute('class');
         });

        setTimeout(function(){
            //imgs.hide();
            imgs.forEach(function(elementImg){
                elementImg.style.display = 'none';
             });
            nbrClick = 0;
        }, 2000);

    }

    nbrCoup++;
    //$('#idNbrEssai').val(nbrCoup);
    document.querySelector('#idNbrEssai').value = nbrCoup;

}

function brassage() {

    for (let index = 0; index < tabSourceImgs.length; index++) {
        
        j = Math.floor(Math.random() * 15);
        console.log(j);
        let temp = tabSourceImgs[index];
        tabSourceImgs[index] = tabSourceImgs[j];
        tabSourceImgs[j] = temp;
    }

}

function rejouer() {

    nbrClick = 0;
    nbrCoup = 0;
    document.querySelector('#idNbrEssai').value = nbrCoup;
    nbrPaire = 0;
    document.querySelector('#idNbrPaire').value = nbrPaire;

    brassage();

    creerImage();

/*    $('li').click(function (e) {
        clickImage(e);
    });*/

    tabLi = document.querySelectorAll('li');
    tabLi.forEach(function (elementLi) {
        elementLi.onclick = clickImage;
        //elementLi.addEventListener('click', clickImage);
    });

}
/*
$(document).ready(function () {

    creerTableau();

    $('#idRejouer').click(function(){
        rejouer();
    });

    $('#idChoix').change(function(){
        creerTableau();
    });

});
*/
window.onload = function () {

    creerTableau();

    //document.getElementById('idRejouer').onclick = rejouer;
    document.getElementById('idRejouer').onclick = function(){
        rejouer();
    };

    document.getElementById('idChoix').onchange = function(){
        creerTableau();
    };

};