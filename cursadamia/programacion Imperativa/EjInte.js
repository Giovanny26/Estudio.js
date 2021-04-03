let colores = ["amarillo","azul","verde","blanco","negro"]
let colores2 = ["celeste","rosa","naranja","fucsia","marron"]


// punto 1
function posicion(elemento) {
    let posicion = colores.indexOf(elemento)
        return posicion
}

console.log (posicion("negro"))

// punto 2
function cambiarColor (array,elemento,elementoSacar){
    let posicionACambiar = array.indexOf (elementoSacar)
        if (posicionACambiar == -1){ 
        console.log ("no se hace nada") 
    }else {
        return array [(posicionACambiar)] = elemento
    } 
}


console.log(cambiarColor(colores,"rojo","blanco"))
console.log (colores)
console.log (cambiarColor(colores,"violeta","cafe"))
console.log (colores)

// punto 3
colores.push ("Cafe")
console.log (colores)

// punto 4
colores.pop ()
console.log (colores)


function comparar(){
    if (colores == colores2){
        return true
    }else{
        return false
    }
}
 
console.log (comparar())