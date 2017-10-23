function invertir(texto){
    let cantidadDeCaract = texto.length;
    let invertido = '';
    while (cantidadDeCaract >= 0) {
        invertido += texto.charAt(cantidadDeCaract);
        cantidadDeCaract--;
    }
    return invertido;
}

console.log(invertir(`hola`));