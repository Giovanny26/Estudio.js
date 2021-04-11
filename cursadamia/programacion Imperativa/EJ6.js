let numerosUnoalCien = (numero1, numero2,mensaje, mensaje2, mensaje3) => {
    for (let i=1; i <= 100; i++){
        if ( i % numero1 == 0 && i % numero2 == 0){
            console.log (mensaje);
        }
        else if (i % numero1 == 0){
            console.log (mensaje2);
        }
        else if(i % numero2 == 0){
            console.log (mensaje3)
        }
        else{
            console.log (i)
        }
    }
}

console.log (numerosUnoalCien(4,5,"Multiplo de los dos", "Multiplo del primero", "multiplo del segundo"))


// // estoy en una competencia de clavados,
// en dos arrays se muestran los 5 clavados que hacen los competidores 
//en una competencia gana el que tiene el mejor promedio de clavado
// en otra gana el competidor con el mejor clavado

let clavadosParticipanteA = [5,8,4,9,5]
let clavadosParticipanteB = [8,7,8,6,8]

let puntajePorPromedio = (array) => {
    let suma = 0;
    for(let i = 0; i < array.length; i++){
    suma = suma + array[i];
    }
    return promedio = suma / array.length;
}

let puntajePorMayor = (array) => {
    let mayor = 0;
    for(let i = 0; i < array.length; i++){
        if (array[i] > mayor)
        {
            mayor = array[i];
        }
    }
    return mayor
    
}


// function competencia(resultadosA,resultadosB,calcularPuntaje){
    
//     if (calcularPuntaje(resultadosA,resultadosB))

// }








