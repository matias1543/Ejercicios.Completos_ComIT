let helados = [];

helados.push('Vainilla', 'Americana', 'Chocholate', 'Frutilla', 'Limon', 'Menta', 'Dulce de leche', 'Chocolate blanco', 'Banana', 'Frambuesa');

for(let contador = 0; contador < helados.length; contador++) {
    console.log(helados[contador]);
}
console.log('\n');
for(let contador1 = helados.length -1; contador1 >= 0; contador1--) {
    console.log(helados[contador1]);
}