

// ---------- declaration  reg -------

const regname = /^[A-Za-z\-\s]+/;
//const regprenom = /^[A-Za-z\-\s]+/;
const regcodPostal = /(([0][1-9])|([1-9][0-5]))\d{3}/;
const regTel = /^\s*0[1-9](\s*\d{2}){4}$/;

// let idNom = '';
// let idPrenom = '';
// let idTel = '';
// let idMail = '';
// let idSoum = '';


function init(){

idNom = document.getElementById('nom');
idPrenom = document.getElementById('prenom');
idTel = document.getElementById('telephone');
idMail = document.getElementById('mail');
idSoum = document.getElementById('soum');


testcaractere.onblur = obligatoire;


    
}

window.onload = init;





function obligatoire(event){
    let testcaractere = event.target.value;
    let currentRegex = regname;
    // idNom = document.getElementById('nom');
    // idPrenom = document.getElementById('prenom');

    if(event.target.id == 'nom'){
        currentRegex == regname;
        //testcaractere = document.getElementById('nom').value;
        alert('nom valide');

    }else if(event.target.id =='prenom'){
        //testcaractere = document.getElementById('prenom').value;
        alert('prenom valid')
    }else if(event.target.id == 'telephone'){
        currentRegex = regTel;
    }
    if(currentRegex.test(testcaractere)){
    }
    

}







