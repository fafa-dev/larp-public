// // //--------- premiere correction----------



// let tabSourcesImg = [];
// let nbrClick =0 ;
// let nbrCoup = 0;
// let nbrPaire = 0;

// function creeTab(){
//     tabSourcesImg = []
//     //let choix = $('#idChoix').val();
//     let choix = document.getElementById('idChoix').value;
//     for(i = 0; i<8 ; i++){

//         tabSourcesImg.push('images/paires'+choix+'/'+(i+1)+'.jpg'); //--> de 1 a 8
//         tabSourcesImg.push('images/paires'+choix+'/'+(i+1)+'.jpg');// de 1 a 8 pour que ca fasse 16

//     }
//     console.log(tabSourcesImg);
//     rejouer();
   


// }

// function creerImage(){
//     //let container = document.getElementById('container');
//     let $container = $('#container');
    
//     let ul = '<ul>';
    
//     for (let i = 0; i <tabSourcesImg.length; i++) {
//         ul += '<li><img src="'+ tabSourcesImg[i] +'"></li>';
        
        
//     };
//     ul += '</ul>';
    
//     $container.html(ul);
    
//    $('img').hide() ;  //---> va chercher tous les tag img query selector all
    
// }

// function clickImage(evt){
//     //alert(evt.target) //le bouton click fonctionne bien (il sagit dune varable local a ma fonction (evt))
//     //li = evt.target ---> en js
//     //1 er click = li et second click = img

//     let $img = $(evt.currentTarget).children().first();
//     //le currenttarget est toujours la balise <LI> celui qui gere l'evenement 
//     if(nbrClick<2 && !$img.hasClass('retourner')){//---> et que les images avec la class  retourner ne soit pas retourné "!"
//         //let $li = $(evt.target);
//         //$li.children().show();
//         $img.show()
//         //$li.children().attr('class','retourner') //permet dajouter une classe a la balise image
//         $img.attr('class','retourner')
//         nbrClick++;
//         if (nbrClick == 2) {
//             //verifier meme image
//             verifImage()
//         } 
//     }
// }


// function verifImage(){
//     let imgs = $('img.retourner');
//    // console.log(imgs[0].src);
//    if (imgs[0].src == imgs[1].src) {
//        //alert('meme image');
//        imgs.removeAttr('class') //peut aussi etre mis a la sorti de la condition

//        $(imgs).show()
//        nbrClick = 0
//        // une fois que les cartes sont les meme, il faut mettre le selecteur .off() pour enlever le droit de cliquer 2 fois
//        imgs.parent().off('click')
//        nbrPaire ++;
//        $('#idNbrPaire').val(nbrPaire);
//        if (nbrPaire == 8) {
//            alert('bravo vous avez gagner avec ' + nbrCoup + " coup")
           
//        }

       
//    } else {
//        //alert('image diff');
//        imgs.removeAttr('class')
//        //$(imgs).hide(1000)
//        setTimeout(function(){
//            imgs.fadeOut(500);
//            nbrClick = 0;
//        }, 1000) //-> au bout d'1 secode les image se retourne
       
       
       
              
//    }
//    nbrCoup ++;
//    $('#idNbrEssai').val(nbrCoup); // mettre le nombre de coup sur la valeur de l'input de l'id nbressae
    
// }


// function brassage(){

//     for (let I = 0; I < tabSourcesImg.length; I++) {
//         j = Math.floor(Math.random()*15);
//         console.log(j);
//         let temp = tabSourcesImg[I];
//         tabSourcesImg[I] = tabSourcesImg[j];
//         tabSourcesImg[j] = temp;
        
        
//     }
// }



// function rejouer(){

//     let nbrClick =0 ;
//     let nbrCoup = 0;
//     let nbrPaire = 0;
//     $('#idNbrPaire').val(nbrPaire);
//     $('#idNbrEssai').val(nbrCoup);
//     brassage();
//     creerImage();

//     $('li').click(function(e){            //----->on va aller chercher toutes les li et leur attribuer le onclick
//         clickImage(e); //---> (e) = (evt) variable local a la fonction il ny a pas besoin de mettre let entre parenthese
//     }); 



// }


// $(document).ready(function(){

//     creeTab()

//     //rejouer();

//     $('#idRejouer').click(function(){
//         rejouer()
//     })

//     $('#idChoix').change(function(){
//         creeTab()
//     })
    
// });



// //--------------------------------------------correction en js -----------------------------------------------

function init(){
document.getElementById('idRejouer').onclick = rejouer;
//document.getElementById('idRejouer').onclick = function(){ rejouer ()}; permet de mettre plusieurs fonction a ce click

document.getElementById('idChoix').onchange = function(){
    creeTab()
}
//document.getElementById('idChoix').onchange = creeTab();

}
window.onload = init;


