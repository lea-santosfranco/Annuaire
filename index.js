/**alert (document.getElementById("nom").value + " " + document.getElementById("prenom").value);
document.getElementById("mon-bouton").onclick = function direBonjour(){
    alert("bonjour!");
}

*/

document.getElementById("mon-bouton2").onclick = function calculer(){
    let nombre1 = document.getElementById("premier-nombre").value;
    let nombre2 = document.getElementById("deuxieme-nombre").value;
    console.log (nombre1 + nombre2);
    let nombre3 = parseFloat(nombre1);
    let nombre4 = parseFloat(nombre2);

    let resultat = nombre3 + nombre4;
    console.log(resultat);
    document.getElementById("resultat").value = resultat;
}
