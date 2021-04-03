

function puedeSubir (altura,acompañado,respeto){
        if (respeto = false){
            return false;
        }else{ 

        if(altura > 1.40 && altura < 2.00 ){
           return true;
        }else if (altura >= 1.20 && altura <= 1.40 && acompañado){
            return true;
        }else{
            return false;
        }
    }
}

console.log (puedeSubir(1.40,true,true))