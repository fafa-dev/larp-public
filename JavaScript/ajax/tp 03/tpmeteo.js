// function init(){
// send = document.getElementById('envoyer');
// send.onclick = requete;

// }

// window.onload = init;

// function requete (){
//     // url ="https://www.prevision-meteo.ch/services/json/alfortville"


//     // monXHR= new XMLHttpRequest(); 
//     // monXHR.onreadystatechange = monTraitementResultat;
//     // monXHR.open("get",url,true);
//     // monXHR.send(null)



// }




// function monTraitementResultat(){
//     if(monXHR.readyState==4){

//     if(monXHR.status==200){
//         resultat = JSON.parse(monXHR.responseText);
//         var tablo = document.getElementById('tableau');

//         tablo.innerHTML='';
//         day = resultat['fcst_day_0']['hourly_data'];
//         console.log(day);
        
//         for(i in day){
//             console.log(i);
                  
//             tr = document.createElement('tr');
//             tdt = document.createElement('td');
//             tdh = document.createElement('td');
//             tdi = document.createElement('td');
//             img = document.createElement('img');

            
//             tdh.innerHTML = i;
//             tdt.innerHTML = day[i].TMP2m;
//             img.src = day[i].ICON;
            
        
//             tdi.appendChild(img);   
//             tr.appendChild(tdh);
//             tr.appendChild(tdt);
//             tr.appendChild(tdi)
//             tablo.appendChild(tr);
           
            
           
//         }

         






function resultat(requeteMeteo){

    let xhr = $.ajax({
       
        method: 'get',
        url: 'https://www.prevision-meteo.ch/services/json/creteil',
        dataType: 'JSON',
        
    });

    xhr.done(function (resultat){

        var tablo = document.getElementById('tableau');

        tablo.innerHTML='';
        
        day = resultat['fcst_day_0']['hourly_data'];
        console.log(day);

            for(i in day){
            console.log(i);
                  
            tr = document.createElement('tr');
            tdt = document.createElement('td');
            tdh = document.createElement('td');
            tdi = document.createElement('td');
            img = document.createElement('img');

            
            tdh.innerHTML = i;
            tdt.innerHTML = day[i].TMP2m;
            img.src = day[i].ICON;
            
        
            tdi.appendChild(img);   
            tr.appendChild(tdh);
            tr.appendChild(tdt);
            tr.appendChild(tdi)
            tablo.appendChild(tr);
           
            
           
            }
    


                


    })



}

function init(){
    send = document.getElementById('envoyer');
    send.onclick = resultat;
    


    }
    
    window.onload = init;


