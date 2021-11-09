/*let tabSourceImgs = [
    "images/paires01/1.jpg", 0 1
    "images/paires01/2.jpg", 1 2
    "images/paires01/3.jpg",
    "images/paires01/4.jpg",
    "images/paires01/5.jpg",
    "images/paires01/6.jpg",
    "images/paires01/7.jpg",
    "images/paires01/8.jpg", 7 8
    "images/paires01/1.jpg", 8
    "images/paires01/2.jpg", 9
    "images/paires01/3.jpg",
    "images/paires01/4.jpg",
    "images/paires01/5.jpg",
    "images/paires01/6.jpg",
    "images/paires01/7.jpg",
    "images/paires01/8.jpg", 15
];*/
let tabSourceImgs = [];
let nbrClick = 0;
let nbrCoup = 0;
let nbrPaire = 0;

function creerTableau() {

    tabSourceImgs = [];

    let choix = $('#idChoix').val();
    console.log(choix);

    for (let index = 0; index < 8; index++) {
        
        tabSourceImgs.push('images/paires'+choix+'/'+(index+1)+'.jpg');
        tabSourceImgs.push('images/paires'+choix+'/'+(index+1)+'.jpg');

    }
    console.log(tabSourceImgs);
    rejouer();
}

function creerImage() {

    let $container = $('#container');

    let ul = '<ul>';

    for (let index = 0; index < tabSourceImgs.length; index++) {

        ul += '<li><img src="' + tabSourceImgs[index] + '"></li>';

    };

    ul += '</ul>';

    $container.html(ul);

    $('img').hide();
}

function clickImage(evt) {
    console.log(evt.target);
    console.log(evt.currentTarget);
    console.log($(evt.target).children().first());
    // le target est <li> au 1er click et <img> si reclick sur la même image
    let $img = $(evt.currentTarget).children().first();
    // currentTarget est toujours la balise <li>
    console.log($img.hasClass('retournee'));
    if (nbrClick < 2 && !$img.hasClass('retournee')) {
        //let $li = $(evt.target);
        //$li.children().show();
        $img.show();
        //$li.children().attr('class', 'retournee');
        //$img.attr('class', 'retournee');
        $img.addClass('retournee');
        nbrClick++;
        if (nbrClick == 2) {
            // traitement verifier même image
            verifImage();
        }
    }
}

function verifImage() {
    let imgs = $('img.retournee');
    console.log(imgs[0].src);

    if (imgs[0].src == imgs[1].src) {
        //alert('mêmes images');
        imgs.removeAttr('class');
        imgs.parent().off('click');
        nbrClick = 0;
        nbrPaire++;
        $('#idNbrPaire').val(nbrPaire);
        if (nbrPaire == 8) {
            alert('Gagné !!');
        }
    } else {
        //alert('images différentes');
        imgs.removeAttr('class');

        setTimeout(function(){
            imgs.hide();
            nbrClick = 0;
        }, 2000);

    }

    nbrCoup++;
    $('#idNbrEssai').val(nbrCoup);

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
    $('#idNbrEssai').val(nbrCoup);
    nbrPaire = 0;
    $('#idNbrPaire').val(nbrPaire);

    brassage();

    creerImage();

    $('li').click(function (e) {
        clickImage(e);
    });


}

$(document).ready(function () {

    creerTableau();

/*    brassage();

    creerImage();

    $('li').click(function (e) {
        clickImage(e);
    });
*/
    //rejouer();
    
    $('#idRejouer').click(function(){
        rejouer();
    });

    $('#idChoix').change(function(){
        creerTableau();
    });

});