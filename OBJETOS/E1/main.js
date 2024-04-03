// - Escribe una frase que diga "mi ordenador es un HP, con procesador i7 y 16Gb de RAM"

// - Recorre todos los valores con un bucle for in

// - Muestra el tercer extra del ordenador


const ordenador1 = {

    marca: "HP",
    
    procesador: "i7",
    
    ram: "16Gb",
    
    HD: "1Tb",
    
    precio: 1500,
    
    extras: ["cámara HD", "microfono stereo", "disco de acceso rápido"],
    
    maletin: true,
    
    }
//FRASE
    console.log("mi ordenador es un " + ordenador1.marca + " , con procesador " + ordenador1.procesador + " y "+ordenador1.ram+"de RAM");


//TODO
    for (let x in ordenador1){
        console.log(x + ":");
        console.log(ordenador1[x]);

    }
//PUNTUAL
console.log(ordenador1.extras[2]);

