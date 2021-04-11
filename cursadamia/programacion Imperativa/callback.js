// let sumar = (numero1, numero2) => numero1 + numero2;
// let reste = (numero1, numero2) => numero1 - numero2;
// let multiplique = (numero1, numero2) => numero1 * numero2;
// let divide = (numero1, numero2) => numero1 / numero2;

// let calculadora = (numero1, numero2, operacion) => operacion (numero1, numero2)

// console.log (calculadora(40,23,reste))


let agregarHttp = (url) => {
    for(let i = 0; i <= url.length; i++){
        url [i] = "http://" + url [i]
    }
}

let procesar =(array,funcion)=>{
    funcion (array)
}


procesar(["www.google.com","www.yahoo.com"],agregarHttp)
