// 2. (2 puntos) Pedirle al usuario un tipo de mascota, y su nombre. Crear una función que reciba
// esos datos, e imprima en pantalla o consola un mensaje del tipo: “tu mascota es un (mascota
// introducida por usuario) y su nombre es (nombre introducido por usuario)”. No necesita return.

let nombre =
prompt("Como se llama tu hijo de 4 patas:").toLowerCase();
let raza = 
prompt(" y de que raza es?:").toLowerCase();

function tuMascota(a,b){
document.write("Tu mascota se llama " + a + " y es un/a " + b);}


tuMascota(nombre,raza);
