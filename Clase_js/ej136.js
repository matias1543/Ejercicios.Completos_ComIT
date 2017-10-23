let mutantes = ['Prof. Charles Francis Xavier', 'Scott Summers', 'Dr. Henry Philip "Hank" McCoy', 'Jean Elaine Grey', 'Calvin Montgomery Rankin', 'Kevin Sydney', 'Lorna Sally Dane', 'Alexander Summers', 'Suzanne Chan', 'James "Logan" Howlett', 'Ororo Monroe'];
let string = '';

mutantes.forEach(function (nombres, indice){
    if(nombres == 'Jean Elaine Grey') {
        string = string.concat(nombres);
        string+=' / ';
    }
    else if(nombres == 'James "Logan" Howlett') {
        string = string.concat(nombres);
        string+=' / ';
    }
});

console.log(string);