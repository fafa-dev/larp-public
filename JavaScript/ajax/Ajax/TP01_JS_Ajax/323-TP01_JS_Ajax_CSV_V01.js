/* 
fichier js du TP : 333_01_TP_JS-Ajax_CSV_01 : version 01
333_01_TP_JS-Ajax_CSV_01.js : lecture par ajax d'un fichier CSV
Didier Bonneau CDI Afpa Créteil
*/

// fonction unique, par de test du httpHtmlRequest
function requete() {
    // Création d'un objet XMLHttpRequest
    objetXHR = new XMLHttpRequest();
    // Configuration de requête : GET et Synchrone (false)
    objetXHR.open("get", "expositions.csv", false);
    // Envoi de la requête
    objetXHR.send(null); 	// Envoi de la requête

    /*---------- Attente du retour SYNCHRONE  : */
    console.log(objetXHR.readyState);
    //alert('retour ok');
    // Récupération  du résultat renvoyé par le serveur
    var expos = objetXHR.responseText;
    console.log(objetXHR.responseText);
    // transformation de la string expos en tableau
    listeExpos = expos.split("\r\n");
    // création des <tr> du tableau
    let tr = "";
    for (let i = 0; i < listeExpos.length; i++) {
        club = listeExpos[i].split(";")
        tr += "<tr><td>" + club[0] + "</td><td>" + club[1] + "</td><td>" + club[2] + "</td></tr>";
    }
    document.getElementById("result").innerHTML = tr;
}

