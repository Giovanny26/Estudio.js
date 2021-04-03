let numeros = [1, 2, 3, 4, 5]
let numeros2 = [6, 7, 8, 9]
//preguntar si el elemento esta
function contiene(array,elemento) {
   let posicion = array.indexOf(elemento)
    return posicion >= 0
}

console.log(contiene(numeros,1))


// transladar el ultimo elemento de una array a otra
function transladar(array1,array2) {
    if (array1.length > 0){
        let elementoATransladar =array1.pop()
        array2.push(elementoATransladar)
    }else{
        console.log("el array esta vacio")
    }
    
}
transladar(numeros,numeros2)
transladar(numeros,numeros2)
console.log (numeros)
console.log (numeros2)