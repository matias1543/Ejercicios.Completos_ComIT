function mostrarNumeros(inicio, fin) {
    if (inicio > fin) {
        console.log(inicio, fin);
    }
    else if(fin > inicio) {
        console.log(inicio, fin);
    }
    else if(inicio == fin) {
        console.log('Los numeros son iguales.')
    }
    else if(isNaN(inicio) || isNaN(fin)) {
        console.log(`Ingrese un tipo de dato number`);
    }
}

mostrarNumeros('100', 1);