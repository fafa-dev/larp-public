
function calcul(an, month, day){
    let dateMilli = new Date(an, month, day);
    let resul = dateMilli.getTime();
    
    return resul;
}// conversion en milliseconde






function clique(){
    let an = document.getElementById('annee').value;
    // alert(an)
    let month = document.getElementById('mois').value;
    // alert(month)
    let day = document.getElementById('jour').value;
    // alert(day)
    let today = Date.now();
    // 
    let dateMs = calcul(an, month, day);

    let dif = today - dateMs;
  
    let sdif = dif/1000;
    let mndif = sdif/60;
    let hdif = mndif/60;
    let jdif = hdif/24; 
    let monthDif = jdif/30;
    let ydif = monthDif/12;
    let ok = document.querySelector('input[name="unite"]:checked').value;
    let result = '';
        if( ok == 0){
        result = jdif + ' jours';

        }else if(ok == 1) {
            result = monthDif + ' mois';
        }else if(ok ==2){
           result =  ydif + ' année';
        }

        alert(result);

        

}
bouton.onclick = clique;

function typeInput(){
    const aujour = new Date();
    


}

