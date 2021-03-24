function suma (numero1, numero2){
    return numero1 + numero2
}

function resta (numero1, numero2){
    return numero1 - numero2
}

function multiplicacion (numero1, numero2){
    return numero1 * numero2
}

function division (numero1, numero2){
    return numero1 / numero2
}

console.log (suma(5,1))
console.log (resta(8,2))
console.log (multiplicacion(3,2))
console.log (division(12,2))

// ejercicio 3
let nombreJugador = "Lopi"
let golesJugador = 0
let precioEnDolares = 0

function hacerGol(){
    golesJugador++
    console.log ("GOL!!!!!!")
    precioEnDolares = (precioEnDolares + 10000)
} 




//ejercicio 4
function hattrick(){
    hacerGol()
    hacerGol()
    hacerGol()       
    precioEnDolares = (precioEnDolares + (precioEnDolares * 0.1)) //10%

}

hattrick()
console.log (golesJugador)
console.log (precioEnDolares)



