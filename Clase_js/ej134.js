let numeros = [];
let sumaParcial = 0;

for (let contador = 0; contador <= 10000; contador++) {
    numeros[contador] = contador;
    sumaParcial += numeros[contador];
    console.log(sumaParcial);
}

console.log(`La suma tota es ${sumaParcial}\n`);

if (sumaParcial == 50005000) {
    console.log('El ejercicio es correcto');
}
else {
    console.log('Verificar el ejercicio para obtener el resultado esperado!!!');
}