// Sobre este objeto:
// - Añadir una característica: oferta (Boolean) -C-
// - Modificar una característica: descripción -U-
// - Borrar una característica -D-
// - Mostrar el objeto antes y después -R-
// - Probar a mostrar solo valores (values) y solo propiedades (keys)

const galletas = {
    marca: "Artiach",
    nombre: "Chiquilín",
    descripción: "galletas de mantequilla",
    precio: 2.75,
    hayExistencias: true
    };

    //PRIMERA LECTURA
    console.log(galletas)
 
    //AGREGAR PROPIEDAD Y VALOR
    galletas.oferta= true;

    //MODIFICAR
    galletas.descripción= "Galletas de lino"

    //BORRAR

    delete galletas.oferta;

    //ULTIMA LECTURA

    console.log(galletas)

    // FOR IN solo valores
    for (let x in galletas){
        console.log("Valores: " + x)
        }

    // FOR IN solo Propiedades

    for (let x in galletas){
        console.log("Propiedades: "+ galletas[x])
        }