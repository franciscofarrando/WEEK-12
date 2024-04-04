let dia =
prompt("Que dia de la semana te llama la atencion?:").toLowerCase();
let tiempo = 
prompt("Commo te gustaria que este el tiempo ese dia?:").toLowerCase();

function elTiempo(a,b){
document.write("El dia " + a + " estara " + b);}


elTiempo(dia,tiempo);