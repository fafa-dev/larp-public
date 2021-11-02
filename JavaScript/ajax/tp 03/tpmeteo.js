function init(){
send = document.getElementById('envoyer');
send.onclick = requete;

}

window.onload = init;

function requete (){
    url ="https://www.prevision-meteo.ch/services/json/alfortville"


    monXHR= new XMLHttpRequest(); 
    monXHR.onreadystatechange = monTraitementResultat;
    monXHR.open("get",url,true);
    monXHR.send(null)

}




function monTraitementResultat(){
    if(monXHR.readyState==4){

    if(monXHR.status==200){
        resultat = JSON.parse(monXHR.responseText);
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
    
        //ligne = new Option(resultat['fcst_day_0']['hourly_data']['0H00']['TMP2m'], resultat['fcst_day_0']['hourly_data']['0H00']['TMP2m'] );
       
         

        // temp1 = day['0H00'].TMP2m;
        // temp2 = day['1H00'].TMP2m;
        // temp3 = day['2H00'].TMP2m;
        // temp4 = day['3H00'].TMP2m;
        // temp5 = day['4H00'].TMP2m;
        // temp6 = day['5H00'].TMP2m;

        // hours1 = '0H00';
        // hours2 = '1H00';
        // hours3 = '2H00';
        // hours4 = '3H00';
        // hours5 = '4h00';
        // hours6 = '5h00';

        // tab=[temp1,temp2,temp3,temp4,temp5,temp6];
        // tabh =[hours1,hours2,hours3,hours4,hours5,hours6];



        // // temp = hours['TMP2m'];
       

        // for(i=0; i<tab.length; i++ ){
          
        //     tr = document.createElement('tr');
        //     tdt = document.createElement('td');
        //     tdh = document.createElement('td');
        //     tdt.innerHTML = tab[i];
        //     tdh.innerHTML = tabh[i];
        //     tr.appendChild(tdh);
        //     tr.appendChild(tdt);
            
        //     tablo.appendChild(tr)

        }else { 
            alert("Erreur HTTP N˚"+ monXHR.status); 
        }


    }
}