let tabSourcesImg = [];
let nbrClick =0 ;
let nbrCoup = 0;
let nbrPaire = 0;



function creeTab(){
    tabSourcesImg = [];
    
    let choix = document.getElementById('idChoix').value;
    for(i = 0; i<8 ; i++){

        tabSourcesImg.push('images/paires'+choix+'/'+(i+1)+'.jpg'); //--> de 1 a 8
        tabSourcesImg.push('images/paires'+choix+'/'+(i+1)+'.jpg');// de 1 a 8 pour que ca fasse 16

    }
    console.log(tabSourcesImg);
    rejouer();
   


}


function rejouer(){

    let nbrClick =0 ;
    let nbrCoup = 0;
    let nbrPaire = 0;
    
    document.getElementById('idNbrPaire').value = nbrCoup;
    
    document.getElementById('idNbrEssai').value = nbrPaire;
    brassage();
    creerImage();

    tabLi = document.querySelectorAll('li')
    tabLi.forEach(function (elementLi) {
        elementLi.onclick = clickImage;
        
    });
            //for (i= 0 ; i<tabLi.length; i ++){
            //tabli[i].onclick = clickImage;
            //}


}



function creerImage(){
    
    
    let container = document.getElementById('container')
    
    let ul = '<ul>';
    
    for (let i = 0; i <tabSourcesImg.length; i++) {
        ul += '<li><img src="'+ tabSourcesImg[i] +'"></li>';
        
        
    };
    ul += '</ul>';
    
    //$container.html(ul);
    container.innerHTML = ul
    
   //$('img').hide() ;  //---> va chercher tous les tag img query selector all
   tabImg = document.querySelectorAll('img')
   tabImg.forEach(function(elementImg){
       elementImg.style.display = 'none'; 

   });
    
}


 function brassage(){

   for (let I = 0; I < tabSourcesImg.length; I++) {
        j = Math.floor(Math.random()*15);
         console.log(j);
         let temp = tabSourcesImg[I];
        tabSourcesImg[I] = tabSourcesImg[j];
         tabSourcesImg[j] = temp;
        
        
     }
 }

function clickImage(evt){
    //alert(evt.target) //le bouton click fonctionne bien (il sagit dune varable local a ma fonction (evt))
    //li = evt.target ---> en js
    //1 er click = li et second click = img

    //let $img = $(evt.currentTarget).children().first();
    let img = evt.currentTarget.firstElementChild;
    //le currenttarget est toujours la balise <LI> celui qui gere l'evenement 
    let attrClass = img.getAttribute('class') // permet davoir les attribue class
    if(nbrClick<2 && attrClass!== 'retourner'){
        //let $li = $(evt.target);
        //$li.children().show();
        //$img.show()
        img.style.display = 'block;'
        //$li.children().attr('class','retourner') //permet dajouter une classe a la balise image
        //$img.attr('class','retourner')  
        img.setAttribute('class','retourner'); // attribue lattribu classe avec la valeur retourner
        nbrClick++;
        if (nbrClick == 2) {
            //verifier meme image
            verifImage()
        } 
    }
}


function verifImage(){
    //let imgs = $('img.retourner');
    let imgs = document.querySelectorAll('img.retourner')
   // console.log(imgs[0].src);
   if (imgs[0].src == imgs[1].src) {
       //alert('meme image');
       imgs.removeAttr('class') //peut aussi etre mis a la sorti de la condition
       imgs.forEach(function(elementImg){
        elementImg.removeAttribute('class');
        // une fois que les cartes sont les meme, il faut mettre le selecteur .off() pour enlever le droit de cliquer 2 fois
        //imgs.parent().off('click')
        elementImg.parentElement.removeEventListener('click', clickImage) //enlever levennement au parents
    });
    
    //$(imgs).show()
       nbrClick = 0
       nbrPaire ++;
    //    $('#idNbrPaire').val(nbrPaire);
        document.querySelector('#idNbrPaire').value = nbrPaire
       if (nbrPaire == 8) {
           alert('bravo vous avez gagner avec ' + nbrCoup + " coup")
           
       }

       
   } else {
       //alert('image diff');
      // imgs.removeAttr('class')
       //$(imgs).hide(1000)
       imgs.forEach(function(elementImg){
        elementImg.removeAttribute('class');

    });
       setTimeout(function(){
           //imgs.fadeOut(500);
           imgs.forEach(function(elementImg){
            elementImg.style.display = 'none'
    
        });
           nbrClick = 0;
       }, 1000) //-> au bout d'1 secode les image se retourne
       
       
       
              
   }
   nbrCoup ++;
   //$('#idNbrEssai').val(nbrCoup); // mettre le nombre de coup sur la valeur de l'input de l'id nbressae
   document.querySelector('#idNbrEssai').value = nbrCoup
}