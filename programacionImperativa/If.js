
//1
let dato = true

if ( dato = true){

    console.log ("es true")

} else {

    console.log ("es false")
}

//ejemplo1

let edad = 21

if ( edad < 18){
    console.log("prohibido")
}else{
    console.log("permitido")
}

//2

let lenguaje = "javascript";

if (lenguaje ="javascript"){
    console.log ("estoy aprendiendo")
}else{
    console.log ("lo aprendere mas tarde")
}

//3
function puedePasar(nombre) {
    if (nombre == "Cosme Fulanito"){
        return false
    }else{ 
         return true
    }
}

console.log (puedePasar("Natalia Natalia"))
console.log (puedePasar("Juan Perez"))

//ternario

let fruta = "manzana";

let resultado = fruta == "manzana"? "Super rico": "Consiguete una";
console.log (resultado)

//switch

let semaforo = "ninguno"

switch(semaforo){
    case "verde":
        console.log ("puedo cruzar")
        break;
    case "amarillo":
        console.log ("casi casi")
        break;
    case "rojo":
        console.log ("no puedo pasar")
        break;
    default:
        console.log ("no funciona")
}

var dia = 'jueves'

switch (dia) {	
	case "viernes": 
    	console.log('buen finde')
        break;
	case 'lunes': 
    	console.log('buena semana')
        break;
    default:
	    console.log('buen dia')
	
}

var dia = "viernes"

	switch (dia) {
    	case "lunes":
        case "miercoles":
        case "viernes":
            console.log ("tenés clases")
            break;
        default:
            console.log ("no tenés clases")
        
}
