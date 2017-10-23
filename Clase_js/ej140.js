let mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];

mutantes = mutantes.filter(function (nombre){
    return nombre !== 'Scott Summers';
});

mutantes.forEach(function (nombre){
    console.log(nombre);
});