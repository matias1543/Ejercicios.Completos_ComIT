let mostrarNombre = function (){
    let nombre = '= Matias ='
    let string = ''
    let cantCarac = nombre.length;
    while(cantCarac > 0) {
        string+='=';
        cantCarac--;
    }
    console.log(string);
    console.log(nombre);
    console.log(string);
}

for (let contador = 0; contador < 2; contador++) {
    mostrarNombre ();
}