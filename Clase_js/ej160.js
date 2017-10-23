let propiedad = ['nombre', 'precio', 'cantidadVendidad','localidad'];

const juegos = [
    {
    nombre: 'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
    precio: 1060,
    cantidadVendidad: 276,
    localidad: 'Capital Federal',
    },
    {
    nombre: 'Lego Marvel Super Heroes',
    precio: 700,
    cantidadVendidad: 48,
    localidad: 'Capital Federal'
    },
    {
    nombre: 'Gta V Ps4 Físico',
    precio: 1449,
    cantidadVendidad: 82,
    localidad: 'Santa fe',
    },
    {
    nombre: 'Mortal Kombat XI Ps4 Original Fisico Sellado Nuevo',
    precio: 1190,
    cantidadVendidad: 348,
    localidad: 'Capital Federal'
    }
];

juegos.forEach(function (juego) {
    propiedad.forEach(function (propiedad) {
        console.log(`${propiedad}:`,juego[propiedad]);
    });
    console.log('\n');
});