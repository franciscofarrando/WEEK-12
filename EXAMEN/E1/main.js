// 1. (2,5 puntos) Tus seis familiares quieren entrar en el torneo de ping-pong de tu barrio. Hay algunos
// gastos de inscripción:
// - Adultos, pagan 10 euros, y menores de 18 años, pagan 5 euros
// Para cobrarles el ticket, el cajero pregunta la edad a los seis participantes.
// Crear un programa para preguntar y calcular el monto total de las seis inscripciones, que debes
// mostrar en pantalla o consola.

function sumaTorneo(jugadores){
    let totalJugadores = 0;
    for(let i = 0; i < jugadores.length; i++) {
        let edad = parseInt(prompt("Ingrese la edad del Jugador " + ( i + 1 ) + ":"));
        if (edad >= 18){
            totalJugadores += 10;

        } else {
            totalJugadores += 5;
        }

    }
    return totalJugadores;
    
}

const participantes = new Array(6);

console.log("Edad de los Jugadores?:");
const totalJugadores = sumaTorneo(participantes);

console.log("El torneo a recaudado: €" + totalJugadores);