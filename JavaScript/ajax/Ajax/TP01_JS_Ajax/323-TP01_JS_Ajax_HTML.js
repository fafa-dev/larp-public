/* 
fichier js du TP : 323-TP01_JS_Ajax_HTML : version 01bis
323-TP01_JS_Ajax_HTML.js : lecture par ajax d'un fichier HTML avec test de la réponse
Didier Bonneau DWWM Afpa Créteil
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
    objetXHR.open("get", "expositions.html", sync);
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
            var expos = objetXHR.responseText; 
            document.getElementById("result").innerHTML = expos;
            // Affichage du chargeur
            document.getElementById("chargeur").style.display = "none";
       }
   }
}

// fonction d'inversion du booléen sync
function inverseSync(){
    sync = !sync;
}
