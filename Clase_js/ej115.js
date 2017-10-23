function elMasGrande(nombre) {
    if (nombre == `Roman`) {
        return `El mejor de la historia es Román`.toUpperCase();
    }
    else {
        return `Por favor ingrese el nombre de un gran jugador`.toLowerCase();
    }
}

console.log(elMasGrande(`Roman`));