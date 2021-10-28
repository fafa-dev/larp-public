/* 
fichier js du TP : 323-TP01_JS_Ajax_XML
323-TP01_JS_Ajax_XML.js : lecture par ajax d'un fichier xml avec test de la réponse
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
    objetXHR.open("get", "expositions.xml", sync);
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
            let expos = objetXHR.responseXML; 
            // expos est un objet de type XMLDocument
            // recherche dans expos des éléments expo
            listeExpos = expos.getElementsByTagName("expo");
            // création des <tr> du tableau
            let tr = "";
            for(let i=0; i<listeExpos.length; i++){
                nom = listeExpos[i].firstElementChild;
                theme = nom.nextElementSibling;
                date = theme.nextElementSibling;
                tr += "<tr><td>" + nom.firstChild.textContent + "</td>\
                           <td>" + theme.textContent + "</td>\
                           <td>" + date.textContent + "</td></tr>";
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

