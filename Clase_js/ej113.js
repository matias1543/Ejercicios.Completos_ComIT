function obtenerPerimetroRectangulo(base, altura) {
    if(base == altura) {
        return `El perimetro es ${base * 4}`;
    }
    else if(base != altura) {
        return `El perimetro es ${base * altura}`
    }
}

console.log(obtenerPerimetroRectangulo(4, 6)  + '.', obtenerPerimetroRectangulo(4, 6) > 100 ? 'El perímetro es muy grande' : 'Este perímetro no es muy grande');