// 2. (2 puntos) Pedirle al usuario un tipo de mascota, y su nombre. Crear una función que reciba
// esos datos, e imprima en pantalla o consola un mensaje del tipo: “tu mascota es un (mascota
// introducida por usuario) y su nombre es (nombre introducido por usuario)”. No necesita return.


let raza = 
prompt(" Cual es la raza de tu hijo de 4 patas?:").toLowerCase();
let nombre =
prompt("Como se llama:").toLowerCase();

function tuMascota(a,b){
document.write("Tu mascota es un/a " + a + " y su nombre es " + b);
    }


tuMascota(raza,nombre);
