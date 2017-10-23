let gastosViaje = [hotel = 100, viaje = 1000, comida = 200];

let gastosTotal = gastosViaje.reduce(function (sumaTotal, gastos){
    return sumaTotal + gastos;
});

console.log(gastosTotal);