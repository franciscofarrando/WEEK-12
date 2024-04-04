const lenguajes = [
    "Python",
    "Java",
    "JavaScript",
    "C#",
    "C++",
    "PHP",
    "Ruby",
    "Swift",
    "TypeScript",
    "HTML/CSS",
    "SQL"
  ];

function mostrarLenguages(){
  let consulta = false;

  while( consulta == false){
    let indice = prompt("Hay un listado de 10 lenguaje, lee cada uno del 1 al "+ lenguajes.length + " con el 0 se sale de la consulta");
    console.log(indice);
    if (indice > 0 && indice <= lenguajes.length){
      alert("El lenguaje elegido es " + lenguajes[indice - 1]);
    }else if (indice == 0){
    consulta = true;
    }else{
    alert("introduce un numero del 1 al " + lenguajes.length);  
}
}
}
mostrarLenguages()