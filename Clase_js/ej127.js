let helados = [];
let sinStock = [];

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

function faltaStock (coleccion) {
    primerElemento = helados.shift();
    segundoElemento = helados.shift();
    sinStock = [primerElemento, segundoElemento];
    return sinStock;
}

helados = ingresar(helados);

console.log(`Gustos sin Stock:`, faltaStock(helados).join(', '), '\n');

console.log(`Gustos en Stock:`,ingresar(helados, 'Wasabi').join(', '));  