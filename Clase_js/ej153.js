const aritmetica = {
    suma: function (numero1, numero2){
        if(this.validarParametros(numero1, numero2)) {
            console.log(numero1 + numero2);
        }
    },
    resta: function (numero1, numero2) {
        if(this.validarParametros(numero1, numero2)) {
            console.log(numero1 - numero2);
        }
    },
    multiplicacion: function (numero1, numero2) {
        if(this.validarParametros(numero1, numero2)) {
            console.log(numero1 * numero2);
        }
    },
    division: function (numero1, numero2) {
        if(this.validarParametros(numero1, numero2)) {
            console.log(numero1 * numero2);
        }
    },
    mostrarModulo: function (numero1, numero2) {
        if(this.validarParametros(numero1, numero2)) {
            console.log(numero1 % numero2);
        }
    },
    validarParametros: function(numero1, numero2){
        const numero1EsNumber = (typeof numero1 === 'number' && !isNaN(numero1));
        const numero2EsNumber = (typeof numero2 === 'number' && !isNaN(numero2));
        return numero1EsNumber && numero2EsNumber;
    }
}

aritmetica.suma(2, 2);
aritmetica.resta(7, 2);
aritmetica.multiplicacion(5, 5);
aritmetica.division(10, 5);
aritmetica.mostrarModulo(4, 2);