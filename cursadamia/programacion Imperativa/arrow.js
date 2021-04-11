let laMitad = numero => numero /2;

console.log (laMitad(8));

let dividir = (numeroA, numeroB) => numeroA / numeroB

console.log( dividir (25,5));

let tengoQueTrabajar = dia => {
    if (dia == "sabado" || dia == "domingo" ) {
        return "No tengo que trabajar"
    }else{
        return "Tengo que ir a trabajar"
    }
}

console.log (tengoQueTrabajar("lunes"))