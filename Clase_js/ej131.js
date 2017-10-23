let alumnas = ['Jazmin', 'Belen', 'Beatriz', 'Ludmila', 'Carmen'];
let alumnos = ['Juanjo', 'Ricardo', 'Cristian', 'Jose', 'Lucas'];
let alumnosAlumnas = alumnas.concat(alumnos);

console.log('\n',alumnas[0], alumnas[1], alumnas[2], alumnas[3], alumnas[4], '\n');

let contador = 0;
while(contador != 5) {
    console.log(`${contador}.Indice:`,alumnos[contador]);
    contador++;
}

console.log('\n');

for(let contador1 = 0; contador1 < 10; contador1++) {
    console.log(`${contador1}. Indice: `,alumnosAlumnas[contador1]);
}