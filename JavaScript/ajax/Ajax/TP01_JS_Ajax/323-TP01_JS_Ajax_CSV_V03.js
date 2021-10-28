/* 
fichier js du TP : 323-TP01_JS_Ajax_CSV_V02 : version 01bis
323-TP01_JS_Ajax_CSV_V02.js : lecture par ajax d'un fichier CSV avec test de la réponse
Didier Bonneau CDI Afpa Créteil
*/

// déclaration d'un booléen sync par défaut à true
// true : requête asynchrone, false requête synchrone
var sync = true;

/**
 * Envoi de la requete
 */
function requete() {
    // Création d'un objet XMLHttpRequest
    objetXHR = new XMLHttpRequest();
    // création de la fonction de callback
    objetXHR.onreadystatechange = reponse;
    // Configuration de requête GET Synchrone ou Asynchrone
    objetXHR.open("get", "expositions.csv", sync);
    // supression des tr de la table
    document.getElementById("result").innerHTML = "";
    // Affichage du chargeur
    document.getElementById("chargeur").style.display = "block";
    // Envoi de la requête
    objetXHR.send( null ); 
    // test du fonctionnement synchrone ou asynchrone
    // en synchrone la boite de dialogue apparait une fois la réponse reçue
    // en asynchrone elle apparait immédiatement
    prompt("Vous pouvez saisir pendant l'attente");
}

/**
 * traitement de la réponse
 */
function reponse() {
   /*---------- Attente du retour SYNCHRONE  : */
   if(objetXHR.readyState === 4){
       if(objetXHR.status === 200){
           alert("reponse reçue");
            // Récupération  du résultat renvoyé par le serveur
            let expos = objetXHR.responseText;
            let listeExpos = csvToArray(expos, ';'); 
            // transformation de la string expos en tableau
            //listeExpos= expos.split("\n");
            // création des <tr> du tableau
            let tr = "";
            for(let i=0; i < listeExpos.length; i++){
                //club = listeExpos[i].split(";");
                //tr += "<tr><td>"+ listeExpos[i][0]+"</td><td>"+listeExpos[i][1]+"</td><td>"+listeExpos[i][2]+"</td></tr>";
                tr += "<tr>";
                for(j = 0; j < listeExpos[i].length; j++){
                    tr += "<td>"+ listeExpos[i][j]+"</td>";
                }
                tr += "</tr>";
            }
            document.getElementById("result").innerHTML = tr;
            // Affichage du chargeur
            document.getElementById("chargeur").style.display = "none";
       }
   }
}

function csvToArray(csv, separ) {

    let result = [];
    let tabLignes = csv.split('\r\n');
    for (let idx = 0; idx < tabLignes.length; idx++) {
        tabInfos = tabLignes[idx].split(separ);
        result.push(tabInfos);
    }
    console.log(result);
    return result;
}

// fonction d'inversion du booléen sync
function inverseSync(){
    sync = !sync;
}
