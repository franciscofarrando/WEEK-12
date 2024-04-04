// 3. (2,5 puntos) Tienes un array vacío ‘películas’. Pides al usuario que introduzca algunos títulos
// de película, que se irán añadiendo al array uno a uno. Para salir, que escriba ‘salir’. Debería evitarse
// que se añada el valor ‘salir’ a la lista de películas. Después:
// - Ordenar alfabéticamente los títulos (usar el método JS correspondiente)
// - Imprimir en consola o pantalla el array, pero cada título en una línea diferente


const peliculas = [];

//AGREGAR
function listaDePeliculas(){
    pregunta=false;
    while (pregunta==false){
    let agregaPelicula = prompt("Agrega una pelicula:");
    
    if(agregaPelicula.toLowerCase() === "salir"){
     pregunta = true;
        
    }else{
        peliculas.push(agregaPelicula);
    }
}
peliculas.sort();

document.write("Tu listado de pelicula favoritas: ");
peliculas.forEach(pelicula => document.write("<br>" + pelicula));
}

listaDePeliculas();
