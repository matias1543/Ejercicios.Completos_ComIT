function esPar(numero) {
    if(!isNaN(numero) && numero % 2 === 0) {
        console.log(`${numero} es par`);
    }
    else if(!isNaN(numero) && numero % 2 !== 0){
        console.log(`${numero} no es par`);
    }
    else if(isNaN(numero)) {
        console.log(`Ingrese un tipo de dato number`);
    }

}

esPar('hola');