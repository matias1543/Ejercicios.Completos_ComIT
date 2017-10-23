let helados = [];

helados.push('Vainilla', 'Americana', 'Chocholate', 'Frutilla', 'Limon', 'Menta', 'Dulce de leche',
 'Chocolate blanco', 'Banana', 'Frambuesa');

function ingresar (coleccion, nuevo) {

	let ultimoElemento = coleccion.pop();
    let primerElemento = coleccion.shift();
    
	coleccion.push(primerElemento);
	coleccion.unshift(ultimoElemento);
    
    if(nuevo == String(nuevo)) {
        coleccion.push(nuevo);
    }

    return coleccion;
}


console.log(ingresar(helados, 'Wasabi'));