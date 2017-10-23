let mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];

let mutantesModificados = mutantes.map(function (nombres){
    if(nombres == 'Prof. Charles Francis Xavier') {
        nombres = 'Mutante Modificado One';
    }
    else if(nombres == 'James "Logan" Howlett') {
        nombres = 'Mutante Modificado Two';
    }
    else if(nombres == 'Jean Elaine Grey') {
        nombres = 'Mutante Modificado Three';
    }
    
    if(nombres == 'Scott Summers' || nombres == 'Dr. Henry Philip "Hank" McCoy') {
        nombres = '<3 ' + nombres;
    }
    return nombres;
});

console.log('Mutantes originales:\n', mutantes);
console.log('\nMutantes modificados:\n', mutantesModificados);