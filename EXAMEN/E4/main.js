// Interacción con el DOM de HTML, y con el estilo de CSS. En un campo input se
// pregunta en qué medio quieres viajar, pide que se introduzca la palabra “barco”, “bicicleta” o “locomotora”
// (u otros). Según la respuesta:
// - Mostrar en pantalla un mensaje y una imagen adecuados a cada caso
// - Cambiar el color de fondo de la página (tres colores diferentes según la respuesta)



function infoCaption(){
    let medio = document.getElementById("vehiculo").value;


    document.getElementById("vehiculoElegido").innerHTML = medio;
     if (medio == "bicicleta"){
        document.getElementById("vehiculoElegido").innerHTML = "Su vehiculo elegido es: " + medio + ". A peladear!!!";
     }else if (medio == "bus"){
            document.getElementById("vehiculoElegido").innerHTML = "Su vehiculo elegido es: " + medio + ", no olvides el pase";
    }else if (medio == "tram"){
            document.getElementById("vehiculoElegido").innerHTML = "Su vehiculo elegido es: " + medio + ", el medio mas bonito y tranquilo";
    }else if (medio == "tren"){
            document.getElementById("vehiculoElegido").innerHTML = "Su vehiculo elegido es: " + medio + ". Ten cuidado con los horarios";
     }else{
       alert("Pues ve andando...");
     }

}


  