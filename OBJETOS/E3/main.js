// 3- Crear objetos que sean coches con sus características: marca, modelo, potencia, precio, etc
// - Con esos objetos, crear un array de objetos
// - Con ese array de objetos, mostrar por ejemplo, todos los modelos. (opción preguntar al usuario
// qué quiere mostrar)

const coche1 = {
    marca: "Audi", 
    modelo: "A8", 
    potencia: "286 cv", 
    precio: "$115.000",
    stock: true
}


const coche2 = {
    marca: "BMW", 
    modelo: "M3", 
    potencia: "375 cv", 
    precio: "$124.000",
    stock: true
}

const coche3 = {
    marca: "Cupra", 
    modelo: "Born", 
    potencia: "231 cv", 
    precio: "$38.000",
    stock: false
}


//ARRAY DE OBJETOS
const concesionaria = [
    {
    marca: "Audi", 
    modelo: "A8", 
    potencia: "286 cv", 
    precio: "$115.000",
    stock: true
},
 {
    marca: "BMW", 
    modelo: "M3", 
    potencia: "375 cv", 
    precio: "$124.000",
    stock: true
},
{
    marca: "Cupra", 
    modelo: "Born", 
    potencia: "231 cv", 
    precio: "$38.000",
    stock: false
}

]


// - Con ese array de objetos, mostrar por ejemplo, todos los modelos. (opción preguntar al usuario
// qué quiere mostrar)
let respuesta =
prompt("Que te gustaria ver sobre los coches?: marcas, modelos, potencias, precios, stocks? ");

if (respuesta == "marcas"){
    for (let x in concesionaria)
    document.write(concesionaria[x].marca + "<br>");
}else if (respuesta == "modelos"){
    for (let x in concesionaria)
    document.write(concesionaria[x].modelo + "<br>");
}else if (respuesta == "potencias"){
    for (let x in concesionaria)
    document.write(concesionaria[x].potencia + "<br>");
}else if (respuesta == "precios"){
    for (let x in concesionaria)
    document.write(concesionaria[x].precio + "<br>");
}else if (respuesta == "stocks"){
    for (let x in concesionaria)
    document.write(concesionaria[x].stock + "<br>");
}else{
    alert("Sin respuesta");
}
