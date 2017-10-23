let numeros = [];

for (let contador = 0; contador <= 1000; contador++) {
    numeros[contador] = contador;
}

let numerosPares = numeros.filter(function (numero) {
    return numero % 2 == 0;
});

let numerosImpares = numeros.filter(function (numero) {
    return numero % 2 != 0;
});

console.log('Numeros Pares:')
for (let i = 0; i <= 10; i++) {
    console.log(numerosPares[i]);
}
console.log('\nNumeros Impares:')
for (let i = 0; i <= 10; i++) {
    console.log(numerosImpares[i]);
}