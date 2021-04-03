let notas = [3, 5, 10, 9, 7, 8, 8, 8]

//agregar
notas.push(1)
notas.push(2)
notas.push(5)

//quita el ultimo elemento
notas.pop()
//trae el ultimo elemento
let elUltimo = notas.pop()
//quita el primer elementos
notas.shift()
notas.shift()
//añade elemento al inicio
notas.unshift(1)

let diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes" ]
//me trae la primera posicion de ese elemento
let posicionViernes = diasSemana.indexOf("viernes")
//me trae la ultima posicion de ese elemento
let ultimaPosicion = diasSemana.lastIndexOf ("viernes")
//join me muestra esos elementos como yo quiero 
let resultado = diasSemana.join (",  ")

console.log (resultado)
console.log (posicionViernes)
console.log (ultimaPosicion)
console.log (notas)
console.log (elUltimo)