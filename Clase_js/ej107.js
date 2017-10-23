function numeroMasGrande(numero1, numero2) {
    if(numero1 > numero2) {
        console.log(`El numero ${numero1} es mas grande que ${numero2}`);
    }
    else if(numero1 == numero2) {
        console.log(`Los dos numeros son ${numero1}`);
    }
    else if(isNaN(numero1) || isNaN(numero2)){
        console.log(`Esta función espera valores del tipo number`);
    }
    else{
        console.log(`El numero ${numero2} es mas grande que ${numero1}`);
    }
}

numeroMasGrande(35, 50);