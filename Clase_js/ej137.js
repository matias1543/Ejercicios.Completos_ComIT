let numeros = [];

for (let contador = 0; contador <= 1000; contador++) {
    numeros[contador] = contador;
}

let numerosModificados = numeros.map(function (numero) {
    return numero + 10;
});

for (let i = 0; i < numerosModificados.length; i++) {
    console.log(numerosModificados[i]);
}