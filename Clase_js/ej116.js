function mejorJugadorArgentino(numero) {
    switch(numero) {
        case 18: return numero + ', Nery Pumpido';
        break;
        case 5: return numero + ', José Luis Brown';
        break;
        case 9: return numero + ', José Cuciuffo';
        break;
        case 19: return numero + ', Óscar Ruggeri';
        break;
        case 14: return numero + ', Ricardo Giusti';
        break;
        case 16: return numero + ', Julio Olarticoechea';
        break;
        case 2: return numero + ', Sergio Batista';
        break;
        case 12: return numero + ', Héctor Enrique ';
        break;
        case 7: return numero + ', Jorge Burruchaga';
        break;
        case 10: return numero + ', Diego Armando Maradona';
        break;
        case 11: return numero + ', Jorge Valdano';
        break;
        default: return 'Carlos Bilardo';
    }
}

console.log(mejorJugadorArgentino(18));