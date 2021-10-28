let objXHR;

function init(){
    buton = document.getElementById('bouton');
    buton.onclick = charger;
    
}
function charger(){
    tableau.innerHTML =''
    objXHR = new XMLHttpRequest();
    objXHR.open("get", "expositions.csv", false);
    objXHR.send(null);
    tabClub = objXHR.responseText.split('\r\n');// permet d'isoler chaque ligne r= retour au debut et n= retour a la ligne
    tableau = document.getElementById('tableau');

    
    for(i=0; i<tabClub.length; i ++){
        let tr = document.createElement('tr');
        let tab = tabClub[i].split(';'); // permet disoler chaque mot avant le ;
        for (let j = 0; j < tab.length; j++) {
           let td = document.createElement('td');
           let text = document.createTextNode(tab[j]);
           td.appendChild(text);
           tr.appendChild(td);
        }
        tableau.appendChild(tr);
    }
    

}


window.onload = init;

// let objXHR;



// function loadXML() {

//     objXHR = new XMLHttpRequest();
//     objXHR.onreadystatechange = xmlFin;
//     objXHR.open("get", "expositions.csv", true);
//     objXHR.send(null);
// }


// function callback{


// }