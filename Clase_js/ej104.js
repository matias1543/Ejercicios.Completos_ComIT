let fibonacci = function () {
    let numero1 = 0;
    let numero2 = 1;
    for (let contador = 0; contador < 5; contador++) {
        console.log(numero1);
        console.log(numero2);
        numero1 += numero2;
        numero2 += numero1;
    }
}

for (let i = 0; i < 3; i++) {
    fibonacci ();
}