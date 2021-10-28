/* 
fichier js du TP : 323-TP01_JS_Ajax_JSON
323-TP01_JS_Ajax_JSON.js : lecture par ajax d'un fichier json avec test de la réponse
Didier Bonneau DWWM Afpa Créteil maj 29-07-2020
*/

// déclaration d'un booléen sync par défaut à true
// true : requête asynchrone, false requête synchrone
let sync = true;

/**
 * Envoi de la requete
 */
function requete() {
    // Création d'un objet XMLHttpRequest
    objetXHR = new XMLHttpRequest();
    // création de la fonction de callback
    objetXHR.onreadystatechange = reponse;
    // Configuration de requête GET et Synchrone
    //objetXHR.open("get", "30_TP_JS-AJAX_02.php", sync);
    objetXHR.open("get", "expositions.json", sync);
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
            // traduction de expos en objet javascript
            listeExpos = JSON.parse(expos);
             // création des <tr> du tableau
           let tr = "";
            for(let i=0; i<listeExpos.length; i++){
                tr += "<tr><td>"+ listeExpos[i].nomClub+"</td>\n\
                           <td>"+listeExpos[i].theme+"</td>\n\
                           <td>"+listeExpos[i].date+"</td></tr>";
            }
            
            document.getElementById("result").innerHTML = tr;
            // Affichage du chargeur
            document.getElementById("chargeur").style.display = "none";
       }
   }
}

// fonction d'inversion du booléen sync
function inverseSync(){
    sync = !sync;
}

