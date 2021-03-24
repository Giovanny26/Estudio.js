
// Funcion expresada 
var sumar = function (numero1, numero2){
    return numero1 + numero2;

}
console.log (sumar(8,9))

// Funcion Declarada

function restar (numero1, numero2){
    return numero1 - numero2
}

console.log (restar(5,2))

// Scope


let mensaje = "Hola, que tal?"
function saludar (){
    let mensaje = "Hola, como va todo?" // predomina
    return mensaje
}

console.log (saludar ())
//console.log (saludar())


function esPar (numero1){
    let residuo = (numero1 % 2 == 0)
    return residuo

}

console.log (esPar (4))

//numero anterior
function anterior (n){
    return (n-1)
}

console.log (anterior (5))
//el triple del numero

function triple (n){
    return (n*3)
}

console.log (triple(3))

//numero anterior del triple
function anteriorDelTriple (n){
    return (n*3-1)
}

console.log (anteriorDelTriple(4))


var sumaFunciones = (triple(2) + anteriorDelTriple(6))

console.log (sumaFunciones)