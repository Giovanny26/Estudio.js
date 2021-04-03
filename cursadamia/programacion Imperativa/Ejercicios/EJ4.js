
const nombreNico = "Nicolas Lopez"; //string
var edad = 27;//number
var peso = 83.5; // number
var altura = 1.70; // number
var prepaga = true; // booleano
var imcNico =  peso / (altura * altura); // number 

const nombreEsteban = "Esteban Piazza"; 
var edad2 = 28; 
var peso2 = 80.1;
var altura2 = 1.70;
var prepaga2 = true;
var imcEsteban = peso2 / (altura2 * altura2);


const nombreSofi = "Sofia Perez";
var edad3 = 22;
var peso3 = 56;
var altura3 = 1.60;
var prepaga3 = false;
var imcSofi =  peso3 / (altura3 * altura3);


console.log(imcNico);
console.log(imcEsteban);
console.log(imcSofi);

console.log(nombreNico + " tiene " + edad + " años y su indice de masa corporal es de " + imcNico);
console.log(nombreEsteban + " tiene " + edad2 + " años y su indice de masa corporal es de " + imcEsteban);
console.log(nombreSofi + " tiene " + edad3 + " años y su indice de masa corporal es de " + imcSofi);