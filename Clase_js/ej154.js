const mostrarEstadoDeJugador = function (jugador) {
    mensaje = `El jugador ${jugador.nombre}`;
    mensaje += `tiene ${jugador.energia} de energia`;
    mensaje += `y ${jugador.vidas} vidas`;
    console.log(mensaje);
}


const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,
    perderEnergia: function (danio){
        this.energia-= danio;
        this.perderVida();
        if(this.energia < 0){
            this.energia = 0;
        }
    },
    recuperarEnergia: function (energiaRecuperada){
        if(energiaRecuperada >= 0) {
            this.energia += energiaRecuperada;
            if(this.energia > 100) {
                this.energia = 100;
            } 
        }
    },
    perderVida: function () {
        this.vidas--;
        if(this.vidas < 0) {
            this.vidas = 0;
        }
    },
    recuperarVida: function () {
        this.vidas++;
        if(this.vidas > 99) {
            this.vidas = 99;
        }
    },
}

jugador.nombre = 'Pedro';

// El this es la referencia de los objetos.

